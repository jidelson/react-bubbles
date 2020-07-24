import React, { useState, useEffect } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const getData = e => {
    axiosWithAuth()
    .get("/api/colors")
    .then(res => {
        console.log(res)
     setColorList(
       res.data
     )
    })
    .catch(err => {
        console.log(err)
    })
}
useEffect(() => {
    getData()
}, [])

const updateColors = updatedColor => {
  const updatedColors = colorList.map(colors => {
    if(colors.id === updatedColor.id){
      return updatedColor;
    }
    return colors;
  });
  setColorList(updatedColors);
}

  return (
    <>
      <ColorList colors={colorList} setColorList={setColorList} updateColors={updateColors} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
