"use client"
import React from 'react'
import Project_Card from './Project_Card';

const Projects = () => {
    const projects=[
        {sno:1,title:"Khushlani Creations",status:"In Development",img:"",back:"#5C90F5"},
        {sno:2,title:"",status:"",img:"",back:"#101010"},
    ];
  return (
    <div className='py-2 md:w-[75vw] mx-[12.5vw]'>
      <div className="text-[#00ffff]">My works</div>
      <div className="font-semibold text-5xl mb-2">Projects</div>
      <div className='flex flex-row md:flex-col'>
        {projects.map=(e)=>(
            <Project_Card key={e.sno} data={e}/>
        )}
      </div>
    </div>
  )
}

export default Projects
