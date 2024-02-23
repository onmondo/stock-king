import React from "react";
import "./rowtransaction.css";
import { OrderStatus } from "./orderStatus"
import { IOrderTransaction } from "../../interfaces/orders";

export function OrderTransaction(props: { order: IOrderTransaction } ) {
    const { order } = props;
    return (
        // <dl>
        //     <dt>Date</dt>
        //     <dd>{order.date}</dd>
        //     <dt>Type</dt>
        //     <dd>{order.type}</dd>
        //     <dt>Ticker</dt>
        //     <dd>{order.ticker}</dd>
        //     <dt>Shares</dt>
        //     <dd>{order.shares}</dd>
        //     <dt>Cost/Price</dt>
        //     <dd>{order.cost}</dd>
        //     <dt>Gross Amount</dt>
        //     <dd>{order.grossAmount}</dd>
        //     <dt>Net Amount</dt>
        //     <dd>{order.netAmount}</dd>
        //     <dt>Target Earnings</dt>
        //     <dd>{order.targetEarnings}</dd>
        //     <dt>Total Target Amount</dt>
        //     <dd>{order.targetTotalAmount}</dd>
        //     <dt>Target Met?</dt>
        //     <dd className={`orderstatus_${order.isTargetMet}`}><OrderStatus isTargetMet={order.isTargetMet} /></dd>
        // </dl>
        <tr className="ordertxndata">
             <td>{order.transactionDate}</td>
             <td className={`ordertype_${order.type}`}>{order.type}</td>
             <td>{order.ticker}</td>
             <td className="ordertxnnum">{order.shares}</td>
             <td className="ordertxnnum">{order.cost}</td>
             <td className="ordertxnnum">{order.grossAmount}</td>
             <td className="ordertxnnum">{order.netAmount}</td>
             <td className="ordertxnnum">{order.gainsOrLoss}</td>
             <td className="ordertxnnum">{order.targetEarnings}</td>
             <td className="ordertxnnum">{order.targetTotalAmount}</td>
             <td className={`orderstatus_${order.isTargetMet}`}><OrderStatus isTargetMet={order.isTargetMet} /></td>
        </tr>
    )
}