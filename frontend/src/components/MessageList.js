import React, {useEffect, useState} from "react";

function MessageList(){
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/messages`)
            .then(response => response.json())
            .then(data => setMessages(data));
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/messages/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    setMessages(messages.filter(message => message.id !== id));
                } else {
                    alert('Failed to delete message.');
                }
            })
            .catch(error => {
                console.error('There was an error deleting the message!', error);
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
                                <th>Name</th>
                                <th>Email</th>
                                <th>Subject</th>
                                <th>Message</th>
                                <th>&nbsp;</th>
                            </tr>
                            {messages.map((message, index) => (
                                <tr>
                                    <td>{message.name}</td>
                                    <td>{message.email}</td>
                                    <td>{message.subject}</td>
                                    <td>{message.message}</td>
                                    <td>
                                        <button onClick={() => handleDelete(message.id)}>Delete</button>
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

export default MessageList;