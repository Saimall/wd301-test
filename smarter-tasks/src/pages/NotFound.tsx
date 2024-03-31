import React from "react";

const NotFound: React.FC = () => {

    return (
        <div className="flex flex-col justify-center items-center h-screen bordered border-purple-500 border-2 w-64">
            <p className="justify-center w-fit"> <b>404</b> The requested route was not found</p>
            <button className="bg-green-300 m-2 p-2 rounded-md text-white font-bold" id="backToHomeButton">
                <a href="/home">Go to home</a>
            </button>
        </div>
    );
};

export default NotFound;