"use client"
import "../../styles/project.scss"
import Link from 'next/link'
import Image from 'next/image'
import ProgressBar from '@/components/ProgressBar'
import React, {useState} from 'react'



export default function Project() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="projectContainer">
        <div className="background">
            <svg id="visual" viewBox="0 0 1350 900" width="1350" height="900" version="1.1"><g fill="#E28B31"><circle r="221" cx="669" cy="365"/><circle r="97" cx="73" cy="122"/><circle r="202" cx="1328" cy="549"/><circle r="152" cx="242" cy="729"/><circle r="163" cx="997" cy="29"/></g></svg>
        </div>
        <div className="projectWrapper">
            <div className="left">
                {/* <iframe  src="//www.youtube.com/embed/S8NPyxWZovw?si=oba3TX51ydKMTa7D?autoplay=1" frameborder="0" allowfullscreen="true"></iframe> */}
                <Image src="/img/binhNgoDaiChienCrowd.jpg" width={500} height={500} alt=""/>
                <div className="overlayBg" >
                    <div className="playBtn" onClick={()=>setIsOpen(true)}>
                        <svg version="1.1" id="YouTube_Icon" x="0px" y="0px" viewBox="0 0 1024 721" enable-background="new 0 0 1024 721" xmlSpace="preserve">
                        <path id="Triangle" fill="#FFFFFF" d="M407,493l276-143L407,206V493z"/>
                        <path id="The_Sharpness" opacity="0.12" fillRule="evenodd" clipRule="evenodd" d="M407,206l242,161.6l34-17.6L407,206z"/>
                        <g id="Lozenge">
                            <g>
                            <path fill="#E28B31" d="M1013,156.3c0,0-10-70.4-40.6-101.4C933.6,14.2,890,14,870.1,11.6C727.1,1.3,512.7,1.3,512.7,1.3h-0.4    c0,0-214.4,0-357.4,10.3C135,14,91.4,14.2,52.6,54.9C22,85.9,12,156.3,12,156.3S1.8,238.9,1.8,321.6v77.5    C1.8,481.8,12,564.4,12,564.4s10,70.4,40.6,101.4c38.9,40.7,89.9,39.4,112.6,43.7c81.7,7.8,347.3,10.3,347.3,10.3    s214.6-0.3,357.6-10.7c20-2.4,63.5-2.6,102.3-43.3c30.6-31,40.6-101.4,40.6-101.4s10.2-82.7,10.2-165.3v-77.5    C1023.2,238.9,1013,156.3,1013,156.3z M407,493l0-287l276,144L407,493z"/>
                            </g>
                        </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="title">
                    <div className="collectionName">
                        <span>In progress</span>
                    </div>
                    <h2><span>Binh Ngo Dai Chien</span></h2>
                    <p>901,200,000 VND has been donated</p>
                    <ProgressBar percent="85"/>
                    <div className="infoContainer">
                        <div className="date">20 days remain</div>
                        <div className="progress">85% success</div>
                    </div>
                    <div className="buttonsContainer">
                        <Link href="/collections">
                            <button className="btn1">Pay NFT Package</button>
                        </Link>
                        <button className="btn2">Pre-Staking NFTs</button>
                    </div>
                </div>
            </div>
            {isOpen && 
            <div className="modal" onClick={()=>setIsOpen(false)}>
                    <iframe  src="//www.youtube.com/embed/S8NPyxWZovw?si=oba3TX51ydKMTa7D?autoplay=1" frameborder="0" allowfullscreen="true"></iframe>
            </div>
            }
        </div>
        
    </section>
  )
}