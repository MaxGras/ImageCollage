"use client"
import classNames from 'classnames';
import React, { useState } from 'react';

export default function ImageCollage() {

  const imageDataArray = [{
    imgLink:"https://img.freepik.com/free-photo/young-african-girl_23-2148852699.jpg",
    position: "top-[75px] right-[30px]",
    hoverPosition: "group-hover:translate-x-[40px]"
  },
  {
    imgLink:"https://img.freepik.com/free-photo/young-african-girl_23-2148852699.jpg",
    position: "top-[25px] left-[30px]",
    hoverPosition: "group-hover:translate-x-[40px]"
  },
  {
    imgLink:"https://img.freepik.com/free-photo/young-african-girl_23-2148852699.jpg",
    position: "top-[200px] left-[-90px]",
    hoverPosition: "group-hover:translate-y-[40px]"
  },
  {
    imgLink:"https://img.freepik.com/free-photo/young-african-girl_23-2148852699.jpg",
    position: "bottom-[75px] right-[30px]",
    hoverPosition: "group-hover:translate-x-[-40px]"
  },
  {
    imgLink:"https://img.freepik.com/free-photo/young-african-girl_23-2148852699.jpg",
    position: "top-[250px] left-[250px]",
    hoverPosition: "",}

]
  
  
    return (
    <div
      className={`w-[600px] h-[600px] relative border-2 group`}
  
    >
    {imageDataArray.map((item,index)=>(
          <img key={index}
          src={item.imgLink}
          className={classNames("w-[130px] h-[200px] object-cover rounded-xl absolute",   
            ` duration-[600ms] transition-all ease-in-out group-hover:scale-[1.2]`,item.position,item.hoverPosition
            )}
          alt="1 color"
        />
    ))}
    </div>
  );
}
