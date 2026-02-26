import { useState } from "react";
import { useNavigate } from "react-router-dom";

function home(){
    const navigate = useNavigate();
    const show = document.getElementById("show");
    const [file, setFile] = useState("");
    const [response, setResponse] = useState();

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleUpload = async () => {
        if(!file){
            alert("please select a file");
            return;
        }

        const formData = new FormData();
        formData.append("file",file);

        try {
            const response = await fetch("http://localhost:8000/v1/upload",{
                method: "POST",
                credentials:"include",
                body:formData
            });

            const data = await response.json();
            setResponse(data);
            navigate("/dashboard", {state: {result: data}});
            const skills = data["key_skills"];
            // const skills = data[""];
            console.log("Upload success & skills are: ", skills);
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <>
<div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
    {/* Card Container */}
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md flex flex-col items-center gap-6">
        
        <h1 className="font-bold text-3xl text-gray-800">Home Page</h1>

        {/* Styled File Input */}
        <div className="w-full">
           
            <input 
                type="file" 
                className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2.5 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100
                cursor-pointer border border-gray-300 rounded-lg bg-gray-50 focus:outline-none" 

                onChange={handleFileChange}
            />
        </div>

        {/* Action Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-95" onClick={handleUpload}>
            Upload Resume
        </button>
        {/* <div>
            <h1 className="text-black font-bold text-2xl font-serif">Response</h1>
            <p className="text-black" id>{JSON.stringify(response, null, 2)}</p>
        </div> */}
    </div>
</div>
        </>
    )
}

export default home