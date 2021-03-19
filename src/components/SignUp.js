import { useForm } from 'react-hook-form'

const SignUp = () => {

    const {register, handleSubmit} = useForm();

    const clickSubmit = (data) => {
        alert(JSON.stringify(data));
        window.location.href = "/#/";
    }

    return (
        <div>
            <h1>Este es el SignUp</h1>
            <div>
                <form onSubmit={handleSubmit(clickSubmit)}>
                    <label>
                        Enter email
                        <input type="email" name="email" ref={register({required: true})} placeholder="example@mail.com" />
                    </label>
                    <label>
                        Enter username
                        <input type= "text"name="username" ref={register({required: true})} />
                    </label>
                    <label>
                        Enter password
                        <input type="password" name="password" ref={register({required: true})} />
                    </label>
                    <button type="submit">SignIn!</button>
                </form> 
            </div>
        </div>
    )
}

export default SignUp;