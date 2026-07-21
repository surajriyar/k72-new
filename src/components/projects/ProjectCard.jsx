import React from "react";

const ProjectCard = (props) => {
    return(
<>
  <div className="w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full ">
        <img
            className="h-full w-full object-cover" src={props.image1} alt="" />
        <div className=" opacity-0  transition-all group-hover:opacity-100 absolute  flex items-center justify-center top-0 left-0 h-full w-full bg-black/5">
            <h2 className="uppercase text-3xl font-[font1] border-1 pt-2 px-4 border-white text-white rounded-full">
                vior le projets
            </h2>
        </div>
    </div>
    <div className="w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full ">
        <img
            className="h-full w-full object-cover" src={props.image2} alt="" />
        <div className=" opacity-0  transition-all group-hover:opacity-100 absolute  flex items-center justify-center top-0 left-0 h-full w-full bg-black/5">
            <h2 className="uppercase text-3xl font-[font1] border-1 pt-2 px-4 border-white text-white rounded-full">
                vior le projets
            </h2>
        </div>
       </div>
</>


)
}

export default ProjectCard;
