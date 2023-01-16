import { useState } from "react";
import {createUserDocmentFromAuth , signInWithGooglePopup } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input";

const defaultFormFields = {
    email: "",
    password: "",
}



const SignIn =()=>{

    const [formField , setFormField] = useState(defaultFormFields);

    const {email ,password} = formField;

    const logGoogleUser = async()=>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocmentFromAuth(user);
    }

    const handleChange = (event) => {
        const {name , value} = event.target;
        setFormField({...formField, [name]: value})
        }


    return (
        <div>
            <h1>SignIn page</h1>

            <FormInput label="Email" type="email" onChange={handleChange} name="email" value={email} required/>
            <FormInput label="Password" type="password" onChange={handleChange} name="password" value={password} required/>
            <FormInput />

            <button onClick={logGoogleUser} >Sign in with Google Popup</button>
        </div>

    )


}

export default SignIn