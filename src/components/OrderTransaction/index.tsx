import React from "react";
import "./rowtransaction.css";
import { OrderStatus } from "./orderStatus"

export interface ITransaction {
    transactionDate: string;
    type: string;
    ticker: string;
    shares: number;
    cost?: number;
    grossAmount?: number;
    netAmount: number;
    targetEarnings?: number;
    targetTotalAmount?: number;
    isTargetMet: boolean;
}

export function OrderTransaction(props: { transaction: ITransaction } ) {
    const { transaction } = props;
    return (
        // <dl>
        //     <dt>Date</dt>
        //     <dd>{transaction.date}</dd>
        //     <dt>Type</dt>
        //     <dd>{transaction.type}</dd>
        //     <dt>Ticker</dt>
        //     <dd>{transaction.ticker}</dd>
        //     <dt>Shares</dt>
        //     <dd>{transaction.shares}</dd>
        //     <dt>Cost/Price</dt>
        //     <dd>{transaction.cost}</dd>
        //     <dt>Gross Amount</dt>
        //     <dd>{transaction.grossAmount}</dd>
        //     <dt>Net Amount</dt>
        //     <dd>{transaction.netAmount}</dd>
        //     <dt>Target Earnings</dt>
        //     <dd>{transaction.targetEarnings}</dd>
        //     <dt>Total Target Amount</dt>
        //     <dd>{transaction.targetTotalAmount}</dd>
        //     <dt>Target Met?</dt>
        //     <dd className={`orderstatus_${transaction.isTargetMet}`}><OrderStatus isTargetMet={transaction.isTargetMet} /></dd>
        // </dl>
        <tr className="ordertxndata">
             <td>{transaction.transactionDate}</td>
             <td className={`ordertype_${transaction.type}`}>{transaction.type}</td>
             <td>{transaction.ticker}</td>
             <td className="ordertxnnum">{transaction.shares}</td>
             <td className="ordertxnnum">{transaction.cost}</td>
             <td className="ordertxnnum">{transaction.grossAmount}</td>
             <td className="ordertxnnum">{transaction.netAmount}</td>
             <td className="ordertxnnum">{transaction.targetEarnings}</td>
             <td className="ordertxnnum">{transaction.targetTotalAmount}</td>
             <td className={`orderstatus_${transaction.isTargetMet}`}><OrderStatus isTargetMet={transaction.isTargetMet} /></td>
        </tr>
    )
}