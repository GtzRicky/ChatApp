import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const {register, handleSubmit} = useForm();

    const clickSubmit = (data) => {
        alert(JSON.stringify(data));
        window.location.href = "/#/chat";
    };

    return (
        <div>
            <form onSubmit={handleSubmit(clickSubmit)}>
                <label>
                    Enter email
                    <input type="email" name="email" ref={register({required: true})} placeholder="example@mail.com" />
                </label>
                <label>
                    Enter password
                    <input type="password" name="password" ref={register({required: true})} />
                </label>
                <button type="submit">SignIn!</button>
            </form> 
            <button><Link to="/signup">SignUp!</Link></button>  
        </div>
    )
}

export default Login