import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import s1 from "../../assets/images/facebook.png";
import s2 from "../../assets/images/amazon.png";
import s3 from "../../assets/images/google.png";
import s4 from "../../assets/images/instagram.png";
import s5 from "../../assets/images/LinkedIn.png";
import s6 from "../../assets/images/spotify-image.png";

const services = [
    {
        title: 'Web Development',
        description: 'Building responsive and modern websites.',
        icon: '🌐',
    },
    {
        title: 'SEO Optimization',
        description: 'Improving your site visibility on search engines.',
        icon: '🔍',
    },
    {
        title: 'Graphic Design',
        description: 'Creating stunning visual content for your brand.',
        icon: '🎨',
    },
];

const Service = () => {
    const [showSay, setShowSay] = useState(false);
    const handleSay = () => {
        setShowSay(!showSay);
    }
    return (
        <div className="overflow-hidden animate-fade-in">
            <div className='py-20 bg-neutral text-neutral-content rounded-b-3xl shadow-xl'>
                <div className='w-11/12 lg:w-10/12 mx-auto animate-fade-in-up'>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 items-center'>
                        <div className='px-4 lg:px-10 space-y-8 animate-slide-in-right'>
                            <h1 className="lg:text-5xl text-4xl font-bold lg:pt-10 pt-10 text-primary">What I do?</h1>
                            <p className='text-lg opacity-80 leading-relaxed'>
                                I specialize in designing user experiences, crafting engaging interfaces,
                                and building robust web applications that deliver value and usability.
                            </p>
                            <p className='text-lg opacity-80 leading-relaxed'>
                                My approach combines creativity and technical expertise to deliver solutions that
                                are both visually appealing and highly functional for users.
                            </p>
                            <div className='py-5'>
                                <button className="btn btn-primary rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300" onClick={handleSay}>
                                    {showSay ? "Hide GitHub" : " Explore GitHub"}
                                    <FaArrowRight className='ml-2'></FaArrowRight>
                                </button>
                                {showSay && (
                                    <div className='mt-6 bg-base-100 p-6 rounded-xl shadow-xl text-base-content animate-zoom-in border border-base-300'>
                                        <p className="mb-2"><strong className="text-primary">Name:  </strong>  Rashid_MD_Shaheen</p>
                                        <p className="mb-2"><strong className="text-primary">User Name:  </strong>  shaheenio20</p>
                                        <p className="mb-2"><strong className="text-primary">URL:  </strong><a className="text-secondary hover:underline" href='https://github.com/shaheenio20' target="_blank" rel="noreferrer">https://github.com/shaheenio20</a></p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='grid grid-cols-1 gap-6'>
                            {[
                                { title: "User Experience (JavaScript)", desc: "I use JavaScript to build dynamic, responsive, and user-friendly web applications. From DOM manipulation to API integration, I bring interactivity and real-time functionality to websites." },
                                { title: "User Interface (React Frameworks)", desc: "I build modern, responsive user interfaces using React and its powerful component-based architecture. By breaking down UIs into reusable components, I ensure maintainability." },
                                { title: "Web Development", desc: "I develop responsive and accessible websites using HTML, CSS, JavaScript, and modern frameworks. I focus on performance, usability, and cross-browser compatibility." }
                            ].map((item, index) => (
                                <div key={index} className='w-full bg-base-200/10 backdrop-blur-md border border-neutral-content/10 hover:bg-base-200 hover:text-base-content transition-all duration-500 rounded-2xl px-8 py-8 flex flex-col items-center group animate-fade-in-up' style={{ animationDelay: `${index * 150}ms` }}>
                                    <div className='text-start space-y-3 w-full'>
                                        <h1 className='text-2xl font-bold group-hover:text-primary transition-colors'>{item.title}</h1>
                                        <h3 className='text-base opacity-70 group-hover:opacity-100 transition-opacity'>
                                            {item.desc}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='pt-20'>
                    <div className="px-6 py-16 w-11/12 lg:w-10/12 mx-auto bg-base-200 text-base-content rounded-3xl shadow-2xl animate-fade-in-up">
                        <div className="text-center mb-16 animate-zoom-in">
                            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Our Services</h1>
                            <p className="text-lg opacity-80 mt-2">What you offer to help your business grow.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 lg:px-8">
                            {services.map((service, index) => (
                                <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:border-primary border border-base-300 transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                                    <div className="card-body items-center text-center">
                                        <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-500">{service.icon}</div>
                                        <h2 className="card-title text-xl font-bold group-hover:text-primary">{service.title}</h2>
                                        <p className="text-sm opacity-70">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-20 animate-zoom-in">
                            <h3 className="text-2xl lg:text-3xl font-semibold mb-8">Ready to work with me?</h3>
                            <a href='/contact' className="btn btn-primary btn-lg rounded-full shadow-lg hover:-translate-y-1 transition-all duration-300">
                                Contact Me
                                <FaArrowRight className='ml-2'></FaArrowRight>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='bg-base-100 py-24'>
                <div className='w-11/12 lg:w-10/12 mx-auto text-center'>
                    <h1 className="lg:text-5xl text-3xl font-bold mb-6 text-primary animate-zoom-in">Happy Clients</h1>
                    <p className='mb-12 text-lg opacity-80 max-w-2xl mx-auto animate-fade-in-up'>I've had the pleasure of working with a diverse range of companies, from startups to established brands.</p>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5'>
                        {[
                            { name: "Facebook", img: s1, desc: "Built high-performance, user-centric features inspired by Facebook's scalable design principles to deliver seamless user experiences.", link: "https://www.facebook.com/shahin.srshahin", action: "Add Me" },
                            { name: "Amazon", img: s2, desc: "Engineered scalable, user-driven components influenced by Amazon’s data-backed eCommerce efficiency and UX.", link: "https://www.amazon.com/", action: "Search" },
                            { name: "Instagram", img: s4, desc: "Designed visually engaging, mobile-first interfaces inspired by Instagram’s sleek and intuitive user experience.", link: "#", action: "Add Me" },
                            { name: "LinkedIn", img: s5, desc: "Built professional, conversion-focused features modeled after LinkedIn’s networking and engagement strategies.", link: "#", action: "Add Me" },
                            { name: "Google", img: s3, desc: "Developed fast, accessible, and SEO-optimized solutions inspired by Google’s performance and usability standards.", link: "https://www.google.com/", action: "Search" },
                            { name: "Spotify", img: s6, desc: "Created immersive, responsive layouts inspired by Spotify’s dynamic and personalized user experiences.", link: "https://open.spotify.com/", action: "Search" }
                        ].map((client, index) => (
                            <div key={index} className='w-full bg-base-200 border border-base-300 shadow-lg hover:shadow-2xl hover:border-primary hover:-translate-y-2 transition-all duration-500 rounded-2xl text-center px-8 py-8 flex flex-col items-center group animate-fade-in-up' style={{ animationDelay: `${index * 100}ms` }}>
                                <div className='w-20 h-20 flex items-center justify-center rounded-2xl bg-base-100 shadow-md group-hover:scale-110 transition-transform duration-500 mb-6'>
                                    <img src={client.img} className="rounded-full w-16 h-16 object-cover" alt={client.name} />
                                </div>
                                <div className='text-center space-y-4 flex-grow flex flex-col'>
                                    <h1 className='text-2xl font-bold group-hover:text-primary transition-colors'>{client.name}</h1>
                                    <p className='text-sm opacity-80 flex-grow'>{client.desc}</p>
                                    <a href={client.link} target="_blank" rel="noreferrer" className='btn btn-outline btn-primary rounded-xl w-full hover:scale-105 transition-transform mt-4'>{client.action}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;