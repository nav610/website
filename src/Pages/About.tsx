import React from 'react'; 
import TwitterCard  from '../components/TwitterCard'

interface AboutMeProps { 
    body: string; 
    date: string; 
}

const AboutMe: AboutMeProps[] = [
    {
        "body":  "Leaving behind academic research, to join @NOCD as a Software Engineer.",
        "date": "Aug 01, 2020"
    },
    {
        "body":  "Bleh covid",
        "date": "May 20, 2020"
    },
    {
        "body":  "Headed to Balitmore to work Johns Hopkins Medical Institute as a computational researcher simulating immune system protein aggregation and function. π₯Όπ€",
        "date": "June 13, 2019"
    },
    {
        "body":  "π Graduated with a B.A. in Physics from Cornell University π",
        "date": "May 27, 2019"
    },
    {
        "body":  "Major officially delcared: physics π΅",
        "date": "March 30, 2017"
    },
    {
        "body":  "Family vacation to London and Paris. Ready for le foie ... π¦’",
        "date": "August 01, 2016"
    },
    {
        "body":  "Arrived in Ithaca NY. Dorms unpacked and ready to start at @cornell",
        "date": "August 20, 2015"
    },
    {
        "body":  "π«  πΊπΈ  β‘οΈ πͺπ¬ π΄  π πΊ ππ» πͺ  π₯  π₯  π ... π« πͺπ¬ β‘οΈ π¦πΉ πΊπΊπΊ   π« π¦πΉ β‘οΈ πΊπΈ π  " ,
        // "body":  " Headed on vacation for 2 and half weks in Egypt and 4 days in Vienna. First trip out of the country since 2010 π«",
        "date": "August 04, 2015"
    },
    {
        "body": "Graduated from Claremont High School! π",
        "date": "June 15, 2015 "
    },
];

export default function About(){ 
    return (
        <div className=""> 
            <div className="container my-12 mx-auto px-4 md:px-12">
                <h1 className="text-center text-4xl font-mono text-green-darker">
                    about me
                </h1>
                <p className="text-center text-sm font-mono text-green-darker mb-5" >
                (180 words at a time)
                </p>
                <div className="flex flex-col items-center">
                    <div className="flex-col w-2/5 mx-auto mb-5">
                        {AboutMe.map((tweet) => (
                            <TwitterCard
                            body={tweet.body}
                            date={tweet.date}
                            />
                        ))}

                    </div>  
                    </div>
            </div> 
        </div>
    );
}
