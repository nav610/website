import React from 'react'; 
import avatar from '../Images/me.jpeg';
import twitter_icon from '../Images/twitter.png';

interface TwitterCardProps {
    body: string;
    date:string; 
};
export default function TwitterCard({body, date}: TwitterCardProps){ 
    return(
        <div className="w-full rounded-lg bg-grey-500 shadow-lg p-5 text-gray-800 mb-5">
            <div className="w-full flex mb-4">
                <div className="overflow-hidden rounded-full w-12 h-12">
                    <img src={avatar} alt="description" ></img>
                </div>
                <div className="flex-grow pl-3">
                    <h6 className="font-bold text-md">Naveen Mohideen</h6>
                    <p className="text-xs text-gray-600">@chumpofthedump</p>
                </div>
                <div className="w-12 text-right">
                    <img src={twitter_icon} alt="description" ></img>
                </div>
            </div>
            <div className="w-full mb-4">
                <p className="text-sm"> {body}</p>
            </div>
            <div className="w-full">
                <p className="text-xs text-gray-500 text-right">{date}</p>
            </div>
        </div>
    );
}