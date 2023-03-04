import React from 'react'
import './Contact.css'

const Contact = () => {

    function whatsapp(){
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var message = document.getElementById("message").value;
         
        var url = "https://wa.me/+918766539293?text="
        +"*Name :* "+name+"%0a"
        +"*Email :* "+email+"%0a"
        +"*Contact No :* "+phone+"%0a"
        +"*Message :* "+message;
         
        window.open(url,'_blank').focus();
        }

  return (
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div class="app-contact">CONTACT INFO : +62 81 314 928 595</div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" autoComplete='true' placeholder="NAME" id='name' />
            </div>
            <div class="app-form-group">
              <input class="app-form-control" autoComplete='on' placeholder="EMAIL" id='email'/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="CONTACT NO" id='phone'/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="MESSAGE" id='message'/>
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button" data-bs-dismiss="modal">CANCEL</button>
              <button class="app-form-button" onClick={whatsapp}>SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  )
}

export default Contact