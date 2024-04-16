import React from "react";

const Notfound: React.FC = () => {

    return (
        <div className="flex flex-col justify-center items-center h-screen bordered border-purple-500 border-2 w-full">
            <p className="justify-center w-fit"> <b>404</b> The requested route was not found</p>
            <button className="text-white bg-green-400 hover:bg-green-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" id="backToHomeButton">
                <a href="/account">Go to home</a>
            </button>
        </div>
    );
};

export default Notfound;