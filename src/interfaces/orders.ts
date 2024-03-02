// for display
export interface IOrderTransaction {
    id: string;
    transactionDate: string;
    type: string;
    ticker: string;
    shares: number;
    cost?: number;
    grossAmount?: number;
    netAmount: number;
    targetGains?: number;
    totalAmount?: number;
    isTargetMet: boolean;
}

// for new entry
export interface INewOrderTransaction {
    transactionDate: string;
    type: string;
    ticker: string;
    shares: number;
    cost?: number;
}