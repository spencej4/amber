
const stateInit = {
  sender_name: "",
  email_address: "",
  baby_age: "",
  days: "",
  neighborhood: "",
  how_often: "", 
  referred_by: "",
  note: "",
}
const form = (state = stateInit, action) => {
  switch (action.type) {
    case 'FROM':
    // console.log(action.sender_name);
      return {
        ...state,
        sender_name: action.sender_name
      }
      case 'SUBJECT':
      return {
        ...state,
        email_address: action.email_address
      }
      case 'BABY_AGE':
      return {
        ...state,
        baby_age: action.baby_age
      }
      case 'DAYS':
      return {
        ...state,
        days: action.days
      }
      case 'NEIGHBORHOOD':
      return {
        ...state,
        neighborhood: action.neighborhood
      }
      case 'HOW_OFTEN':
      return {
        ...state,
        how_often: action.how_often
      }
      case 'REFERRED_BY':
      return {
        ...state,
        referred_by: action.referred_by
      }
      case 'NOTE':
      return {
        ...state,
        note: action.note
      }
      case 'RESET':
      return{
        ...state,
        sender_name: "",
        email_address: "",
        baby_age: "",
        days: "",
        neighborhood: "",
        how_often: "", 
        referred_by: "",
        note: "",
      }
      default:
      return state
  }

}

export default form
