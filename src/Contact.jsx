import React from 'react'
import './Contact.css'

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  }

  onFormSubmit = ev => {
    ev.preventDefault()
    console.log(this.state)
    // Send e-mail with form details
  }

  setContactForm = ev => {
    this.setState({
      [ev.target.dataset.type]: ev.target.value
    })
  }

  render () {
    return (
      <div className="contact-container">
        <div className="contact-header">CONTACT</div>
        <div className="contact-info">
          e-mail me at sueroh@gmail.com <br />
          -- <br />
          or <br />
          <div className="contact-form-container">
            <form onSubmit={this.onFormSubmit}>
              <input className="contact-name"
                type="text"  
                placeholder="Name"
                onChange={this.setContactForm}
                data-type="name"
              />
              <input className="contact-email"
                type="text"
                placeholder="E-mail"
                onChange={this.setContactForm}
                data-type="email"
              />
              <input className="contact-phone"
                type="text"
                placeholder="Phone number"
                onChange={this.setContactForm}
                data-type="phone"
              />
              <input className="contact-message"
                type="text"
                placeholder="Message"
                onChange={this.setContactForm}
                data-type="message"
              />
              <button type="submit" onClick={this.onFormSubmit} />
            </form>
          </div>
        </div>
      </div>
    )
  }
}  
