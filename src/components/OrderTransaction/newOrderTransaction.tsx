import React from "react";
import CheckBox from "../CheckBox";
// import { INewOrderTransaction } from "../../interfaces/orders";

export function NewOrderTransaction({ 
    // orders, setOrders,
    newOrder, setNewOrder, 
    // defaultNewOrder,
    handleAddNewEntry
}: any) {
    // const [addedOrder, setAddedOrder] = useState<INewOrderTransaction>(defaultNewOrder);

    const handleDateChange = (event: any) =>  {
        event.preventDefault();
        setNewOrder({...newOrder, transactionDate: event.target.value})
    }

    const handleTypeChange = (event: any) => {
        event.preventDefault();
        console.log("Select element", event.target.value)
        setNewOrder({...newOrder, type: event.target.value})
    }

    const handleTickerChange = (event: any) => {
        event.preventDefault();
        setNewOrder({...newOrder, ticker: event.target.value})
    }

    const handleSharesChange = (event: any) => {
        event.preventDefault();
        const shares = Number(event.target.value)
        setNewOrder({...newOrder, shares})
    }

    const handleCostChange = (event: any) => {
        event.preventDefault();
        const cost = Number(event.target.value)
        setNewOrder({...newOrder, cost})
    }

    // const handleNetAmountChange = (event: any) => {
    //     event.preventDefault();
    //     const bNetAmount = Big(event.target.value);
    //     const bRate = Big(0.04);
    //     const bTargetEarnings = bNetAmount.times(bRate)
    //     const netAmount = bNetAmount.toNumber();
    //     const targetEarnings = bTargetEarnings.toNumber();
    //     console.log("targetEarnings", targetEarnings);
    //     setNewOrder({...newOrder, netAmount, targetEarnings})
    // }

    // const handleGainLossChange = (event: any) => {
    //     event.preventDefault();
    //     const gainsOrLoss = Number(event.target.value)
    //     setNewOrder({...newOrder, gainsOrLoss})
    // }

    const handleTargetMetChange = (event: any) => {
        const isTargetMet = event.target.checked;
        console.log("isTargetMet", isTargetMet);
        setNewOrder({...newOrder, isTargetMet});
    }

    return (
        <tr id="newentry">
        <td colSpan={11}>
            <form action="">
                <p>
                    <label htmlFor="txndate">Transaction Date</label>
                    <input id="txndate" type="date" onChange={handleDateChange} value={newOrder.dateTransaction}>
                    </input>
                </p>
                <p>
                    <label htmlFor="txntype">Type</label>
                    <select id="txntype" onChange={handleTypeChange}>
                        <option value="BUY">BUY</option>
                        <option value="SELL">SELL</option>
                        <option value="SELL">DIV</option>
                    </select>
                </p>
                <p>
                    <label htmlFor="ticker">Ticker</label>
                    <input type="text" id="ticker" placeholder="GSMI" onChange={handleTickerChange}></input>
                </p>
                <p>
                    <label htmlFor="shares">Number of Shares</label>
                    <input 
                        id="shares" 
                        type="number" 
                        className="amount" 
                        placeholder="0.00" 
                        alt="Number of Shares" 
                        onChange={handleSharesChange}
                        value={newOrder.shares}
                    >
                    </input>
                </p>
                <p>
                    <label htmlFor="cost">Cost / Price per Share</label>
                    <input 
                        id="cost" 
                        type="number" 
                        className="amount" 
                        placeholder="0.00" 
                        alt="Cost / Price per Share" 
                        onChange={handleCostChange}
                        value={newOrder.cost}
                    >
                    </input>
                </p>
                {/* <p>
                    <label htmlFor="netamount">Net amount</label>
                    <input 
                        id="netamount" 
                        type="number" 
                        className="amount" 
                        placeholder="0.00" 
                        alt="Net amount" 
                        onChange={handleNetAmountChange}
                        value={newOrder.netAmount}
                    >
                    </input>
                </p>
                <p>
                    <label htmlFor="gainloss">Gains / Loss</label>
                    <input 
                        id="gainloss" 
                        type="number" 
                        className="amount" 
                        placeholder="0.00" 
                        alt="Gains / Loss" 
                        onChange={handleGainLossChange} 
                        value={newOrder.gainsOrLoss}
                    >
                    </input>
                </p> */}
                <CheckBox labelText="Target Met?" checkBoxHandler={handleTargetMetChange} value={newOrder.isTargetMet}/>
                <p><button onClick={handleAddNewEntry}>Save</button></p>
            </form>
        </td>
    </tr>        
    )
}