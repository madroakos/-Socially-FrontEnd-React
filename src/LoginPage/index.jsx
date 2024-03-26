import React, {useState} from "react";
import {LOGIN_URL, REGISTER_URL} from "../auth/backendConfig";
import {useNavigate} from "react-router-dom";
import "./index.css";

const MIN_PASSWORD_LENGTH = 2;

const Index = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isLogin) {
            login();
        } else {
            register();
        }
    };

    const login = async () => {
        if (username !== "" && password !== "") {
            const headers = {'Content-Type': 'application/json'};
            const body = JSON.stringify({
                username: username,
                password: password
            });
            try {
                const response = await fetch(LOGIN_URL, {method: 'POST', headers, body})
                    if (response.ok) {
                        const data = await response.json();
                        if (data && data.token) {
                            localStorage.setItem("token", data.token);
                            navigate('/home');
                        }
                    } else {
                        console.log("No user found");
                    }
            } catch (e) {
                console.error("Error:", e);
            }

        }
    };

    const register = async () => {
        if (username !== "" && password !== "" && email !== "" && password === passwordAgain && password.length >= MIN_PASSWORD_LENGTH) {
            const headers = {'Content-Type': 'application/json'};
            const body = JSON.stringify({
                username: username,
                password: password,
                email: email,
            });
            try {
                const response = await fetch(REGISTER_URL, {method: 'POST', headers, body})
                if (response.ok) {
                    const data = await response.json();
                    if (data && data.token) {
                        console.log("User created");
                        console.log(data);
                        localStorage.setItem("token", data.token);
                    }
                } else {
                    console.log("No user found");
                }
            } catch (e) {
                console.error("Error:", e);
            }
        }
    };

    return (
        <div>
            <div className="wholePageDiv">
                <div className="infoDiv">
                    <img src="/logo.png" alt="Logo" id="loginLogo"/>
                </div>
                <div className="loginDiv">
                    <form method="post" id="loginForm">
                        <p>Sign in to Socially</p>
                        <div className="inputFields">
                            <label htmlFor="username">Username</label>
                            <input id="username" type="text" name="username" required value={username} onChange={(e) => setUsername(e.target.value)}/>
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                            {!isLogin && (
                                <>
                                    <label htmlFor="email">Email</label>
                                    <input id="email" type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    <label htmlFor="passwordAgain">Password Again</label>
                                    <input id="passwordAgain" type="password" name="passwordAgain" required value={passwordAgain} onChange={(e) => setPasswordAgain(e.target.value)}/>
                                </>
                            )}
                        </div>
                        <div className="changeFormButtonDiv">
                            <input id="changeFormButton" type="button" value={isLogin ? "Sign up" : "Login"} onClick={() => setIsLogin(!isLogin)}/>
                        </div>
                        <input id="submitButton" type="button" value={isLogin ? "Login" : "Sign Up"} onClick={handleSubmit}/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Index;