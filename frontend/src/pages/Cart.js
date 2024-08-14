import './Cart.css'
import Header from "../components/Header";
import {useCart} from "../components/CartContext";
import {useUser} from "../components/UserContext";

function Cart(){
    const { cart, setCart } = useCart([]);
    const { user } = useUser();

    const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

    const handleSubmit = async (event) => {
        event.preventDefault();

        for (const item of cart) {
            const data = {
                userId: user.id,
                bookId: item.id,
                quantity: item.quantity,
            };
            console.log(data)

            try {
                const response = await fetch('http://localhost:8080/orders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                } else {
                    alert('Failed to create');
                    break;
                }
            } catch (error) {
                alert('An error occurred: ' + error.message);
                break;
            }
        }

        setCart([]);
        localStorage.clear();
        alert('Orders created successfully!');
    }

    const handleAdd = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const handleSub = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const handleDelete = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    return(
        <div>
            <Header />
            <div class="ctgry-Header">
                <h2 >Shopping Cart</h2>
            </div>
            <form>
                <div className="cart-main">
                    <div className="cart-table">
                        <table>
                            <tr>
                                <th colSpan="2">PRODUCT</th>
                                <th style={{width: '20%'}}>PRICE</th>
                                <th style={{width: '10%'}}>QUANTITY</th>
                                <th style={{width: '10%'}}></th>
                                <th style={{width: '10%'}}>TOTAL</th>
                            </tr>
                            {cart.map((item, index) => (
                                <tr>
                                    <td>
                                        <div className="cart-img">
                                            <img src={require(`../images/${item.imgPath}`)} style={{height: '200px'}}/>
                                        </div>
                                        <div className="clear"></div>
                                    </td>
                                    <td>
                                        <div className="cart-title">
                                            <p>{item.title}</p>
                                        </div>
                                    </td>
                                    <td><p className="cart_price">{item.price.toFixed(2)}</p></td>
                                    <td>
                                        <div style={{float: 'left', marginLeft: '20%', marginTop: '20px'}}>
                                            <a className="cartButton" onClick={() => handleSub(item.id)}>-</a>
                                        </div>
                                        <div style={{float: 'left', paddingLeft: '10%', paddingRight: '10%'}}>
                                            <p className="cart_qty">{item.quantity}</p>
                                        </div>
                                        <div style={{float: 'left', marginTop: '20px'}}>
                                            <a className="cartButton" onClick={() => handleAdd(item.id)}>+</a>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <a className="cartButton" onClick={() => handleDelete(item.id)}>Delete</a>
                                        </div>
                                    </td>
                                    <td>€ {(item.quantity * item.price).toFixed(2)}</td>
                                </tr>
                            ))}

                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>SUBTOTAL</td>
                                <td>€ {totalPrice.toFixed(2)}</td>
                            </tr>

                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><input type="submit" value="CHECK OUT" className="submitbutton" onClick={handleSubmit}/></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Cart

