function navbar(){
    return `
    <div id="footer">
            <div>
                <a href="#">
                    <h3 id="sub">SUBSCRIBE NOW</h3>
                </a>
            </div>
            <div>
                <a href="./index.html"><img id="logo"
                        src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO_96ac9306-4c81-4ab8-8d2b-4e818eed7f76_2048x.png?v=1606482289" /></a>
            </div>
            <ul id="right">
                <li>
                    <a href="#"><span class="material-icons-outlined icon"> search </span></a>
                </li>
                <li>
                    <a href="#"><span class="material-icons-outlined icon">favorite_border</span></a>
                </li>
                <li>
                    <a href="#" id="menu"><span class="material-icons-outlined icon account">account_circle</span>
                        <ul id="dropdown">
                            <li id="lang">
                                <p>Languages:</p>
                                <p>En</p>
                                <p>Fr</p>
                            </li>
                            <hr />
                            <li>
                                <a href="#">
                                    <p class="acc">Checkout</p>
                                </a>
                            </li>
                            <hr />
                            <li>
                                <a href="./signup.html">
                                    <p class="acc">Sign Up</p>
                                </a>
                            </li>
                            <hr />
                            <li>
                                <a href="#">
                                    <p class="acc">Create An Account</p>
                                </a>
                            </li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a href="#"><span class="material-icons-outlined icon cart">
                            shopping_cart
                        </span>
                        <div id="cartnum">
                            <p>0</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="content"></div>
    `;
}

export {navbar}