import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation.component";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import AuthPage from "./routes/auth-page/auth-page";




const App = ()=>{
  return (
    <Routes>
      <Route path="/" element={<Navigation/>} > 
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/auth" element={<AuthPage/>} />
      </Route>
    </Routes>

  );
}

export default App;
