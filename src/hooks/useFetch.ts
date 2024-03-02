import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch<T>(apiUrl: string, accessToken: string) {
    const [data, setData] = useState<T[]>([]);
    const [message, setMessage] = useState("");

    const fetchOrders = async () => {
        try {
            const response = await axios.get(apiUrl, {
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
                }
            });
            const { data } = response;
            setData(data.orders)
            setMessage("Successfully retrieved orders!");
            console.log("response", response);
        } catch(error) {
            const errorDetails = error as Error;
            setMessage(`Failed to get all orders... [${errorDetails.message}]`)
        }

    }

    useEffect(() => {
        fetchOrders();
    }, []);

    return { data, message }
}