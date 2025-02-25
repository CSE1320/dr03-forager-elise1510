import React from 'react';
import {warningMessage} from '../data/development';

const Message = () => {
    return (
        <div className="message bg-red-500 rounded-xl bg-[#FF5050] text-sm w-full font-medium text-white px-4 py-4 mx-4">
            <div className="header flex items-center">
                <img width="27px" height="27px" className="" src={warningMessage.icon}></img>
                <h1 className="uppercase">{warningMessage.header}</h1>
            </div>
            <p className="">{warningMessage.message}</p>
        </div>
    );
};
/*const FactMessage = (facts) => {
    return (
        <div className="message bg-[rgba(142, 74, 73, 1)] rounded-xl bg-[#FF5050] text-sm w-full font-medium text-white px-4 py-4 mx-4">
            <div className="header flex items-center">
                <h2 className='font-nunito'>Fast Facts</h1>
            </div>
            <p className="">{warningMessage.message}</p>
        </div>
    );
};*/
export default Message;