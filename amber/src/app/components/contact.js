import React from 'react';
import {connect} from 'react-redux'
import * as query from '../../actions/index'
import './contact.css';

class Contact extends React.Component{
  constructor(){
    super();
    this.state = {
      displayForm: true
    }
  }

  componentDidMount(){
    this.props.dispatch(query.queryReset())
  }

  handleChange =(e,type)=>{
    let value = e.target.value
    this.props.dispatch(query.error(false))
    switch(type){
      case "from":
      return this.props.dispatch(query.queryFrom(value))
      case "subject":
      return this.props.dispatch(query.querySubject(value))
      case "text":
      return this.props.dispatch(query.queryText(value))
      default:
      return console.log("error")
    }
  }

  handleSend = () => {
    // basic form validation
    if(this.props.form.from === "" || this.props.form.subject === "" || this.props.form.text === ""){
      this.props.dispatch(query.error(true))
    }else{
      let form = this.props.form
      console.log("sending");
      
      fetch('/api/mail',{
        method: 'POST',
        mode: "cors",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: form.from,
          subject: form.subject,
          text: form.text
        }) 
      }).then(function(){
        this.setState({ displayForm: false });
      }.bind(this));
      }
  }

  

  render(){
    let form = this.props.form;
    let error = this.props.state.error? '3px solid rgb(159, 0, 43)': "none"
    return(
      <div id="contact" className=" Contact">
        <div className="con-body">
            {this.state.displayForm ? (
              <div className="form">
                <div className='form-title'>Let's Get in Touch!</div>
                <div className="area"><input style={{border: error}} onChange={(e)=>this.handleChange(e, "from")} value={form.from} placeholder="email address: " type="email"/></div>
                <div className="area"><input style={{border: error}} onChange={(e)=>this.handleChange(e, "subject")} value={form.subject} placeholder="subject: " type="text"/></div>
                <div className="area"><textarea style={{border: error}} onChange={(e)=>this.handleChange(e, "text")} value={form.text} placeholder="message:" type="text"/></div>
                <button className="save" onClick={this.handleSend}> <i className="fa fa-paper-plane" aria-hidden="true"></i> SEND</button>
              </div>
            ) : (
              <div className='thank-you-message'>
                <div className='message-title'>Thanks!</div>
                <div className='message-container'>
                  <div className='message'>Your email has been sent.</div>
                </div>
              </div>
            )}
        </div>
      </div>
    )
  }
}

const store = (store) =>{
  return{
    form:store.form,
    state: store.State
  }
}
Contact = connect(store)(Contact)

export default Contact
