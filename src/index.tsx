import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Navbar from './components/Navbar'; 
import { Route, BrowserRouter} from 'react-router-dom'
import Home  from "./Pages/Home";
import About from "./Pages/About";
import TechBlog  from "./Pages/TechBlog";
import FoodBlog from "./Pages/Food";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-green-lighter">
        <div className="max-w-10xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a href="/" className="text-white hover:bg-green-darker hover:text-white px-3 py-2 rounded-md text-medium font-medium">
                  <div className="flex space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"  fill="currentColor">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    Home
                  </div>
                </a>
                <a href="/about" className="text-white hover:bg-green-darker hover:text-white px-3 py-2 rounded-md text-medium font-medium">
                  <div className="flex space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor">
                      <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
                    </svg>
                    About
                  </div>
                </a>
                <a href="/tech-blog" className="text-white hover:bg-green-darker hover:text-white px-3 py-2 rounded-md text-medium font-medium">
                  <div className="flex space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor">
                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    Technology Blog
                  </div>
                </a>
                <a href="/food-blog" className="text-white hover:bg-green-darker hover:text-white px-3 py-2 rounded-md text-medium font-medium">
                  <div className="flex space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                    Food Blog
                  </div>
                </a>
              </div>
            </div>
          </div>
          </div>          
        </div>          
      </nav>     
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/tech-blog" component={TechBlog}/>
        <Route path="/food-blog" component={FoodBlog}/>
    </BrowserRouter>  
  );
}


export default App;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
