const axios = require("axios")
const Helper = require("./helpers/error_to_string")

/**
 * @class Basqet
 */
class Basqet {
    constructor(secretkey) {
        this.secretKey = secretkey
        this.request = axios.create({
            baseURL: 'https://api.basqet.com/v1/',
            headers: {
                Authorization: `Bearer ${secretkey}`,
                'Content-Type': 'application/json'
            }
        })
    }

    /**
     * Fetch Available currency
     * @param {string} currenyType - 'FIAT' | 'CRYPTO'
     * @returns {Promise<any | undefined>} The response
     */
    async fetchAllCurrency(currenyType) {
        try {
            const response = await this.request.get(`currency${currenyType == null ? '' : `?type=${currenyType}`}`)
            return response.data
        } catch (err) {
            Helper.processError(err)
        }
    }

    /**
     * Initialize transaction
     * @param {{ customer: { name: string, email: string }, amount: int, curreny: string, meta: object}} data 
     * @returns {Promise<any | undefined>} The response
     */
    async initializeTransaction(data) {
        try {
            const response = await this.request.post('transaction', data)
            return response.data
        } catch (err) {
            Helper.processError(err)
        }
    }

    /**
     * Initiate transaction
     * @param {string} transactionId 
     * @param {{ currency_id: string }} data 
     * @returns {Promise<any | undefined>} The response
     */
    async initiateTransaction(transactionId, data) {
        try {
            const response = await this.request.post(`transaction/${transactionId}/pay`, data)
            return response.data
        } catch (err) {
            Helper.processError(err)
        }
    }

    /**
     * Verify transaction
     * @param {string} transactionId 
     * @returns {Promise<any | undefined>} The response
     */
    async verifyTransaction(transactionId) {
        try {
            const response = await this.request.get(`transaction/${transactionId}/status`)
            return response.data
        } catch (err) {
            Helper.processError(err)
        }
    }

    /**
     * Mock webhook events
     * @param {string} transactionId 
     * @param {{ status: string }} data 
     * @returns {Promise<any | undefined>} The response
     */
    async triggerWebhook(transactionId, data) {
        try {
            const response = await this.request.post(`transaction/${transactionId}/trigger`, data)
            return response.data
        } catch (err) {
            Helper.processError(err)
        }
    }
}

module.exports = Basqet
