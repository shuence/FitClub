import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    plan: '',
    message: ''
  });

  const validateForm = () => {
    let errorMessages = [];

    if (!formData.name.trim()) errorMessages.push('Name is required.');
    if (!formData.email.trim()) {
      errorMessages.push('Email is required.');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errorMessages.push('Email is invalid.');
    }
    if (!formData.phone.trim()) {
      errorMessages.push('Phone number is required.');
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errorMessages.push('Phone number must be 10 digits.');
    }
    if (!formData.age.trim()) {
      errorMessages.push('Age is required.');
    } else if (isNaN(formData.age) || formData.age <= 0) {
      errorMessages.push('Age must be a positive number.');
    }
    if (!formData.plan.trim()) errorMessages.push('Plan is required.');
    if (!formData.message.trim()) errorMessages.push('Message is required.');

    if (errorMessages.length > 0) {
      alert(errorMessages.join('\n')); // Display all errors in a single alert dialog
      return false;
    }

    return true;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const whatsapp = () => {
    if (!validateForm()) return;

    const { name, email, phone, age, plan, message } = formData;

    const url =
      `https://wa.me/+918766539293?text=` +
      `*Name :* ${name}%0a` +
      `*Email :* ${email}%0a` +
      `*Contact No :* ${phone}%0a` +
      `*Age :* ${age}%0a` +
      `*Plan :* ${plan}%0a` +
      `*Message :* ${message}`;

    window.open(url, '_blank').focus();
  };

  return (
    <div className="container" id="contact">
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
                <input
                  className="app-form-control"
                  autoComplete="true"
                  placeholder="NAME"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="app-form-group">
                <input
                  className="app-form-control"
                  autoComplete="on"
                  placeholder="EMAIL"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="app-form-group">
                <input
                  className="app-form-control"
                  placeholder="CONTACT NO"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="app-form-group">
                <input
                  className="app-form-control"
                  placeholder="Age"
                  id="age"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </div>
              <div className="app-form-group">
                <input
                  className="app-form-control"
                  placeholder="Plan"
                  id="plan"
                  value={formData.plan}
                  onChange={handleInputChange}
                />
              </div>
              <div className="app-form-group message">
                <input
                  className="app-form-control"
                  placeholder="MESSAGE"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              <div className="app-form-group buttons">
                <button className="app-form-button" data-bs-dismiss="modal">
                  CANCEL
                </button>
                <button className="app-form-button" onClick={whatsapp}>
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
