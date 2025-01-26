import axios from 'axios'
import React, { useEffect, useState } from 'react'
const View = ()=>{
    var[data, setData]= useState([])
    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            console.log(res.data);
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    })
}
const Home = () => {
  return (
    <div>
        <View></View>
    </div>
  )
}

export default Home