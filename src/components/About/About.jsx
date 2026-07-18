import React, { useState } from "react";
import { FaJs, FaJava, FaPython, FaReact } from "react-icons/fa";
import { SiCplusplus, SiMysql } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
import photo from "../../assets/cv_photo.jpg";
import photo1 from "../../assets/images/photo1.jpg";
import photo2 from "../../assets/images/photo2.jpg";
import photo3 from "../../assets/images/photo3.jpg";
import photo4 from "../../assets/images/photo4.jpg";
import photo5 from "../../assets/images/photo5.jpg";
import photo6 from "../../assets/images/photo6.jpg";
import { Link } from "react-router-dom";

const skills = [
    {
      name: "JavaScript",
      icon: (
        <FaJs className="text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
      ),
      level: "Advanced",
      experience: "Almost 4 years",
      role: "Frontend Developer",
      salary: "15,000",
    },
    {
      name: "Java",
      icon: (
        <FaJava className="text-red-600 group-hover:scale-110 transition-transform duration-300" />
      ),
      level: "Intermediate",
      experience: "Almost 2 years",
      role: "Android Developer",
      salary: "12,000",
    },
    {
      name: "Python",
      icon: (
        <FaPython className="text-blue-500 group-hover:scale-110 transition-transform duration-300" />
      ),
      level: "Intermediate",
      experience: "Almost 2 years",
      role: "Data/Backend Developer",
      salary: "12,000",
    },
    {
      name: "React",
      icon: (
        <FaReact className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
      ),
      level: "Advanced",
      experience: "Almost 3 years",
      role: "Front-end Developer",
      salary: "10,000",
    },
    {
      name: "C++",
      icon: (
        <SiCplusplus className="text-blue-700 group-hover:scale-110 transition-transform duration-300" />
      ),
      level: "Intermediate",
      experience: "4 years",
      role: "Software Developer",
      salary: "8,500",
    },
    {
      name: "SQL",
      icon: (
        <SiMysql className="text-blue-600 group-hover:scale-110 transition-transform duration-300" />
      ),
      level: "Intermediate",
      experience: "1 years",
      role: "Database Developer",
      salary: "9,500",
    },
  ];

const About = () => {
  return (
    <div className="overflow-hidden animate-fade-in-up">
      <div className="bg-base-200">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse w-11/12 lg:w-10/12 mx-auto lg:py-10 py-16 justify-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 flex justify-center animate-slide-in-right">
              <img
                className="w-full max-w-sm lg:max-w-lg rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
                src={photo}
                alt="Profile"
              />
            </div>
            <div className="w-full lg:w-1/2 animate-fade-in-up text-center lg:text-left">
              <div className="w-full px-4 lg:px-0">
                <h1 className="lg:text-5xl text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-2">
                  I am a Full Stack MERN Developer to Build Fast, Secure &
                  Scalable Web Solutions
                </h1>
                <p className="py-4 text-lg opacity-80">
                  I build modern, responsive, and scalable web applications
                  using the MERN stack. My focus is on creating clean,
                  efficient, and user-friendly digital solutions.
                </p>
                <p className="py-2 mb-6 text-lg opacity-80">
                  I enjoy turning ideas into full-stack applications by
                  combining intuitive frontend design with secure backend
                  development and continuously learning new technologies.
                </p>
                <Link to="/projects">
                    <button className="btn btn-primary outline-none">My Projects</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral py-20 text-neutral-content rounded-b-3xl shadow-xl animate-fade-in-up">
        <div className="w-11/12 lg:w-10/12 mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 animate-zoom-in">
            <h1 className="lg:text-5xl text-3xl font-bold text-primary">
              My Research
            </h1>
            <p className="text-lg opacity-80">
              Explore my recent research work where I share findings, insights,
              and perspectives on emerging trends and developments in the field.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-6 px-4">
            {[
              {
                img: photo1,
                date: "22 October, 2022",
                text: "Responsive Design: Adapting to all devices.",
              },
              {
                img: photo2,
                date: "3 November, 2022",
                text: "When you hear the word desert, what comes to mind?",
              },
              {
                img: photo3,
                date: "29 December, 2021",
                text: "A hill is a naturally raised area of land, lower and less steep than a mountain.",
              },
              {
                img: photo4,
                date: "21 September, 2023",
                text: "Unlike highways or city streets, hill roads have a rhythm of their own.",
              },
              {
                img: photo5,
                date: "23 August, 2023",
                text: "Popular with professionals, known for high quality and lens flexibility.",
              },
              {
                img: photo6,
                date: "28 January, 2024",
                text: "There are over 8.7 million estimated species on Earth, and more than 7 million of them are animals!",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card w-full bg-base-100 text-base-content shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden group"
              >
                <figure className="px-6 pt-6 overflow-hidden">
                  <img
                    src={item.img}
                    alt="Research"
                    loading="lazy"
                    className="rounded-xl w-full h-[200px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-secondary italic text-sm">
                    {item.date}
                  </h2>
                  <p className="font-medium">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-base-100 py-24 animate-fade-in-up">
        <div className="w-11/12 lg:w-10/12 mx-auto" id="skill">
          <div className="lg:w-[600px] w-[300px] mx-auto text-center mb-16 animate-zoom-in">
            <h2 className="lg:text-5xl text-3xl font-bold text-center mb-6 text-primary">
              Experience & Skills
            </h2>
            <p className="text-lg opacity-80 px-3">
              Experience with JavaScript, Java, Python, and React encompasses a
              wide range of programming paradigms and application development
              areas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group w-full flex flex-col items-center bg-base-200 border border-base-300 shadow-lg rounded-2xl p-8 hover:shadow-2xl hover:border-primary hover:-translate-y-2 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-7xl mb-6">{skill.icon}</div>
                <div className="text-3xl mb-4 font-bold text-primary italic">
                  {skill.name}
                </div>
                <div className="w-full space-y-2 text-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <p className="text-md font-semibold italic">
                    Level: {skill.level}
                  </p>
                  <p className="text-md font-semibold italic">
                    Experience: {skill.experience}
                  </p>
                  <p className="text-md font-semibold italic">
                    Role: {skill.role}
                  </p>
                  <p className="text-md font-semibold italic">
                    Salary: {skill.salary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
