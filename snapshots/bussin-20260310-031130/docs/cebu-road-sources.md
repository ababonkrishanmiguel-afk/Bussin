# Cebu Road And Demand Sources (MVP Demo)

This file records the external references used to tune Bussin demo routing and demand zones.

## OpenStreetMap tagging / legend reference

- OSM `highway=*` map features and class definitions:
  - https://wiki.openstreetmap.org/wiki/map_features
  - https://wiki.openstreetmap.org/wiki/Highways

## Cebu corridor road references

- N8 highway (Cebu North Road + Cebu South Road / Natalio Bacalso Avenue):
  - https://en.wikipedia.org/wiki/N8_highway
- Cebu North Road details and N810 linkage:
  - https://en.wikipedia.org/wiki/Cebu_North_Road

## Terminal references

- Cebu North Bus Terminal:
  - https://en.wikipedia.org/wiki/Cebu_North_Bus_Terminal
- Cebu South Bus Terminal:
  - https://en.wikipedia.org/wiki/Cebu_South_Bus_Terminal

## Demand / passenger density references

- PSA Region VII highlights (2020 CPH):
  - https://psa.gov.ph/content/highlights-region-vii-central-visayas-population-2020-census-population-and-housing-2020
- PSA PSGC city populations (Region VII):
  - https://psa.gov.ph/classification/psgc/cities/0700000000
- Cebu Province boarding/alighting survey (LPTRP):
  - https://www.cebu.gov.ph/10722/cebu-capitol-launches-boarding-and-alighting-survey-to-improve-public-transport/

## Notes

- For strict no-custom-road behavior, this app now uses OSM main-road classes only: `primary`, `secondary`, `tertiary`.
- Vehicle polylines continue to be generated through OSM-backed routing and are snapped to extracted OSM road points from those classes.
