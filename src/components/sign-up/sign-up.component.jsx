import { useState } from "react";
import FormInput from "../form-input/form-input";

    const defaultFormFields = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",

}

    const SignUpForm = () => {

    const [formField , setFormField] = useState(defaultFormFields);

    const {displayName , email ,password, confirmPassword} = formField;
    

    const handleSubmit = async(event)=>{
        event.preventDefault ();
    }

    const handleChange = (event) => {
        const {name , value} = event.target;
        setFormField({...formField, [name]: value})
        }


    return (
        <div>
    <h1>SignUp with Your Email and Password</h1>
            <form onSubmit={handleSubmit} >
                <FormInput label="Display Name" type="text" onChange={handleChange} name="displayName" value={displayName} required/>
                <FormInput label="Email" type="email" onChange={handleChange} name="email" value={email} required/>
                <FormInput label="Password" type="password" onChange={handleChange} name="password" value={password} required />
                <FormInput label="Confirm password" type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword}required/>
                <button type="submit" >Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;