
const stateInit = {
  from:"",
  subject: "",
  text:"",
}
const form = (state = stateInit, action) => {
  switch (action.type) {
    case 'FROM':
      return {
        ...state,
        from:action.sender_name
      }
      case 'SUBJECT':
      return {
        ...state,
        subject:action.email_address
      }
      case 'BABY_AGE':
      return {
        ...state,
        text:action.baby_age
      }
      case 'DAYS':
      return {
        ...state,
        text:action.days
      }
      case 'NEIGHBORHOOD':
      return {
        ...state,
        text:action.neighborhood
      }
      case 'HOW_OFTEN':
      return {
        ...state,
        text:action.how_often
      }
      case 'REFERRED_BY':
      return {
        ...state,
        text:action.referred_by
      }
      case 'NOTE':
      return {
        ...state,
        text:action.note
      }
      case 'RESET':
      return{
        ...state,
        from:"",
        subject: "",
        text:"",
      }
      default:
      return state
  }

}

export default form
