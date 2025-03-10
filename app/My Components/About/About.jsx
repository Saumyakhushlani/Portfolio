import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="p-6">
      <div className="text-5xl font-medium about relative inline-block">About me</div>

      <div className="mt-7 text-xl text-white">
        <div className="mb-6">
          Hi! I'm a <strong>Computer Science and Engineering</strong> student at <strong>MANIT Bhopal</strong> with a strong passion for 
          <strong> problem-solving</strong> and <strong>web development</strong>. I have a solid foundation in <strong>Data Structures and Algorithms (DSA) using C/C++</strong>, 
          and I love building <strong>efficient and scalable solutions</strong>.
        </div>

        <div className="mb-6">
          On the development side, I specialize in <strong>frontend technologies</strong> with expertise in 
          <strong> HTML, CSS, JavaScript, React, Tailwind CSS, and Next.js</strong>. I also have experience with 
          <strong> Git and GitHub</strong>, ensuring <strong>seamless collaboration and version control</strong>.
        </div>

        <div className="mb-6">
          Additionally, I have experience working with <strong>PostgreSQL</strong>, allowing me to handle databases efficiently and work on full-stack applications.
        </div>

        <div className="mb-6">
          I'm always eager to <strong>learn, innovate, and contribute</strong> to exciting projects. Whether it's crafting 
          <strong> clean and responsive UI/UX</strong> or solving <strong>complex coding challenges</strong>, I'm always up for the challenge!
        </div>

        <div className="mb-2">
          Let's <strong>connect</strong> and create something amazing! 
        </div>
      </div>
    </div>
  );
};

export default About;


