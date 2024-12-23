import React from 'react'
import "../Ninesection/ninesection.css"
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";

const Ninesection = () => {
  return (
    <section className='nine'>
        <div className="containerr location">
        <div class="locationleft">
                        <div class="logo">
                            <a href="index.html">
                                <img src="https://preview.colorlib.com/theme/logistico/img/logo.png" alt="" />
                            </a>
                        </div>
                        <ul>
                            <li><a className='facebook' href="#"> <FaFacebook /></a></li>
                            <li><a className='google' href="#"><FaGooglePlus /></a></li>
                            <li><a className='twitter' href="#"><AiFillTwitterCircle /></a></li>
                            <li><a className='youtube' href="#"><TfiYoutube /></a></li>
                        </ul>
   </div>
     <div className="locationright">
                    <div class="single">
                        <h3><img src="https://preview.colorlib.com/theme/logistico/img/icon/address.svg" alt="" /> Location</h3>
                        <p>600/D, Kings road, Green lane
                            NewYork-2563</p>
                    </div>
                    <div class="single">
                        <h3><img src="https://preview.colorlib.com/theme/logistico/img/icon/support.svg" alt="" /> Location</h3>
                        <p>600/D, Kings road, Green lane
                            NewYork-2563</p>
                    </div>
    </div>
        </div>
    </section>
  )
}

export default Ninesection
