import React from "react";
import { GiPawFront } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { TbLiveView } from "react-icons/tb";

const projectData = [
  {
    id: 1,
    title: "Fashion Store E-Commerce",
    description: "Elevate Your Everyday Style. Features a complete ordering system and seamless cart functionality.",
    type: "Frontend (React)",
    tech: ["JavaScript", "Tailwind", "React"],
    github: "https://github.com/shaheenio20/Oxivos_Frontend_Project_Task",
    live: "https://oxivos-frontend-project-task.vercel.app/"
  },
  {
    id: 2,
    title: "Blood Donation",
    description: "Save Lives Through Blood Donation. Connect blood donors with those in need.",
    type: "Full Stack",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/shaheenio20/Blood-Donation",
    live: "https://blood-donation-73333.web.app/"
  },
  {
    id: 3,
    title: "Productivity of Shop",
    description: "Boost productivity with our drag-and-drop kanban boards, reminders, and team collaboration.",
    type: "Frontend (React)",
    tech: ["React", "Tailwind", "Firebase"],
    github: "https://github.com/shaheenio20/ProductShop",
    live: "https://makebyme-334f6.web.app/"
  },
  {
    id: 4,
    title: "Doctor's Appointment Booking",
    description: "Generate stunning images from text prompts using advanced AI models and a sleek UI.",
    type: "Frontend (React)",
    tech: ["JavaScript", "React", "Tailwind"],
    github: "https://github.com/shaheenio20/Category",
    live: "https://category-d388c.web.app/"
  },
  {
    id: 5,
    title: "Different Shoes Products",
    description: "Monitor your workouts, track calories, and visualize your progress with beautiful charts.",
    type: "Full Stack",
    tech: ["React", "Express Js", "Node Js"],
    github: "https://github.com/shaheenio20/shoes-crud-client",
    live: "https://shoes-brand-auth.netlify.app/"
  },
  {
    id: 6,
    title: "Brand Phone Auth",
    description: "Connect with friends, share posts, and chat in real-time with our scalable social platform.",
    type: "Mern Stack",
    tech: ["MongoDB", "Express", "React", "Node Js"],
    github: "https://github.com/shaheenio20/brand-phone-auth-server",
    live: "https://brand-phone-auth.netlify.app/"
  }
];

const Projects = () => {
  return (
    <div className="bg-base-200 py-24 min-h-screen">
      <div className="w-11/12 lg:w-10/12 mx-auto">
        <div className="text-center lg:w-[800px] w-full mx-auto mb-16 animate-fade-in-up">
          <h1 className="lg:text-6xl text-4xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            My Featured Projects
          </h1>
          <p className="text-lg text-base-content/80">
            A showcase of my technical expertise and problem-solving skills. I build responsive, scalable, and visually stunning web applications using modern technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative bg-base-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-base-300 animate-fade-in-up flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Decorative top gradient bar */}
              <div className="h-2 w-full bg-gradient-to-r from-primary via-secondary to-accent"></div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-content transition-colors duration-500">
                    <GiPawFront className="text-3xl" />
                  </div>
                  <span className="badge badge-outline badge-primary font-semibold py-3 px-4">
                    {project.type}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h2>
                <p className="text-base-content/70 flex-grow mb-6">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h6 className="text-xs uppercase tracking-wider font-bold text-base-content/50 mb-3">Built With</h6>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-base-200 rounded-lg text-xs font-medium border border-base-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6 pt-0 mt-auto grid grid-cols-2 gap-3">
                <a href={project.github} className="btn btn-outline hover:bg-base-content hover:text-base-100 w-full rounded-xl transition-all">
                  <FaGithub className="text-lg mr-1" />
                  Code
                </a>
                <a href={project.live} className="btn btn-primary w-full rounded-xl shadow-lg hover:shadow-primary/40 transition-all">
                  <TbLiveView className="text-lg mr-1" />
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
