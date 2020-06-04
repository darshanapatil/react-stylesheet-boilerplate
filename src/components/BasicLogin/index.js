import React from "react";
import ReactDOM from "react-dom";
import "../BasicLogin/main.css";
import logo from "../../assets/images/img_avatar2.png"; // Path 1
//import logo from "images/img_avatar2.png"; // Path 2

const BasicLogin = () => {
    return <React.Fragment>
        <form>
            <div className="imgcontainer" style={{ "textAlign": "center", "margin": "24px 0 12px 0" }}>
                <img src={logo} height={"20%"} width={"20%"} alt="Avatar" className="avatar" />
            </div>

            <div className="container">
                <label><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" />

                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" />

                <button type="submit">Login</button>
                <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </label>
            </div>

            <div className="container" style={{ "backgroundColor": "#f1f1f1" }}>
                <button type="button" className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <a href="#">password?</a></span>
            </div>

        </form>
    </React.Fragment>

};


export default BasicLogin;

// ReactDOM.render(<BasicLogin />, document.getElementById("index"))