import React from 'react';
import Board from './Board';

const Dashboard: React.FC = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
            <div className=''>
                <h1 className="py-5 text-3xl text-center font-bold justify-center items-center text-gray-800 mb-8">
                    Dashboard
                </h1>
                <br />
                <Board />
            </div>
        </div>
    );
}

export default Dashboard;