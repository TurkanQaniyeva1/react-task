import React from 'react'
import "../Header/header.css"
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";


const Header = () => {
  return (
    <>
      <header>
        <div className="containerr header">
            <div className="logo">
                <img src="	https://preview.colorlib.com/theme/logistico/img/logo.png" alt="" />
            </div>
            <div className="contact">
                <a href=""><span><IoMdMail /></span>info@docmed.com</a>
                <a href=""><span><FaPhone /></span>1601-609 6780</a>
                <a className='free' href="">Get Free Quote</a>
            </div>
            <MdOutlineMenu className='bar'/>
        </div>
            <div className="menu">
            <nav>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Service</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Pages <IoIosArrowDown /></a>
                    </li>
                    <li>
                        <a href="">Blog <IoIosArrowDown /></a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>
            <div className="search">
            <CiSearch />
            </div>

        </div>
      </header>
    </>
  )
}

export default Header
