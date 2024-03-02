import React, { useEffect, useState } from "react";
import { OrderTransaction } from "../../components/OrderTransaction/index";
import "./ledger.css";
import { NewOrderTransaction } from "../../components/OrderTransaction/newOrderTransaction";
import { INewOrderTransaction, IOrderTransaction } from "../../interfaces/orders";
import axios from "axios";
import { getWithExpiry } from "../../util/localstorage";

export function Ledger() {
    const defaultNewOrder = {
        transactionDate: '',
        type: 'BUY',
        ticker: '',
        shares: 0,
        cost: 0,
    };
    const accessToken = getWithExpiry('accesstoken');

    const [orders, setOrders] = useState<IOrderTransaction[]>([]);
    const [newOrder, setNewOrder] = useState<INewOrderTransaction>(defaultNewOrder);
    const [message, setMessage] = useState<string[]>([]);
    const [addedNewOrder, setAddedNewOrder] = useState<boolean>(false);

    const fetchOrders = async () => {
        const apiUrl = `${process.env.LOCAL_STOCK_KING_API}/orders`;
        
        try {
            const response = await axios.get(apiUrl, {
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
                }
            });
            const { data } = response;
            setOrders(data.orders)
            message.push("Successfully retrieved orders!");
            setMessage(message);
            console.log("response", response);
        } catch(error) {
            const errorDetails = error as Error;
            message.push(`Failed to get all orders... [${errorDetails.message}]`);
            setMessage(message);
        }

    }

    // Watches any changes of the newOrder
    // if there are changes it will invoke any code in the function
    // useEffect(() => {
    //     fetchOrders();
    // }, [newOrder]);

    // const updateMessageStack = () => {
    //     console.log(message);
    //     if (message && message.length > 0) {
    //         setMessage(message.slice())
    //     }
    // }

    // useEffect(() => {
    //     setInterval(updateMessageStack, 6000);
    // });

    useEffect(() => {
        fetchOrders();
    }, []);

    const postNewOrder = async () => {
        const apiUrl = `${process.env.LOCAL_STOCK_KING_API}/orders`;
        console.log("newOrder", newOrder);
        try {
            await axios.post(apiUrl, newOrder, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`
                }
            })
            message.push("Successfully created a new order!")
            setMessage(message);
            setAddedNewOrder(!addedNewOrder);
        } catch (error) {
            const errorDetails = error as Error;
            message.push(`Create order failed... [${errorDetails.message}]`)
            setMessage(message);
        } finally {
            setNewOrder(defaultNewOrder);
        }

    }

    const handleAddNewEntry = async (event: any) => {
        event.preventDefault();
        await postNewOrder();
        // await fetchOrders();
    }

    return (
        <section id="ledger">
            <header>
                <h1>Ledger</h1>
                { 
                    (message) 
                    ? 
                        message && message.map((msg, index) => <p key={index}>{msg}</p>)
                    : 
                    <></> 
                }
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
                            <tr><td colSpan={10}><em>Empty</em></td></tr>
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