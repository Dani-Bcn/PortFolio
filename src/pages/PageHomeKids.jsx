import React, { useState, useEffect, useRef, Children } from 'react';
import ImgFront from '/img/img-kids/homeKids-7.png'
import ImgBack from '/img/img-kids/homeKids-6.png'
import Img1 from '/img/img-kids/homeKids-2.png'
import Img2 from '/img/img-kids/homeKids-3.png'

import ImgPostman from '/img/img-kids/homeKids-4.png'

import { motion as m } from 'framer-motion'

const PageHomeKids = () => {
    const [isHover, setIsHover] = useState(true)
    const [isHoverBack, setIsHoverBack] = useState(true)
    const [mainImgFront, setMainImgFront] = useState(Img1)
    const [mainImgBack, setMaiunImgBack] = useState(Img2)
    const [imgFrontendOpen, setFrontendOpen] = useState(Img1)
    const [imgBackendOpen, setBackendOpen] = useState(Img2)
    const [backPage, setBackPage] = useState("rgb(200, 208, 226)")
    const [styleIsHoverImg, setStyleIsHoverImg] = useState('img-kids')
    const [styleIsHoverImgConatiner, setSatyleIsHoverContainer] = useState('container-img')
    const [styleIsHoverImgBack, setStyleIsHoverImgBack] = useState('img-kids')
    const [styleIsHoverImgConatinerBack, setSatyleIsHoverContainerBack] = useState('container-img')

    const handleClick = (() => {
        setIsHover(!isHover)
        console.log(isHover)
        if (isHover) {
            setMainImgFront(ImgFront)
            setStyleIsHoverImg("img-kids-open")
            setSatyleIsHoverContainer('container-img-open')
            setBackPage("rgb(46, 46, 46)")
        } else {
            setMainImgFront(Img1)
            setBackPage("rgb(200, 208, 226)")
            setStyleIsHoverImg("img-kids")
            setSatyleIsHoverContainer('container-img')
        }
    })
    const handleClickBack = (() => {
        setIsHoverBack(!isHoverBack)
        console.log(isHoverBack)
        if (isHoverBack) {
            setMaiunImgBack(ImgBack)
            setBackPage("rgb(46, 46, 46)")
            setStyleIsHoverImgBack("img-kids-open")
            setSatyleIsHoverContainerBack('container-img-open')

        } else {
            setMaiunImgBack(Img2)
            setBackPage("rgb(200, 208, 226)")
            setStyleIsHoverImgBack("img-kids")
            setSatyleIsHoverContainerBack('container-img')

        }
    })

    return (
        <main className='page-homeKids'
            style={{
                backgroundColor: backPage
            }}>
            <h2 >Homeworks for kids</h2>
            <p>This project is created in two separate parts: the frontend and the backend.</p>

            <section className='section-separate'>
                <m.span className={styleIsHoverImgConatiner}
                    onHoverStart={() => handleClick()} onHoverEnd={() => handleClick()}>
                    <m.div className={styleIsHoverImg}
                        style={{ backgroundImage: `url(${mainImgFront})` }}
                    >
                    </m.div>
                </m.span>

                <m.span className={styleIsHoverImgConatinerBack}
                    onHoverStart={() => handleClickBack()} onHoverEnd={() => handleClickBack()}>
                    <m.div className={styleIsHoverImgBack}
                        style={{ backgroundImage: `url(${mainImgBack})` }}
                    >
                    </m.div>
                </m.span>
            </section>
            <section className='section-postman'>
                <p>To request i used Postman</p>
                <div className='img-postman'
                    style={{ backgroundImage: `url(${ImgPostman})` }}
                ></div>
            </section>


        </main>
    );
}

export default PageHomeKids;
