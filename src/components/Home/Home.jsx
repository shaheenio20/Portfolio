import React, { useState, useEffect } from 'react';
import photo from "../../assets/cv_photo.jpg";
import lap1 from "../../assets/laptop1.jpg";
import lap2 from "../../assets/laptop2.jpg";
import lap3 from "../../assets/laptop3.jpg";
import { SiRoamresearch } from "react-icons/si";
import { TbAnalyze } from "react-icons/tb";
import { CiEdit } from "react-icons/ci";
import { MdLaunch } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  // Apply the gradient directly to the span to avoid text-transparent issues
  return (
    <span className="border-r-4 border-primary pr-1 animate-pulse bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
      {currentText}
    </span>
  );
};

const Home = () => {
    const [showInfo, setShowInfo] = useState(false);
    const handleInfoClick = () => {
        setShowInfo(!showInfo);
    }
    const [showProjects, setShowProjects] = useState(false);
    const handleInProject = () => {
        setShowProjects(!showProjects);
    }
    return (
        <div className='py-10 lg:py-25 bg-base-200 mb-8 overflow-hidden'>
            <div className='animate-fade-in-up'>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse w-11/12 lg:w-10/12 mx-auto lg:py-10 py-10">
                        <div className="max-w-sm lg:text-right text-center animate-slide-in-right" >
                            <img
                                className='rounded-xl lg:mt-0 mt-10 shadow-2xl hover:scale-105 transition-transform duration-500'
                                src={photo} alt="Profile" />
                        </div>
                        <div className="animate-fade-in-up">
                            <div className=''>
                                {/* Removed the gradient classes from h1 since they are now on the Typewriter span */}
                                <h1 className="lg:text-6xl text-4xl font-bold pt-3 h-[120px] lg:h-auto">
                                    <Typewriter text="Hello, I’m Md Shaheenur Rashid" delay={100} />
                                </h1>
                                <p className="py-6 text-lg text-base-content/80">
                                    I'm a Freelance UI/UX Designer and Web Developer based in Germany, England. I strive
                                    to build immersive and beautiful
                                    web applications through carefully crafted code and user-centric design.
                                </p>
                                <button className="btn btn-primary rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" onClick={handleInfoClick}>
                                    {showInfo ? "Hide Information" : "Get Information"}
                                    <FaArrowRight className='mt-1 ml-2'></FaArrowRight>
                                </button>
                                {showInfo && (
                                    <div className="mt-6 bg-base-100 p-6 rounded-xl shadow-xl text-base-content animate-zoom-in border border-base-300">
                                        <p className="mb-2"><strong className="text-primary">ID: </strong>232-134-020</p>
                                        <p className="mb-2"><strong className="text-primary">Batch: </strong>5th</p>
                                        <p className="mb-2"><strong className="text-primary">Name: </strong> Md Shaheenur Rashid</p>
                                        <p className="mb-2"><strong className="text-primary">CGP: </strong>3.78 out of 4.00</p>
                                        <p className="mb-2"><strong className="text-primary">Department: </strong> Software Engineering</p>
                                        <p className="mb-2"><strong className="text-primary">University: </strong> Metropolitan University</p>
                                        <p className="mb-2"><strong className="text-primary">Email: </strong> shahinurmubarak238@gmail.com</p>
                                    </div>
                                )}
                                <div className='py-12'>
                                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 text-base-content text-center'>
                                        <div className='w-full lg:w-48 bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-xl px-4 py-6 border border-base-200'>
                                            <h1 className='font-bold text-4xl text-primary'>5</h1>
                                            <p className="font-semibold mt-2">Years Experience</p>
                                        </div>
                                        <div className='w-full lg:w-48 bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-xl px-4 py-6 border border-base-200'>
                                            <h1 className='font-bold text-4xl text-primary'>44+</h1>
                                            <p className="font-semibold mt-2">Projects Completed</p>
                                        </div>
                                        <div className='w-full lg:w-48 bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-xl px-4 py-6 border border-base-200'>
                                            <h1 className='font-bold text-4xl text-primary'>20+</h1>
                                            <p className="font-semibold mt-2">Happy Clients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='w-11/12 lg:w-10/12 mx-auto py-16 bg-base-100 mb-8 rounded-2xl shadow-xl animate-fade-in-up'>
                <div className='text-center lg:w-[600px] w-[300px] mx-auto space-y-4 px-4 mb-16'>
                    <h1 className="lg:text-5xl text-3xl font-bold mb-5 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Web Development</h1>
                    <p className='text-lg text-base-content/70'>Here's a selection of my recent work, showcasing my skills in creating user-centric and visually appealing interfaces.</p>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-6'>
                    {[lap1, lap2, lap3].map((img, index) => (
                        <div key={index} className="card w-full bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                            <figure className="px-6 pt-6 overflow-hidden">
                                <img src={img} alt="Project" className="rounded-xl w-full h-[200px] object-cover group-hover:scale-110 transition-transform duration-500" />
                            </figure>
                            <div className="card-body items-center text-center space-y-2">
                                <h3 className="text-sm font-bold text-secondary tracking-widest">WEB DESIGN</h3>
                                <h2 className="card-title text-xl">Product Admin Dashboard</h2>
                                <p className="text-sm text-base-content/70">I focus on crafting smooth, responsive interfaces that balance aesthetic appeal with practical functionality.</p>
                                <div className="card-actions mt-4">
                                    <a href='https://refactoring.guru/design-patterns' target="_blank" rel="noreferrer" className="btn btn-outline btn-primary hover:scale-105 transition-transform">
                                        More Explore
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className='bg-neutral text-neutral-content rounded-t-3xl mt-10 animate-fade-in-up'>
                <div className='w-11/12 lg:w-10/12 mx-auto py-24 px-5'>
                    <h1 className="lg:text-5xl text-3xl font-bold text-center px-4 mb-16 animate-zoom-in">Do you know how to start?</h1>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-12 items-center'>
                        <div className='space-y-6 lg:pr-10'>
                            <h1 className="lg:text-5xl text-3xl font-bold text-primary">Work Process</h1>
                            <p className='text-lg leading-relaxed text-neutral-content/80'>
                                Driven by design and powered by code, I create digital interfaces that feel intuitive and perform seamlessly. Every layout, animation,
                                and component is crafted with intention — merging usability with visual clarity.
                            </p>
                            <p className='text-lg leading-relaxed text-neutral-content/80'>I blend clean design with efficient code to build engaging, user-friendly web experiences that stand out.</p>
                            <div>
                                <button className='btn btn-primary mt-8 rounded-xl shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1' onClick={handleInProject}>
                                    {showProjects ? "Hide Projects" : "More Projects"}
                                    <FaArrowRight className='ml-2'></FaArrowRight>
                                </button>
                                {showProjects && (
                                    <div className='bg-base-100 text-base-content duration-500 rounded-xl mt-8 shadow-2xl animate-fade-in-up border border-base-300'>
                                        <div className='p-8'>
                                            <h1 className='font-bold text-xl mb-4 text-primary'>Explore More Work</h1>
                                            <ul className="space-y-3">
                                                <li><strong>URL: </strong><a className="text-secondary hover:underline" href='https://makebyme-334f6.web.app/' target="_blank" rel="noreferrer">https://makebyme-334f6.web.app/</a></li>
                                                <li><strong>URL: </strong><a className="text-secondary hover:underline" href='https://category-d388c.web.app/' target="_blank" rel="noreferrer">https://category-d388c.web.app/</a></li>
                                                <li><strong>URL: </strong><a className="text-secondary hover:underline" href='https://job-replacement-b25d7.web.app/' target="_blank" rel="noreferrer">https://job-replacement-b25d7.web.app/</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-6'>
                            {[
                                { icon: SiRoamresearch, title: "1. Research", desc: "Design meets function in every pixel, blending clarity with intuitive motion." },
                                { icon: TbAnalyze, title: "2. Analyze", desc: "Crafting clean, thoughtful interfaces where form flows seamlessly into function." },
                                { icon: CiEdit, title: "3. Design", desc: "I design seamless digital experiences with precision, purpose, and elegance." },
                                { icon: MdLaunch, title: "4. Launch", desc: "Thoughtful design meets performance-driven, responsive development." }
                            ].map((item, index) => (
                                <div key={index} className='w-full bg-base-200/10 backdrop-blur-sm border border-neutral-content/10 hover:bg-primary hover:text-primary-content transition-all duration-500 rounded-2xl p-8 flex flex-col items-center group shadow-lg hover:shadow-primary/30 hover:-translate-y-2'>
                                    <div className='w-20 h-20 bg-base-100 group-hover:bg-primary-content flex items-center justify-center rounded-2xl shadow-md transition-colors duration-500'>
                                        <item.icon className='text-primary group-hover:text-primary text-4xl transition-colors duration-500' />
                                    </div>
                                    <div className='text-center space-y-3 pt-6'>
                                        <h1 className='text-2xl font-bold'>{item.title}</h1>
                                        <p className='text-sm opacity-80 group-hover:opacity-100'>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;