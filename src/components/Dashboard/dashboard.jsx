import { data, useLocation } from "react-router-dom"

export default function dashboard(){
    const location = useLocation();

    const data = location.state?.result;

    const ats_score = data["ats_score"];
    const key_skills = data["key_skills"];
    const recommendations = data["recommendations"]
    return (
        <>
<div className="min-h-screen bg-gray-100 p-6">

    {/* Page Title */}
    <div className="text-3xl font-bold mb-6 text-gray-800">
        Dashboard Page
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* ATS Score */}
        <div className="bg-white rounded-2xl shadow-md p-6">
            <h1 className="text-xl font-semibold mb-4 text-blue-600">
                Ats Score
            </h1>
            <p className="text-4xl font-bold text-gray-800">
                {ats_score}
            </p>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-2xl shadow-md p-6">
            <h1 className="text-xl font-semibold mb-4 text-green-600">
                Skills
            </h1>

            <div className="flex flex-wrap gap-2">
                {key_skills?.map((skill, index) => (
                    <span
                        key={index}
                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200 transition"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-2xl shadow-md p-6">
            <h1 className="text-xl font-semibold mb-4 text-purple-600">
                Recommendations
            </h1>

            <ul className="space-y-3">
                {recommendations?.map((rec, index) => (
                    <li
                        key={index}
                        className="bg-purple-50 border-l-4 border-purple-400 p-3 rounded-md text-gray-700"
                    >
                        {rec}
                    </li>
                ))}
            </ul>
        </div>

    </div>
</div>
        </>
    )
}