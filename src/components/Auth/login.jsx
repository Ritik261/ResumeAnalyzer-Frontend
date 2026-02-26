import { useState } from "react";
import { useNavigate } from "react-router-dom";

function login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginHandler = async () =>{
        
        try {
            console.log(email);
            console.log(password);
            const response = await fetch("http://localhost:8000/v1/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                credentials:"include",
                body:JSON.stringify(
                    {
                        email: email,
                        password: password
                    }
                ),

            })

            const data = await response.json();
           

            if(response.status == 200){
                console.log("Login success",data);
                navigate("/home");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <div className="h-screen  flex flex-col justify-center items-center ">
            <div className="bg-black p-12 rounded-2xl">
                <div className="">
                <h1 className="font-bold text-2xl">Login Page</h1>
            </div>

            <div className="flex flex-col mt-2">
                <label htmlFor="email">Enter Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} className="min-w-56 outline-1 outline-green-200 p-2" type="text" placeholder="enter email here" />
            </div>
            <div className="flex flex-col mt-2">
                <label htmlFor="email">Enter Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)}  className="min-w-56 outline-1 outline-green-200 p-2" type="text" placeholder="enter password here" />
            </div>
            
            <div className="flex flex-col items-center">
                <p className=" mt-4 transform transition duration-300 ease-in-out font-bold bg-green-300 text-black p-2 w-30 items-center justify-center flex cursor-pointer hover:scale-105 hover:shadow-lg active:scale-95 " onClick={loginHandler}>Login</p>
            </div>
            <div className="mt-4">
                <p> Don't have account? <span className=" font-bold text-black bg-amber-100 p-1 rounded-sm cursor-pointer hover:text-black hover:bg-blue-300" onClick={()=>navigate("/register")}> Register </span></p>
            </div>
            </div>
        </div>


        </>
    )
}

export default login;