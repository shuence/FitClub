import React from 'react'
import './Contact.css'

const Contact = () => {

    function whatsapp(){
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var age = document.getElementById("age").value;
        var plan = document.getElementById("plan").value;
        var message = document.getElementById("message").value;
         
        var url = "https://wa.me/+918766539293?text="
        +"*Name :* "+name+"%0a"
        +"*Email :* "+email+"%0a"
        +"*Contact No :* "+phone+"%0a"
        +"*Age :* "+age+"%0a"
        +"*Plan :* "+plan+"%0a"
        +"*Message :* "+message;
         
        window.open(url,'_blank').focus();
        }

  return (
  <div className="container" id='contact'>
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close"></div>
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" autoComplete='true' placeholder="NAME" id='name' />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" autoComplete='on' placeholder="EMAIL" id='email'/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="CONTACT NO" id='phone'/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="Age" id='age'/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="Plan" id='plan'/>
            </div>
            <div classNameName="app-form-group message">
              <input className="app-form-control" placeholder="MESSAGE" id='message'/>
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button" data-bs-dismiss="modal">CANCEL</button>
              <button className="app-form-button" onClick={whatsapp}>SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  )
}

export default Contact