import React from "react";

export const Cart = () => {

    return (
        <div className="cart-container">

            <div className="promo-code-container">
                <label form="promo-code">Promotion Code: </label>
                <input id="promo-code" name="promo-code" type="text" />
                <button>Apply</button>
            </div>
            <br></br>

            {/* First Item */}
            <div className="basket-product">
                <div className="item">Item</div>
                <div className="product-image">
                    <img className="album-cover-checkout" src="https://static.qobuz.com/images/covers/ka/93/zzn6saqkx93ka_600.jpg" />
                </div>
            </div>

            <div className="product-details">
                <h1><strong>333</strong></h1>
                <p><strong>Bladee</strong></p>
                <p>Cassette #0153147389</p>

                <div className="price">$9.99</div>
                <div className="quantity">
                    <input type="number" value="1" className="quantity-field" />
                </div>
                <div className="remove">
                    <button>Remove</button>
                </div>
            </div>
            <br></br>

            {/* Second Item */}
            <div className="basket-product">
                <div className="item">Item</div>
                <div className="product-image">
                    <img className="album-cover-checkout" src="https://static.qobuz.com/images/covers/ha/im/b1xaal6aeimha_600.jpg" />
                </div>
            </div>

            <div className="product-details">
                <h1><strong>Starz</strong></h1>
                <p><strong>Yung Lean</strong></p>
                <p>Cassette #1376284668</p>
            </div>
            <div>
                <div className="price">$9.99</div>
                <div className="quantity">
                    <input type="number" value="1" />
                    <div className="remove">
                        <button>Remove</button>
                    </div>
                </div>
            </div>
            <br></br>

            <div className="summary">
                <div className="summary-total-items"><span className="total-items"></span>2 Items in your Bag</div>
                <div className="subtotal-title">Subtotal</div>
                <div className="subtotal-value final-value" id="basket-subtotal">$19.98</div>
            </div>

            <div className="summary-delivery">
                <select name="delivery-collection" className="summary-delivery-selection">
                    <option selected="selected">First-Class Mail</option>
                    <option>Priority Mail</option>
                    <option>Priority Mail Express</option>
                </select>
            </div>
                
            <div className="summary-total">
                <div className="total-title">Total</div>
                <div className="total-value final-value" id="basket-total">$19.98</div>
            </div>

            <div className="summary-checkout">
                <button className="checkout-cta">Checkout</button>
            </div>

        </div>
    );
};