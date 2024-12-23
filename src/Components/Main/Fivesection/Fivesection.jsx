import React from 'react'
import "../Fivesection/fivesection.css"

const Fivesection = () => {
  return (
    <section>
        <div className="containerr about">
        <div className="left">
        <img src="	https://preview.colorlib.com/theme/logistico/img/about/about.png" alt="" />
      </div>
      <div className="right">
        <h3>Why Choose Us?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
        </p>
        <ul>
        <li><img src="https://preview.colorlib.com/theme/logistico/img/svg_icon/check.svg" alt="" /> Apartments frequently or motionless. </li>
        <li><img src="https://preview.colorlib.com/theme/logistico/img/svg_icon/check.svg" alt="" /> Duis aute irure dolor in reprehenderit in voluptate. </li>
        <li><img src="https://preview.colorlib.com/theme/logistico/img/svg_icon/check.svg" alt="" /> Voluptatem quia voluptas sit aspernatur.</li>
        </ul>
        <div class="about_btn">
        <a class="btn" href="">About Us</a>
       </div>
      </div>
        </div>
    </section>
  )
}

export default Fivesection
