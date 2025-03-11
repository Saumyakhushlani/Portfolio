import React from 'react'
import './Slider.css'

const Slider = () => {
    const techStack = [
        { name: "Next.JS", src: "/nextjs.svg" },
        { name: "React", src: "/react.png" },
        { name: "TailwindCSS", src: "/tailwind-css.svg" },
        { name: "HTML", src: "/html.webp" },
        { name: "CSS", src: "/css2.png" },
        { name: "JavaScript", src: "/js.png" },
        { name: "Git", src: "/git.png" },
        { name: "PostgreSQL", src: "/post.png" },
        { name: "C++", src: "/c++.png" },
        
      ];
  return (
    <div className="relative overflow-x-hidden pb-10 ">
      {/* Gradient Fade Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:bg-gradient-to-r from-[var(--background)] to-transparent z-20"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:bg-gradient-to-l from-[var(--background)] to-transparent z-20"></div>

      {/* Scrolling Animation */}
      <div className="flex scroll-container gap-12 md:gap-20 w-max">
        {[...techStack, ...techStack].map((tech, index) => (
          <div key={index} className="flex items-center gap-2 group transition-all duration-300 py-2">
            <img
              src={tech.src}
              alt={tech.name}
              className="h-9 w-auto object-contain transition-transform group-hover:scale-110 opacity-80"
              width={30}
              height={30}
              loading="lazy"
            />
            <span className="text-xl font-medium text-[var(--white-icon)]">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
