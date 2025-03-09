import React from 'react'
import './Slider.css'

const Slider = () => {
    const techStack = [
        { name: "Next.JS", src: "/svg/astro.svg" },
        { name: "React", src: "/svg/react.svg" },
        { name: "TypeScript", src: "/svg/typeScript.svg" },
        { name: "TailwindCSS", src: "/svg/tailwindcss.svg" },
        { name: "HTML5", src: "/svg/HTML5.svg" },
        { name: "CSS3", src: "/svg/CSS3.svg" },
        { name: "JavaScript", src: "/svg/javaScript.svg" },
        { name: "Git", src: "/svg/git.svg" },
        { name: "SQL", src: "/svg/mysql.svg" },
        { name: "C", src: "/svg/mysql.svg" },
        { name: "C++", src: "/svg/mysql.svg" },
        
      ];
  return (
    <div className="relative overflow-x-hidden pb-10 ">
      {/* Gradient Fade Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-20"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-20"></div>

      {/* Scrolling Animation */}
      <div className="flex scroll-container gap-12 md:gap-20 w-max">
        {[...techStack, ...techStack].map((tech, index) => (
          <div key={index} className="flex items-center gap-2 group transition-all duration-300">
            <img
              src={tech.src}
              alt={tech.name}
              className="h-7 w-auto object-contain transition-transform group-hover:scale-110 opacity-60"
              width={30}
              height={30}
              loading="lazy"
            />
            <span className="text-lg font-medium text-[var(--white-icon)]">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
