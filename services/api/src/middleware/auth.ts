import type { NextFunction, Request, Response } from "express";
import { z } from "zod";

const roleSchema = z.enum(["commuter", "driver", "admin"]);

export type AppRole = z.infer<typeof roleSchema>;

export type AuthedRequest = Request & {
  auth?: {
    userId: string;
    role: AppRole;
  };
};

export function requireRole(...acceptedRoles: AppRole[]) {
  return (req: AuthedRequest, res: Response, next: NextFunction): void => {
    const roleResult = roleSchema.safeParse(req.header("x-user-role"));
    const userId = req.header("x-user-id");

    if (!roleResult.success || !userId) {
      res.status(401).json({
        message: "Missing auth headers. Use x-user-id and x-user-role for now."
      });
      return;
    }

    if (!acceptedRoles.includes(roleResult.data)) {
      res.status(403).json({ message: "Forbidden for this role." });
      return;
    }

    req.auth = {
      userId,
      role: roleResult.data
    };
    next();
  };
}
