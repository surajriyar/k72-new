import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = ['https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
    'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
    'https://k72.ca/images/teamMembers/Michele_640X980.jpg?w=640&h=960&s=145fe77d0a66376d9904f39939ad8891',
    'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
     'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
     'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab',
     'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
    'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6',
    ]


  useGSAP(() => {
   gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 32%",
        end: "top -70%",
        pin: true,
        pinSpacing : true,
        pinReparent:true,
        pinType:'transform',
        scrub:1,
        anticipatePin:1,
        invalidateOnRefresh:true,
        onUpdate:(elem)=>{
          let imageIndex ;
          if(elem.progress<1){
          imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length-1
          }
       imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })
  return (
    <div className="bg-white">
      <div className='section1 relative py-1' >
      <div ref = {imageDivRef} className="absolute overflow-hidden h-[17vw] w-[15vw] rounded-3xl top-70 left-[30vw]">
        <img ref = {imageRef} className='h-full w-full object-cover rounded-3xl' src = "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991"></img>
      </div>
      <div className=' relative font-[font1]'>
      <div className='mt-[31vw] text-black'>
        <h1 className='text-[19vw] text-center uppercase leading-[17vw]'>
          soixen7e <br/>
          douze </h1>
      </div>
      <div className='pl-[60%] mt-20'>
        <p className='text-4xl'> &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
      </div>
    </div>
    </div>
    <div className='section2 h-screen'>
    </div>
    </div>
  )
}

export default Agence
