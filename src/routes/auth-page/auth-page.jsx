import SignIn from "../../components/sign-in/sign-in";
import SignUpForm from "../../components/sign-up/sign-up.component";

import './auth-page.style.scss';

const AuthPage =()=>{
    
    return (<>

        <h1>AuthPage</h1>
        <div className="auth-page-container">

            <div className="sign-in-container">
                <SignIn />
            </div>
            <div className="sign-up-container">
                <SignUpForm />
            </div>



        </div>




        </>)
}

export default AuthPage