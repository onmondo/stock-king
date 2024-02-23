import React, { useEffect, useState } from "react";
import { OrderTransaction } from "../../components/OrderTransaction/index";
import "./ledger.css";
import { NewOrderTransaction } from "../../components/OrderTransaction/newOrderTransaction";
import { INewOrderTransaction, IOrderTransaction } from "../../interfaces/orders";
import axios from "axios";

export function Ledger() {
    const defaultNewOrder = {
        userUuid: 'cb968471-6c42-4e4f-aab6-2108488d55ae',
        dateTransaction: '',
        type: 'BUY',
        ticker: '',
        shares: 0,
        cost: 0,
        grossAmount: 0,
        netAmount: 0,
        gainsOrLoss: 0,
        targetEarnings: 0,
        // targetTotalAmount: 0,
        isTargetMet: false,
    };

    const [orders, setOrders] = useState<IOrderTransaction[]>([]);
    const [newOrder, setNewOrder] = useState<INewOrderTransaction>(defaultNewOrder);

    const fetchOrders = async () => {
        const apiUrl = `${process.env.LOCAL_STOCK_KING_API}/orders`;
        
        const response = await axios.get(apiUrl);
        const { data } = response;
        setOrders(data.orders)
        console.log("response", response);
    }

    // Watches any changes of the newOrder
    // if there are changes it will invoke any code in the function
    // useEffect(() => {
    //     fetchOrders();
    // }, [newOrder]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const postNewOrder = async () => {
        const apiUrl = `${process.env.LOCAL_STOCK_KING_API}/orders`;
        console.log("newOrder", newOrder);
        await axios.post(apiUrl, newOrder, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
    }

    const handleAddNewEntry = async (event: any) => {
        event.preventDefault();
        await postNewOrder();
        await fetchOrders();
        setNewOrder(defaultNewOrder);
    }

    return (
        <section id="ledger">
            <header>
                <h1>Ledger</h1>
            </header>

            <table className="ordertxn">
                <thead>
                    <tr className="ordertxntitle">
                        <th>Date</th>
                        <th>Type</th>
                        <th>Ticker</th>
                        <th>Shares</th>
                        <th>Cost/Price</th>
                        <th>Gross Amount</th>
                        <th>Net Amount</th>
                        <th>Gains/Loss</th>
                        <th>Target Earnings</th>
                        <th>Total Target Amount</th>
                        <th>Target Met?</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (orders && orders.length > 0)
                        ?
                            orders.map((order) => {
                                return (
                                    <OrderTransaction key={order.id} order={order} />
                                )
                            })
                        :
                            <tr><td colSpan={11}><em>Empty</em></td></tr>
                    }
                    <NewOrderTransaction 
                        newOrder={newOrder} 
                        setNewOrder={setNewOrder} 
                        handleAddNewEntry={handleAddNewEntry}
                    />
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
            
        </section>   
    )
}