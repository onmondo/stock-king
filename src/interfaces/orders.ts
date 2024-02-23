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
    gainsOrLoss: number;
    targetEarnings?: number;
    targetTotalAmount?: number;
    isTargetMet: boolean;
}

// for new entry
export interface INewOrderTransaction {
    userUuid: string;
    dateTransaction: string;
    type: string;
    ticker: string;
    shares: number;
    cost?: number;
    netAmount: number;
    grossAmount: number;
    gainsOrLoss: number;
    targetEarnings: number;
    // targetTotalAmount: number;
    isTargetMet: boolean;
}