import { Outlet, Link } from "react-router-dom"

const Navigation =()=>{
    return(<>
        
        <h1>Navigation</h1>
        
        <Link to='/'>
            Home
        </Link>
        <Link to='/about'>
            About
        </Link>
        <Link to='/auth'>
            Sign In
        </Link>

        <Outlet/>
        
        
        </>) 
        
}

export default Navigation