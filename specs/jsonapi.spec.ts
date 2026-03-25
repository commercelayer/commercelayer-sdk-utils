import type { Sku } from '@commercelayer/sdk'
import { describe, expect, test } from 'vitest'
import { denormalizeResponse } from '../src/jsonapi'


const PAYLOAD = `{
  "data": [
    {
      "id": "naDeSyGoEB",
      "type": "skus",
      "links": {
        "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB"
      },
      "attributes": {
        "code": "APRONXXX000000FFFFFFXXXX",
        "name": "Black Apron with White Logo",
        "description": "This apron has a neck loop and long ties that are easy to adjust for any size. The two front pockets provide additional space for some much-needed cooking utensils, and together with our embroidered logo give the apron a sleek premium look.",
        "image_url": "https://data.commercelayer.app/seeder/images/skus/APRONXXX000000FFFFFFXXXX_FLAT.png",
        "pieces_per_pack": null,
        "weight": null,
        "unit_of_weight": null,
        "hs_tariff_number": null,
        "do_not_ship": false,
        "do_not_track": false,
        "created_at": "2026-02-25T10:00:02.249Z",
        "updated_at": "2026-02-25T09:59:59.214Z",
        "reference": "sku_3",
        "reference_origin": null,
        "jwt_custom_claim": null,
        "metadata": {}
      },
      "relationships": {
        "shipping_category": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/relationships/shipping_category",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/shipping_category"
          }
        },
        "prices": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/relationships/prices",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/prices"
          },
          "data": [
            {
              "type": "prices",
              "id": "goPlULDMxa"
            }
          ]
        },
        "stock_items": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/relationships/stock_items",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/stock_items"
          }
        },
        "stock_reservations": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/relationships/stock_reservations",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/stock_reservations"
          }
        },
        "delivery_lead_times": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/relationships/delivery_lead_times",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/delivery_lead_times"
          }
        },
        "sku_options": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/relationships/sku_options",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/sku_options"
          }
        },
        "sku_list_items": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/relationships/sku_list_items",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/sku_list_items"
          }
        },
        "sku_lists": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/relationships/sku_lists",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/sku_lists"
          }
        },
        "attachments": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/relationships/attachments",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/attachments"
          }
        },
        "links": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/relationships/links",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/links"
          }
        },
        "events": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/relationships/events",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/events"
          }
        },
        "tags": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/relationships/tags",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/tags"
          }
        },
        "versions": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/relationships/versions",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/versions"
          }
        },
        "jwt_customer": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/relationships/jwt_customer",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/jwt_customer"
          }
        },
        "jwt_markets": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/relationships/jwt_markets",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/jwt_markets"
          }
        },
        "jwt_stock_locations": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/relationships/jwt_stock_locations",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/jwt_stock_locations"
          }
        },
        "event_stores": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/relationships/event_stores",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/naDeSyGoEB/event_stores"
          }
        }
      },
      "meta": {
        "mode": "test",
        "organization_id": "LRzVJFKYpR",
        "trace_id": "1ef43a585929332929151709c70b432b37b5eecf1e30d029949c5201d3790529"
      }
    },
    {
      "id": "ZALKSQJYKn",
      "type": "skus",
      "links": {
        "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn"
      },
      "attributes": {
        "code": "APRONXXXFFFFFF000000XXXX",
        "name": "White Apron with Black Logo",
        "description": "This apron has a neck loop and long ties that are easy to adjust for any size. The two front pockets provide additional space for some much-needed cooking utensils, and together with our embroidered logo give the apron a sleek premium look.",
        "image_url": "https://data.commercelayer.app/seeder/images/skus/APRONXXXFFFFFF000000XXXX_FLAT.png",
        "pieces_per_pack": null,
        "weight": null,
        "unit_of_weight": null,
        "hs_tariff_number": null,
        "do_not_ship": false,
        "do_not_track": false,
        "created_at": "2026-02-25T10:00:02.249Z",
        "updated_at": "2026-02-25T09:59:59.214Z",
        "reference": "sku_4",
        "reference_origin": null,
        "jwt_custom_claim": null,
        "metadata": {}
      },
      "relationships": {
        "shipping_category": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/relationships/shipping_category",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/shipping_category"
          }
        },
        "prices": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/relationships/prices",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/prices"
          },
          "data": [
            {
              "type": "prices",
              "id": "pPOmUDrnZa"
            }
          ]
        },
        "stock_items": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/relationships/stock_items",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/stock_items"
          }
        },
        "stock_reservations": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/relationships/stock_reservations",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/stock_reservations"
          }
        },
        "delivery_lead_times": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/relationships/delivery_lead_times",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/delivery_lead_times"
          }
        },
        "sku_options": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/relationships/sku_options",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/sku_options"
          }
        },
        "sku_list_items": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/relationships/sku_list_items",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/sku_list_items"
          }
        },
        "sku_lists": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/relationships/sku_lists",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/sku_lists"
          }
        },
        "attachments": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/relationships/attachments",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/attachments"
          }
        },
        "links": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/relationships/links",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/links"
          }
        },
        "events": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/relationships/events",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/events"
          }
        },
        "tags": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/relationships/tags",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/tags"
          }
        },
        "versions": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/relationships/versions",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/versions"
          }
        },
        "jwt_customer": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/relationships/jwt_customer",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/jwt_customer"
          }
        },
        "jwt_markets": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/relationships/jwt_markets",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/jwt_markets"
          }
        },
        "jwt_stock_locations": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/relationships/jwt_stock_locations",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/jwt_stock_locations"
          }
        },
        "event_stores": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/relationships/event_stores",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/skus/ZALKSQJYKn/event_stores"
          }
        }
      },
      "meta": {
        "mode": "test",
        "organization_id": "LRzVJFKYpR",
        "trace_id": "1ef43a585929332929151709c70b432b37b5eecf1e30d029949c5201d3790529"
      }
    }
  ],
  "included": [
    {
      "id": "goPlULDMxa",
      "type": "prices",
      "links": {
        "self": "https://demo-store-stg.stg2.commercelayer.co/api/prices/goPlULDMxa"
      },
      "attributes": {
        "currency_code": "USD",
        "sku_code": "APRONXXX000000FFFFFFXXXX",
        "amount_cents": 2000,
        "amount_float": 20,
        "formatted_amount": "$20.00",
        "original_amount_cents": 2000,
        "formatted_original_amount": "$20.00",
        "compare_at_amount_cents": 2700,
        "compare_at_amount_float": 27,
        "formatted_compare_at_amount": "$27.00",
        "processed_at": "2026-03-24T08:51:29.272Z",
        "created_at": "2026-02-25T10:00:27.698Z",
        "updated_at": "2026-02-25T10:00:24.823Z",
        "reference": "price_253",
        "reference_origin": null,
        "jwt_custom_claim": null,
        "metadata": {}
      },
      "relationships": {
        "price_list": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/prices/goPlULDMxa/relationships/price_list",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/prices/goPlULDMxa/price_list"
          }
        },
        "sku": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/prices/goPlULDMxa/relationships/sku",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/prices/goPlULDMxa/sku"
          }
        },
        "price_tiers": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/prices/goPlULDMxa/relationships/price_tiers",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/prices/goPlULDMxa/price_tiers"
          }
        },
        "price_volume_tiers": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/prices/goPlULDMxa/relationships/price_volume_tiers",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/prices/goPlULDMxa/price_volume_tiers"
          }
        },
        "price_frequency_tiers": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/prices/goPlULDMxa/relationships/price_frequency_tiers",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/prices/goPlULDMxa/price_frequency_tiers"
          }
        },
        "attachments": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/prices/goPlULDMxa/relationships/attachments",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/prices/goPlULDMxa/attachments"
          }
        },
        "versions": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/prices/goPlULDMxa/relationships/versions",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/prices/goPlULDMxa/versions"
          }
        },
        "jwt_customer": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/prices/goPlULDMxa/relationships/jwt_customer",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/prices/goPlULDMxa/jwt_customer"
          }
        },
        "jwt_markets": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/prices/goPlULDMxa/relationships/jwt_markets",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/prices/goPlULDMxa/jwt_markets"
          }
        },
        "jwt_stock_locations": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/prices/goPlULDMxa/relationships/jwt_stock_locations",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/prices/goPlULDMxa/jwt_stock_locations"
          }
        },
        "event_stores": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/prices/goPlULDMxa/relationships/event_stores",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/prices/goPlULDMxa/event_stores"
          }
        }
      },
      "meta": {
        "mode": "test",
        "organization_id": "LRzVJFKYpR",
        "trace_id": "1ef43a585929332929151709c70b432b37b5eecf1e30d029949c5201d3790529"
      }
    },
    {
      "id": "pPOmUDrnZa",
      "type": "prices",
      "links": {
        "self": "https://demo-store-stg.stg2.commercelayer.co/api/prices/pPOmUDrnZa"
      },
      "attributes": {
        "currency_code": "USD",
        "sku_code": "APRONXXXFFFFFF000000XXXX",
        "amount_cents": 2000,
        "amount_float": 20,
        "formatted_amount": "$20.00",
        "original_amount_cents": 2000,
        "formatted_original_amount": "$20.00",
        "compare_at_amount_cents": 2700,
        "compare_at_amount_float": 27,
        "formatted_compare_at_amount": "$27.00",
        "processed_at": "2026-03-24T08:51:29.279Z",
        "created_at": "2026-02-25T10:00:27.698Z",
        "updated_at": "2026-02-25T10:00:24.823Z",
        "reference": "price_254",
        "reference_origin": null,
        "jwt_custom_claim": null,
        "metadata": {}
      },
      "relationships": {
        "price_list": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/prices/pPOmUDrnZa/relationships/price_list",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/prices/pPOmUDrnZa/price_list"
          }
        },
        "sku": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/prices/pPOmUDrnZa/relationships/sku",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/prices/pPOmUDrnZa/sku"
          }
        },
        "price_tiers": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/prices/pPOmUDrnZa/relationships/price_tiers",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/prices/pPOmUDrnZa/price_tiers"
          }
        },
        "price_volume_tiers": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/prices/pPOmUDrnZa/relationships/price_volume_tiers",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/prices/pPOmUDrnZa/price_volume_tiers"
          }
        },
        "price_frequency_tiers": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/prices/pPOmUDrnZa/relationships/price_frequency_tiers",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/prices/pPOmUDrnZa/price_frequency_tiers"
          }
        },
        "attachments": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/prices/pPOmUDrnZa/relationships/attachments",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/prices/pPOmUDrnZa/attachments"
          }
        },
        "versions": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/prices/pPOmUDrnZa/relationships/versions",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/prices/pPOmUDrnZa/versions"
          }
        },
        "jwt_customer": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/prices/pPOmUDrnZa/relationships/jwt_customer",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/prices/pPOmUDrnZa/jwt_customer"
          }
        },
        "jwt_markets": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/prices/pPOmUDrnZa/relationships/jwt_markets",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/prices/pPOmUDrnZa/jwt_markets"
          }
        },
        "jwt_stock_locations": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/prices/pPOmUDrnZa/relationships/jwt_stock_locations",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/prices/pPOmUDrnZa/jwt_stock_locations"
          }
        },
        "event_stores": {
          "links": {
            "self": "https://demo-store-stg.stg2.commercelayer.co/api/prices/pPOmUDrnZa/relationships/event_stores",
            "related": "https://demo-store-stg.stg2.commercelayer.co/api/prices/pPOmUDrnZa/event_stores"
          }
        }
      },
      "meta": {
        "mode": "test",
        "organization_id": "LRzVJFKYpR",
        "trace_id": "1ef43a585929332929151709c70b432b37b5eecf1e30d029949c5201d3790529"
      }
    }
  ],
  "meta": {
    "record_count": 2,
    "page_count": 1
  },
  "links": {
    "first": "https://demo-store-stg.stg2.commercelayer.co/api/skus?filter%5Bdiscovery%5D=apron&include=prices&page%5Bnumber%5D=1&page%5Bsize%5D=10",
    "last": "https://demo-store-stg.stg2.commercelayer.co/api/skus?filter%5Bdiscovery%5D=apron&include=prices&page%5Bnumber%5D=1&page%5Bsize%5D=10"
  }
}`



describe('sdk-utils.jsonapi suite', () => {

  test('jsonapi.denormalize', async () => {

    const payload = PAYLOAD

    const skuResponse = denormalizeResponse<Sku>(payload)

    let sku: Sku
    expect(skuResponse).toBeDefined()

    if (Array.isArray(skuResponse)) {
      expect(skuResponse).toHaveLength(2)
      sku = skuResponse[0]
    } else sku = skuResponse

    expect(sku.type).toBe('skus')
    expect(sku.id).not.toBeNull()

  })

})
