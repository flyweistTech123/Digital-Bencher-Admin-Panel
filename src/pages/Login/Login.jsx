import React, { useState } from "react";
import "../../CSS/Login.css";
import logoImg from "../../assest/imglogo.png";
import rightImg from "../../assest/img.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="login-container">
            {/* Left Section */}
            <div className="login-left">
                <div className="login-logo">
                    <img src={logoImg} alt="Digital Benchers Logo" className="logo-img" />
                    <h6 className="logo-title">Digital Benchers</h6>
                </div>
                <div className="login-content">
                    <h5>Welcome Back 👋</h5>
                    <p>We are happy to have you back</p>

                    <form className="login-form">
                        <div className="input-group">
                            <label htmlFor="email">Email address*</label>
                            <input type="email" id="email" placeholder="Enter your email" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password*</label>
                            <div className="password-container">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    placeholder="Enter your password"
                                    required
                                />
                                <span
                                    className="toggle-password"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                                </span>
                            </div>
                        </div>
                        <span className="forgot-password">Forgot Password?</span>
                        <button type="submit" className="login-btn">Login</button>
                    </form>
                </div>
            </div>

            {/* Right Section */}
            <div className="login-right">
                <img src={rightImg} alt="Welcome Illustration" className="right-img" />
            </div>
        </div>
    );
};

export default Login;
