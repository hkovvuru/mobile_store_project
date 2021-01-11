import React, { useState } from 'react';
import './LoginForm.css';


const LoginForm = ({ userLoginDetails, setLoginUserDetails }) => {
    const [userInfo, setUserInfo] = useState({});

    const loginFormHandler = (event) => {
        event.preventDefault();
        let name = event.target.name;
        setUserInfo ({
            ...userInfo,
            [name] : event.target.value,
            id: parseInt(Math.floor(Math.random() * 100))
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setLoginUserDetails([
            ...userLoginDetails,
            userInfo
        ]);
    }

    return (
        <div className="LoginForm">
            <header></header><br/>
            <form>
                <label for="username">User Name : </label>
                <input type="text" id="username" name="username" placeholder="Enter username here..." onChange={loginFormHandler}/>
                <label for="password">Password : </label>
                <input type="password" id="password" name="password" placeholder="Enter Password here..." onChange={loginFormHandler}/>
                <button type="submit" value="submit" onClick={submitHandler}></button>
            </form>
        </div>
    )
}

export default LoginForm;