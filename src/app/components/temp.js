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