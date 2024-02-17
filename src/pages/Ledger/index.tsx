import React, { useEffect, useState } from "react";
import { OrderTransaction } from "../../components/OrderTransaction/index";
import "./ledger.css";

export function Ledger() {
    const [data, setData] = useState([]);

    const fetchOrders = () => {
        const apiUrl = `${process.env.LOCAL_STOCK_KING_API}/orders`;
        
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('API Response:', data);
                setData(data.orders)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <section id="ledger">
            <header>
                <h1>Ledger</h1>
            </header>

            <table className="ordertxn">
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
                {
                    data.map((transaction, index) => {
                        return (
                            <OrderTransaction key={index} transaction={ transaction } />
                        )
                    })
                }
            </table>
                
        </section>   
    )
}