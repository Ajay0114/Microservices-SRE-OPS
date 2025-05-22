import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function App() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('/orders')  // This should proxy to your backend
            .then(response => setOrders(response.data))
            .catch(err => console.error(err));
    }, []);

    // Transform data for chart
    const chartData = orders.map(order => ({
        orderId: order.orderId,
        amount: order.amount,
        status: order.status
    }));

    return (
        <div style={{ padding: 30 }}>
            <h1>Order Analytics Dashboard</h1>
            <LineChart
                width={800}
                height={400}
                data={chartData}
                margin={{ top: 20, right: 50, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="orderId" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
}

export default App;
