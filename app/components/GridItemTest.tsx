"use client";

import React, { useEffect, useState } from "react";
import GridItem from "./GridItem";
const { NekosAPI } = require("nekosapi");

const nekos = new NekosAPI();

export default function GridItemTest() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`https://api.nekosapi.com/v2/images?page[limit]=25&page[offset]=0&filter[ageRating.iexact]=sfw`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        
        setImages(res.data)
      });
  }, []);

  return (
    <>
    
        {images && images.map((image, index) => {
            return <GridItem key={index} src={image.attributes.file} />
        })}
       
    </>
  );
}
