import {createUserDocmentFromAuth , signInWithGooglePopup } from "../../utils/firebase/firebase.utils"



const SignIn =()=>{

    const logGoogleUser = async()=>{
        const response = await signInWithGooglePopup();
        createUserDocmentFromAuth(response.user);
    }

    return (
        <div>
            <h1>SignIn page</h1>
            <button onClick={logGoogleUser} >Sign in with Google Popup</button>
        </div>

    )


}

export default SignIn