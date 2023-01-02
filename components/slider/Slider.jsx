import React from 'react'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import MovieCard from '../MovieCard'


const ImageSlider = (props) => {

    // console.log(images)

    const [width,setWidth] = useState(0)
    const sliderin = useRef()

    useEffect(()=>{
        setWidth(sliderin.current.scrollWidth - sliderin.current.offsetWidth)
    },[])
    
  return (
    <motion.div className='slider' ref={sliderin}>
        <motion.div className='inner-slider'  drag = "x" dragConstraints = {{right:0, left:-width}}>
            {props.movies.map((movie, index)=>{
                return(
                    <motion.div className='img-item' key={index}>
                        <MovieCard movie={movie} key={index} />
                    </motion.div>
                )
            })}
        </motion.div>
    </motion.div>
  )
}

export default ImageSlider