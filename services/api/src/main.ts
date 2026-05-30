import cors from "cors";
import express from "express";
import { env } from "./config.js";
import { prisma } from "./lib/prisma.js";
import { requireRole } from "./middleware/auth.js";
import { adminRouter } from "./routes/admin.js";
import { commuterRouter } from "./routes/commuter.js";
import { driverRouter } from "./routes/driver.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: "ok", db: "connected", service: "bussin-api" });
  } catch {
    res.status(503).json({ status: "degraded", db: "disconnected", service: "bussin-api" });
  }
});

app.use("/admin", requireRole("admin"), adminRouter);
app.use("/driver", requireRole("driver"), driverRouter);
app.use("/commuter", requireRole("commuter", "admin"), commuterRouter);

app.use((error: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const message = error instanceof Error ? error.message : "Unknown server error";
  res.status(500).json({ message });
});

app.listen(env.PORT, () => {
  console.log(`Bussin API listening on http://localhost:${env.PORT}`);
});
