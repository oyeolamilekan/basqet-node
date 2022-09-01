const email = "test@gmail.com"
const first_name = "oye"
const last_name = "olalekan"
const reference = "snfji9rnf59jvnnv"

const customer = {
  name: `${first_name} ${last_name}`,
  email
}

const customerData = {
  customer,
  amount: "1000",
  currency: "NGN",
  meta: {
    reference
  }
}

module.exports = {
  customerData,
}