import React from "react";

export const Cart = () => {
    return (
        <div className="cart-container">
            <div className="promo-code-container">
                <label form="promo-code">Promotion Code: </label>
                <input id="promo-code" name="promo-code" type="text" />
                <button>Apply</button>
            </div>

            <div className="basket-labels">
                <ul>
                <li className="item item-heading">Item</li>
                <li className="price">Price</li>
                <li className="quantity">Quantity</li>
                <li className="subtotal">Subtotal</li>
                </ul>
            </div>

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
                    <p>Cassette ID: # 0153147389</p>
            </div>
    
            <div>
                <div className="price">9.99</div>
                    <div className="quantity">
                    <input type="number" value="1" className="quantity-field" />
                    </div>
                <div className="subtotal">9.99</div>

                <div className="remove">
                    <button>Remove</button>
                </div>
            </div>

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
                    <p>Cassette ID: # 1376284668</p>
            </div>

            <div>
                <div className="price">9.99</div>
                    <div className="quantity">
                    <input type="number" value="1" />
                    </div>
                <div className="subtotal">9.99</div>

                <div className="remove">
                    <button>Remove</button>
                </div>
            </div>

        </div>
    )
};