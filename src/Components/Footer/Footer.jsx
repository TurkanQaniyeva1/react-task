import React from 'react'
import "../Footer/footer.css"
import { CiHeart } from "react-icons/ci";


const Footer = () => {
  return (
    <footer>
      <div className="containerr foot">
                        <div className="widget">
                            <h3 className="title">
                                Services
                            </h3>
                            <ul>
                                <li><a href="#">Air Transportation</a></li>
                                <li><a href="#">Ocean Freight</a></li>
                                <li><a href="#">Ocean Cargo</a></li>
                                <li><a href="#">Logistics</a></li>
                                <li><a href="#">Warehouse Moving</a></li>
                            </ul>

                        </div>
                        <div className="widget">
                            <h3 className="title">
                                Company
                            </h3>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#"> Testimonials</a></li>
                                <li><a href="#"> Why Us?</a></li>
                            </ul>
                        </div>
                        <div className="widget">
                            <h3 className="title">
                                Industries
                            </h3>
                            <ul>
                                <li><a href="#">Chemicals</a></li>
                                <li><a href="#">Automotive</a></li>
                                <li><a href="#"> Consumer Goods</a></li>
                                <li><a href="#">Life Science</a></li>
                                <li><a href="#">Foreign Trade</a></li>
                            </ul>
                        </div>
                        <div className="widget">
                            <h3 className="title">
                                Subscribe
                            </h3>
                            <form action="#" className="newsletter">
                                <input type="text" placeholder='Enter your email' />
                                <button type="submit">Subscribe</button>
                            </form>
                            <p>Esteem spirit temper too say adieus who direct esteem esteems luckily.</p>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright ©2024 All rights reserved | This template is made with <CiHeart className='heart'/> by <a href="">Colorlib</a></p>
                </div>
    </footer>
  )
}

export default Footer
