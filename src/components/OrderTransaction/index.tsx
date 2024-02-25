import React, { useState } from "react";
import "./rowtransaction.css";
import { OrderStatus } from "./orderStatus"
import { IOrderTransaction } from "../../interfaces/orders";
import EditIcon from "../../assets/EditIcon";
import SaveIcon from "../../assets/SaveIcon";

export function OrderTransaction(props: { order: IOrderTransaction } ) {
    const [editType, setEditType] = useState(false);
    const { order } = props;

    const handleEditType = () => {
        setEditType(!editType);
    }
    return (
        <tr className="ordertxndata">
             <td>{order.transactionDate}</td>
             <td className={`ordertype_${order.type}`}>
                {
                    (editType)
                    ?
                    <>
                        <select id="txntype">
                            <option value="BUY">BUY</option>
                            <option value="SELL">SELL</option>
                            <option value="SELL">DIV</option>
                        </select>
                        &nbsp;
                        <a 
                            href="#"
                            onClick={handleEditType}
                        >
                            <SaveIcon />
                        </a> 
                        
                    </>
                    :
                    <>
                        {order.type}
                        &nbsp;
                        <a 
                            className="editicon" 
                            href="#"
                            onClick={handleEditType}
                        >
                            <EditIcon color="#1a8eb0" />
                        </a>                        
                    </>
                }
            </td>
             <td>{order.ticker}</td>
             <td className="ordertxnnum">
                {order.shares}
                &nbsp;
                <a className="editicon" href="#"><EditIcon color="#1a8eb0" /></a>
            </td>
             <td className="ordertxnnum">
                {order.cost}
                &nbsp;
                <a className="editicon" href="#"><EditIcon color="#1a8eb0" /></a>
            </td>
             <td className="ordertxnnum">{order.grossAmount}</td>
             <td className="ordertxnnum">{order.netAmount}</td>
             {/* <td className="ordertxnnum">
                {order.gainsOrLoss}
            </td> */}
             <td className="ordertxnnum">{order.targetGains}</td>
             <td className="ordertxnnum">{order.totalAmount}</td>
             <td className={`orderstatus_${order.isTargetMet}`}>
                <OrderStatus isTargetMet={order.isTargetMet} />
            </td>
        </tr>
    )
}