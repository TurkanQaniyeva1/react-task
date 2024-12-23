import React from 'react'
import "../Threesection/threesection.css";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";


const Threesection = () => {
  return (
    <section className='threesection'>
        <div className="text">
            <h3> Services We Offer</h3>
        </div>
      <div class="containerr boxs">
        <div className="btns">
        <FaCircleChevronLeft />
        </div>
      <div className="box">
  <img src="https://preview.colorlib.com/theme/logistico/img/service/1.png" alt="Ocean Freight" />
  <h3><a href="#">Ocean Freight</a></h3>
  <p>Esteem spirit temper too say adieus who direct esteem.</p>
</div>
<div className="box">
  <img src="https://preview.colorlib.com/theme/logistico/img/service/2.png" alt="Ocean Freight" />
  <h3><a href="#">Ocean Freight</a></h3>
  <p>Esteem spirit temper too say adieus who direct esteem.</p>
</div>
<div className="box">
  <img src="https://preview.colorlib.com/theme/logistico/img/service/3.png" alt="Ocean Freight" />
  <h3><a href="#">Ocean Freight</a></h3>
  <p>Esteem spirit temper too say adieus who direct esteem.</p>
</div>
<div className="btns">
<FaCircleChevronRight />
</div>
           </div>
    </section>
  )
}

export default Threesection
