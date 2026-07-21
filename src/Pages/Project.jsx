import React from 'react'
import { gsap } from "gsap";
import ProjectCard from '../components/projects/projectCard'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Project = () => {
  const projects = [{
image1:'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022',
image2:'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022'
},{
image1:'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f',
image2:'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47'
},{
image1:'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996',
image2:'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e'
}]
gsap.registerPlugin(ScrollTrigger);
useGSAP(function(){
  gsap.from('.hero',{
 height:'100px',
 stagger:{
  amount:0.2
 },
scrollTrigger:{
trigger:'.lol',
markers:false,
start:'top 100%',
end:'top -150',
scrub:true
}
  })
})
  return (
    <div className='lg:p-4 p-2 mb-[100vh]'>
    <div className=' pt-[25vw]'>
    <h2 className='text-[10vw] font-[font1]  uppercase'>Projets</h2>
    </div>
    <div className='lg:-mt-18 lol '>
    {projects.map (function(elem , idx){
      return <div key ={idx}className=' hero w-full lg:h-[400px] mb-4 flex lg:gap-4 gao-2'>
      <ProjectCard image1 = {elem.image1} image2 = {elem.image2}/>
      </div>
    })}
     </div>
    </div>
  )
}

export default Project
