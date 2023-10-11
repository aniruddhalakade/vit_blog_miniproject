import { useState } from "react";

function RegisterPage() {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
async function register(ev){
  ev.preventDefault();
  await fetch('http://localhost:4000/register', {
    method: 'POST',
    body: JSON.stringify({username,password}),
    headers: {'Content-Type':'application/json'},  
  })
}

  return (
    <form className="register" onSubmit={register}>
      <input type="text"  
             placeholder="Username" 
             value={username}
             onChange={ev => setUsername(ev.target.value)}  
      />

      <input type="password" 
             placeholder="Password"
             value={password}
             onChange={ev => setPassword(ev.target.value)} />
      
      <input type="password" 
             placeholder="Confirm Password" />
      

      <button   type="submit">Register</button>
    </form>
  );
}

export default RegisterPage;
