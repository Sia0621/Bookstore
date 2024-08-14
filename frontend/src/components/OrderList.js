import React, {useEffect, useState} from "react";

function OrderList(){
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/orders/search`)
            .then(response => response.json())
            .then(data => setOrders(data));
    }, []);

    console.log(orders);

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/orders/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    setOrders(orders.filter(order => order.id !== id));
                } else {
                    alert('Failed to delete order.');
                }
            })
            .catch(error => {
                console.error('There was an error deleting the order!', error);
            });
    }

    return(
        <div>
            <h1 className="cms-header">All Orders</h1>
            <section>
                <div className="cms-main">
                    <div className="cms-table">
                        <table>
                            <tr>
                                <th>Customer ID</th>
                                <th>Customer Name</th>
                                <th>Book ID</th>
                                <th>Book Name</th>
                                <th>Quantity</th>
                                <th>&nbsp;</th>
                            </tr>
                            {orders.map((order, index) => (
                                <tr>
                                    <td>{order.userId}</td>
                                    <td>{order.username}</td>
                                    <td>{order.bookId}</td>
                                    <td>{order.title}</td>
                                    <td>{order.quantity}</td>
                                    <td>
                                        <button onClick={() => handleDelete(order.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OrderList;