import { AxiosInstance } from "axios";

export type Currency = 'USD' | 'NGN';

export type CryptoTickers = 'BTC' | 'USDT' | 'ETH' | 'QDX' | 'LTC'

export type Status = "SUCCESSFUL" | "ABANDONED" | "OVERPAID" | "UNDERPAID"

export interface Customer {
    name: string,
    email: string
}

export interface InitializePayload {
    customer: Customer;
    amount: string;
    currency: CryptoTickers;
    meta: Object;
}

export interface InitiatePayload {
    currencyId: string;
}

declare class Basqet {
    public secretKey: string;

    private request: AxiosInstance

    constructor(secretKey: string)

    /**
     * Fetch Available currency
     * @param {string} currenyType - 'FIAT' | 'CRYPTO'
     */
    fetchAllCurrency(currenyType?: string): Promise<any | undefined>

    /**
    * Initialize transaction
    * @param {{ customer: { name: string, email: string }, amount: int, curreny: string, meta: object}} data 
    */
    initializeTransaction(data: InitializePayload): Promise<any | undefined>

    /**
     * Initiate transaction
     * @param {string} transactionId 
     * @param {{ currencyId: string }} data 
     */
    initiateTransaction(transactionId: string, data: InitiatePayload): Promise<any | undefined>

    /**
     * Verify transaction
     * @param {string} transactionId 
     */
    verifyTransaction(transactionId: string): Promise<any | undefined>
    
    /**
     * Mock webhook events
     * @param {string} transactionId 
     * @param {{ status: string }} data 
     */
    triggerWebhook(transactionId: string, transactionStatus: Status): Promise<any | undefined>
}

export default Basqet
