import {LOGO_URL} from "../utils/constants"
import {useState} from "react";

const Header = () => {
    // let btnName = "Login"

    const [btnName, setbtnName] = useState("Login");
    let count=0;
    return (
        <div className="header">
            <div className="logo-container">
                <img className='logo' src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        setbtnName("Logout"); 
                        count=1;
                    }}> {btnName} {count}</button>
                </ul>
            </div>
        </div>
    );
};

<img className='logo' src={LOGO_URL} ></img>

export default Header;