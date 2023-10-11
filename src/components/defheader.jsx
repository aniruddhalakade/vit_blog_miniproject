import {Link} from "react-router-dom";


export default function Defheader(){
    return (
     <header>    
    
    <Link to="/" className="logo">VIT BLOGS</Link> 
    
    <nav><Link  to="/login" >Login  </Link>
    <Link  to="/register" > Register</Link>
    <Link to="/create">CreatePost</Link></nav>
      
    </header>
    
    )
};

