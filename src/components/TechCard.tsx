import React from 'react'; 

interface TechChardProps {
    title: string;
    preview: string;
    date:string; 
};
export default function TechCard({title, preview, date}: TechChardProps){ 
    return(
        <div className="flex my-5 px-5 w-1/3 overflow-hidden max-w-sm w-80 bg-white shadow-lg rounded-lg">
            <div className='w-full px-2 py-3'>
                <div className='mx-3 w-full'>
                    <div className="flex flex-row mb-6 mt-2">
                        <div className="mr-1 h-2 w-8 bg-green rounded-full cursor-pointer"></div>
                        <div className="mr-1 h-2 w-8 bg-yellow-orange rounded-full cursor-pointer"></div>
                        <div className="mr-1 h-2 w-8 bg-blue-cornflower rounded-full cursor-pointer"></div>
                    </div>
                    <div className="flex justify-start mb-4">
                        <div className="flex w-full justify-evenly mt-1">
                            {/* <img className="rounded-lg" src="https://eclecticlightdotcom.files.wordpress.com/2019/03/velazquezlasmeninasd2.jpg">
                            </img> */}
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col mb-4 ml-4 mt-1">
                            <div className='text-green font-semibold text-lg mb-1 font-serif'>{title}</div>
                            <div className='text-gray-600 text-sm font-serif'>{preview}</div>
                            <div className='text-gray-600 font-base text-sm mt-3 font-serif '>{date}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}