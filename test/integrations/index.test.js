const Basqet = require('../../lib/basqet')
require('dotenv').config()
const { expect } = require('chai')
const { customerData } = require('../fixures')

describe('Basqet', () => {
    let initiateTransaction;
    let initializedTransaction;

    const basqet = new Basqet(process.env.BASQET_SECRET_KEY);

    console.log(basqet.secretKey)

    it('Fetch all currencies', async () => {
        try {
            const data = await basqet.fetchAllCurrency()
            expect(data).to.be.an('object')
            expect(data.status).to.be.equal('success')
            expect(data.data).to.be.an('array')
        } catch (error) {
            expect(error.status).to.be.equal('error')
        }
    })

    it('Initialize transaction', async () => {
        try {
            const data = await basqet.initializeTransaction(customerData)
            initializedTransaction = data
            expect(data).to.be.an('object')
            expect(data.status).to.be.equal('success')
        } catch (error) {
            expect(error.status).to.be.equal('error')
        }
    })

    it('Initiate transaction', async () => {
        try {
            const data = await basqet.initiateTransaction(initializedTransaction.data.id, { "currency_id": 3 })
            initiateTransaction = data
            expect(data).to.be.an('object')
            expect(data.status).to.be.equal('success')
        } catch (error) {
            console.log(error)
            expect(error.status).to.be.equal('failed')
        }
    })

    it('Verify transaction', async () => {
        try {
            const data = await basqet.verifyTransaction(initiateTransaction.data.id)
            expect(data).to.be.an('object')
            expect(data.status).to.be.equal('success')
        } catch (error) {
            expect(error.status).to.be.equal('failed')
        }
    })

    it('Mock webhook events', async () => {
        try {
            const data = await basqet.triggerWebhook(initiateTransaction.data.id, {status: 'SUCCESSFUL'})
            expect(data).to.be.an('object')
            expect(data.status).to.be.equal('success')
        } catch (error) {
            expect(error.status).to.be.equal('failed')
        }
    })
})