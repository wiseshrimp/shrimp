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
          <div className="email">sueroh@gmail.com <br /></div>
          <div className="divider">--</div><br />
          <a href="https://github.com/wiseshrimp" className="link">github</a><br />
          <a href="https://www.linkedin.com/in/sue-roh-35b38794/" className="link">linkedin</a><br />
          <a href="https://www.upwork.com/freelancers/~01aa6b4ddc9a37ac91" className="link">upwork</a><br />
        </div>
      </div>
    )
  }
}  
