import { useState } from "react";
import { useNavigate } from "react-router-dom";

function register(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () =>{      
        
        try {
            const response = await fetch("http://localhost:8000/v1/register",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                credentials:"include",
                body:JSON.stringify({
                    username:username,
                    email:email,
                    password:password
                })
            })
            const data = await response.json();

            if(response.status == 200){
                const details = `username: ${username}, email: ${email}, password: ${password},  data: ${data}`;
                console.log("registered successfully", details);
                navigate("/home");
            }else{
                alert("you enetered wrong credentials")
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-amber-500 via-amber-300-500 to-yellow-500">
                <div className="bg-black p-8 rounded-2xl shadow-2xl w-105">
                    <h2 className="text-3xl font-bold text-center mb-6 text-white">
                    Create Account
                    </h2>

                    <div className="flex flex-col gap-2">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e)=>setName(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                    />

                    <p className="mt-2 bg-green-300 w-20 flex justify-center text-black font-bold p-2 rounded-md  hover:bg-amber-50 cursor-pointer" onClick={handleSubmit}>Register</p>
                    </div>
                    
                </div>
                </div>
        </>
    )
}

export default register;