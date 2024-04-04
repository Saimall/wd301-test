import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {

    //Fetch user data
    const data = localStorage.getItem('userData');
    const navigate = useNavigate();

    if (data === 'undefined' || data === null) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
                <br />
                <div className='w-auto flex items-center justify-center bg-purple-500'>
                    <h2>User Not Found</h2>
                </div>
            </div>
        )
    }

    const userData = JSON.parse(data);
    //Handle logout
    const handleLogout = () => {
        try {
            localStorage.removeItem('userData');
            localStorage.removeItem("authToken");
            navigate("./signin");
        }
        catch (err) {
            alert("Trouble logging out user !");
        }
        // if(!!localStorage.getItem(userData.id.toString())){
        //     return true;
        // }
        // return false;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
            
            <div className="text-4xl font-bold text-center text-cyan-800 mb-9">
                <h2 className="mb-2">Name: {userData?.name || 'Unavailable'}</h2>
                <h2>Email: {userData?.email || 'Unavailable'}</h2>
            </div>

            <button className="text-white bg-red-300 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <a href="/signin" onClick={() => handleLogout} id="logout-link">Logout</a>
            </button>

        </div>
    );
}

export default Dashboard;