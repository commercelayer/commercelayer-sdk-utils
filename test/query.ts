import CommerceLayer, { QueryFilter, QueryParamsList } from "@commercelayer/sdk"
import { buildFilter, buildInclude, CommerceLayerUtils, Filter, Include, OrderFilter } from "../src"



const organization = 'sdk-test-org'
const accessToken = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjliN2JiZmVlMzQzZDVkNDQ5ZGFkODhmMjg0MGEyZTM3YzhkZWFlZTg5NjM4MGQ1ODA2YTc4NWVkMWQ1OTc5ZjAifQ.eyJvcmdhbml6YXRpb24iOnsiaWQiOiJ3UlBwRUZPRWxSIiwic2x1ZyI6InNkay10ZXN0LW9yZyIsImVudGVycHJpc2UiOnRydWUsInJlZ2lvbiI6ImV1LXdlc3QtMSJ9LCJhcHBsaWNhdGlvbiI6eyJpZCI6IlZwRFhXaXFrQnAiLCJjbGllbnRfaWQiOiJ5T0lKMXMzZXotaGkxVmhJbFZrMzBGZTdFSzE1Mml4bmZHTjF6RWtpWDBJIiwia2luZCI6ImludGVncmF0aW9uIiwicHVibGljIjpmYWxzZX0sInNjb3BlIjoibWFya2V0OmFsbCIsImV4cCI6MTcyOTcwMjIzNiwidGVzdCI6dHJ1ZSwicmFuZCI6MC4zNTcwMjA4MDI3NTYxODc4NiwiaWF0IjoxNzI5Njk1MDM2LCJpc3MiOiJodHRwczovL2F1dGguY29tbWVyY2VsYXllci5pbyJ9.OYANybtqcijBw7z2QUsq5HkT4haUUeEasm2jO4cTlfJk--lzCS7eojyY3aMAlH4RvTym9F3bomm1zEG5D4whWGCeFiZOLD8qpnZMIv-Tq2EK61kThY1rUkevb8U-Vj1DPuERAAQEn8jHjKXAHxIeEXymPstkh9rITehenNkklzNu_kRzZtwJvVksLFg7zwgFuxmNZkkbOFlqtudvMPbccKQLYxznR5nV74KlRec6jGUlSqKuN8x1LZy6U5D_e4u4j0kpb5xXK1cssEFhO0XqMGKwTCkic7wY93rEHfHwXc3K68D1pssy0Eqs4yCeffH-BVk-uuhCEF8InEkW5_m8jI0vOlLOaD1zuJ8w3-FtSkU26oqhGJjc04ZeFv7aPbARXnhbh98T5qgQPL6EMUcpMSICEwDB6-qD38E0mgUGD6gvkWytvUQn4W-4xqAJKdqCXwXgYt9AXdtpIiSxuDQaZXwswX9YkAsWEX1_UHVE_w77p2k9Ru6pk6562CgG5fNSz7vFiXpcdN8xqZQR8gMgYXRCMhYUqMI0IGJpCQrb78Dct8AyeTzIttSTmaSMf1nu9k7cHyskx2mhmk85a3ERnicBWG2oW5wK64842iUJ7nUmqYFoU7A0rjD4lw9nPgLAvxU3OaxAqeqrYK5IcCpvX-wWUZ9jwKiRsXqDB9-io10'
const cl = CommerceLayer({ organization, accessToken })

const utils = CommerceLayerUtils(cl)


const test = async () => {

  try {
    const includeHelper = Include.new()
    const filterHelper = Filter.new<OrderFilter>()

    filterHelper.orders.number.or

    const queryParams: QueryParamsList = {
      include: buildInclude(includeHelper.orders.billing_address, includeHelper.orders.customer.customer_group, includeHelper.orders.billing_address.geocoder.attachments),
      filters: buildFilter(filterHelper.orders.number.or.customer.email.eq('pippo'), filterHelper.orders.attachments.description.does_not_match('auguri')),
      pageSize: 1
    }
    console.log(queryParams)

    

    // const orders = await cl.orders.list(filter)

    // console.log(orders)
  } catch (error: any) {
    console.log(error)
  }

}


void test()
