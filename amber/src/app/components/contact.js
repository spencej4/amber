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
      case "sender_name":
      return this.props.dispatch(query.querySenderName(value))
      case "email_address":
      return this.props.dispatch(query.queryEmailAddress(value))
      case "baby_age":
      return this.props.dispatch(query.queryBabyAge(value))
      case "neighborhood":
      return this.props.dispatch(query.queryNeighborhood(value))
      case "days":
      return this.props.dispatch(query.queryDays(value))
      case "how_often":
      return this.props.dispatch(query.queryHowOften(value))
      case "referred_by":
      return this.props.dispatch(query.queryReferredBy(value))
      case "note":
      return this.props.dispatch(query.queryNote(value))
      default:
      return console.log("error")
    }
  }

  handleSend = () => {
    // basic form validation
    if(this.props.form.sender_name === "" || this.props.form.email_address === "" || this.props.form.baby_age === "" || this.props.form.neighborhood === "" || this.props.form.days === "" 
      || this.props.form.how_often === "" || this.props.form.referred_by === ''){
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
          sender_name: form.sender_name,
          email_address: form.email_address,
          baby_age: form.baby_age,
          neighborhood: form.neighborhood,
          days: form.days,
          how_often: form.how_often,
          referred_by: form.referred_by,
          note: form.note
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
                {/* <div className='form-title'>Let's Get in Touch!</div> */}
                <div className='title'>
                    <p className='pre-title-text'>Contact</p>
                    <p className='title-text'>Contact Amber</p>
                    <p className='title-sub-title'>
                    Amber offers free half hour consultations with parents to talk about their needs 
                    and if her support fits their needs. Please fill out the contact form below to get in touch. 
                    </p>
                </div>
                <div className="area"><input style={{border: error}} onChange={(e)=>this.handleChange(e, "sender_name")} value={form.sender_name} placeholder="Your name" type="email"/></div>
                <div className="area"><input style={{border: error}} onChange={(e)=>this.handleChange(e, "email_address")} value={form.email_address} placeholder="Email Address" type="text"/></div>
                <div className="area"><textarea style={{border: error}} onChange={(e)=>this.handleChange(e, "baby_age")} value={form.baby_age} placeholder="Baby Age or Ages" type="text"/></div>
                <div className="area"><input style={{border: error}} onChange={(e)=>this.handleChange(e, "neighborhood")} value={form.neighborhood} placeholder="Neighborhood you live in" type="text"/></div>
                <div className="area"><input style={{border: error}} onChange={(e)=>this.handleChange(e, "days")} value={form.days} placeholder="Days you need care" type="text"/></div>
                <div className="area"><input style={{border: error}} onChange={(e)=>this.handleChange(e, "how_often")} value={form.how_often} placeholder="How often" type="text"/></div>
                <div className="area"><input style={{border: error}} onChange={(e)=>this.handleChange(e, "referred_by")} value={form.referred_by} placeholder="Referred by" type="text"/></div>
                <div className="area"><input style={{border: error}} onChange={(e)=>this.handleChange(e, "note")} value={form.note} placeholder="Note" type="text"/></div>


                <button className="save" onClick={this.handleSend}> <i className="fa fa-paper-plane" aria-hidden="true"></i> SEND</button>
              </div>
            ) : (
              <div className='thank-you-message'>
                <div className='message-title'>Thanks!</div>
                <div className='message-container'>
                  <div className='message'>Your email has been sent to Amber.</div>
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
