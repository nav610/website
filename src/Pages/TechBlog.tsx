import React from 'react'; 
import TechCard  from '../components/TechCard'

interface blogProps { 
    title: string;
    preview: string;
    date: string;
};
const blogs: blogProps[] = [
    {
        "title": "Lorem ipsum dolor sit amet 1",
        "preview": "Tincidunt vitae semper quis lectus nulla at volutpat. Massa massa ultricies mi quis hendrerit dolor magna eget est. Commodo viverra maecenas accumsan lacus vel. Elementum pulvinar etiam non quam lacus. Ut tellus elementum sagittis vitae et leo duis ut. Amet consectetur adipiscing elit ut aliquam purus.",
        "date": "January 1, 2021" 
    },
    {
        "title": "Lorem ipsum dolor sit amet 2",
        "preview": "Tincidunt vitae semper quis lectus nulla at volutpat. Massa massa ultricies mi quis hendrerit dolor magna eget est. Commodo viverra maecenas accumsan lacus vel. Elementum pulvinar etiam non quam lacus. Ut tellus elementum sagittis vitae et leo duis ut. Amet consectetur adipiscing elit ut aliquam purus.",
        "date": "January 1, 2021" 
    },
    {
        "title": "Lorem ipsum dolor sit amet 2",
        "preview": "Tincidunt vitae semper quis lectus nulla at volutpat. Massa massa ultricies mi quis hendrerit dolor magna eget est. Commodo viverra maecenas accumsan lacus vel. Elementum pulvinar etiam non quam lacus. Ut tellus elementum sagittis vitae et leo duis ut. Amet consectetur adipiscing elit ut aliquam purus.",
        "date": "January 1, 2021" 
    },
    {
        "title": "Lorem ipsum dolor sit amet 2",
        "preview": "Tincidunt vitae semper quis lectus nulla at volutpat. Massa massa ultricies mi quis hendrerit dolor magna eget est. Commodo viverra maecenas accumsan lacus vel. Elementum pulvinar etiam non quam lacus. Ut tellus elementum sagittis vitae et leo duis ut. Amet consectetur adipiscing elit ut aliquam purus.",
        "date": "January 1, 2021" 
    },
    {
        "title": "Lorem ipsum dolor sit amet 2",
        "preview": "Tincidunt vitae semper quis lectus nulla at volutpat. Massa massa ultricies mi quis hendrerit dolor magna eget est. Commodo viverra maecenas accumsan lacus vel. Elementum pulvinar etiam non quam lacus. Ut tellus elementum sagittis vitae et leo duis ut. Amet consectetur adipiscing elit ut aliquam purus.",
        "date": "January 1, 2021" 
    },
];
export default function TechBlog(){ 
    return (
        <div className=""> 
        <div className="container my-12 mx-auto px-4 md:px-12">
            <h1 className="text-center text-4xl font-mono text-green-darker">
                tech blog
            </h1>
            <p>
                (180 words at a time)
            </p>
            <div className="flex flex-wrap gap-20">
                {blogs.map((blog) => (
                    <TechCard
                    title={blog.title}
                    preview={blog.preview}
                    date={blog.date}
                    />
                ))}
            </div>
        </div>
        </div>
);
}
