import React from 'react'
import "../Eightsection/eightsection.css"

const Eightsection = () => {
  return (
    <section>
       <div className="containerr info">
        <div className="left">
                <h3>Get free Estimate</h3>
                <p>Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing.</p>
                <a href="#" class="btn">+10 672 457 356</a>
        </div>
        <div className="right">
            <form action="">
  <div className="input">
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='Email' />
  </div>
     <div className="select">
     <select name="cars" id="cars">
                  <option value="volvo">Product type</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
            </select>
            <select name="cars" id="cars">
                  <option value="Product size">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
            </select>
     </div>
     <div className="select">
     <select name="cars" id="cars">
                  <option value="volvo">City of departure</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
            </select>
            <select name="cars" id="cars">
                  <option value="volvo">Delivery city</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
            </select>
     </div>
            <textarea name="" placeholder='Message' id=""></textarea>
            <button class="btn" type="submit">Send Estimate</button>
            </form>
        </div>
      </div> 
    </section>
  )
}

export default Eightsection
