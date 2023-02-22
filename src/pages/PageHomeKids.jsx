import React, { useState, useEffect, useRef } from 'react';
import ImgFront from '/img/img-kids/homeKids-7.png'
import ImgBack from '/img/img-kids/homeKids-6.png'
import ImgPostman from '/img/img-kids/homeKids-4.png'

import { motion as m } from 'framer-motion'

const PageHomeKids = () => {
    const refTarget = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    const [isHover, setIsHover] = useState(true)
    const [isHoverBack, setIsHoverBack] = useState(true)
    const [styleIsHoverImg, setStyleIsHoverImg] = useState('img-kids')  
    const [styleIsHoverImgConatiner, setSatyleIsHoverContainer] = useState('container-img')
    const [styleIsHoverImgBack, setStyleIsHoverImgBack] = useState('img-kids')  
    const [styleIsHoverImgConatinerBack, setSatyleIsHoverContainerBack] = useState('container-img')    

    const handleClick=(()=>{
         setIsHover(!isHover)
         console.log(isHover)
        if(isHover ){
            setStyleIsHoverImg("img-kids-open")
            setSatyleIsHoverContainer('container-img-open')
        }    else{
            setStyleIsHoverImg("img-kids")
            setSatyleIsHoverContainer('container-img')
        } 
    })
    const handleClickBack=(()=>{
        setIsHoverBack(!isHoverBack)
        console.log(isHoverBack)
       if(isHoverBack ){
           setStyleIsHoverImgBack("img-kids-open")
           setSatyleIsHoverContainerBack('container-img-open')
       }    else{
           setStyleIsHoverImgBack("img-kids")
           setSatyleIsHoverContainerBack('container-img')
       } 
   })

    return (
        <main className='page-homeKids'>
            <h2 >Homeworks for kids</h2>
            <div>
                <section className='section-separate'>
                    <m.span className={styleIsHoverImgConatiner}
                      onHoverStart={()=> handleClick()}   onHoverEnd={()=> handleClick()}>
                        <m.div className={styleIsHoverImg}                          
                        >
                        </m.div>
                    </m.span>       
                    <p>This project is created in two separate parts: the frontend and the backend.</p>    
                    <m.span className={styleIsHoverImgConatinerBack}
                      onHoverStart={()=> handleClickBack()}   onHoverEnd={()=> handleClickBack()}>
                        <m.div className={styleIsHoverImgBack}                          
                        >
                        </m.div>
                    </m.span>
                   
                </section>
              
            </div>            
        </main>
    );
}

export default PageHomeKids;
