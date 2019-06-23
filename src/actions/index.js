export const querySenderName = (sender_name) =>{
  return {
    type:"FROM",
    sender_name
  }
}
export const queryEmailAddress = (email_address) =>{
  return {
    type:"SUBJECT",
    email_address
  }
}
export const queryBabyAge = (baby_age) =>{
  return {
    type:"BABY_AGE",
    baby_age
  }
}
export const queryNeighborhood = (neighborhood) =>{
  return {
    type:"NEIGHBORHOOD",
    neighborhood
  }
}
export const queryDays = (days) =>{
  return {
    type:"DAYS",
    days
  }
}
export const queryHowOften = (how_often) =>{
  return {
    type:"HOW_OFTEN",
    how_often
  }
}
export const queryReferredBy = (referred_by) =>{
  return {
    type:"REFERRED_BY",
    referred_by
  }
}
export const queryNote = (note) =>{
  return {
    type:"NOTE",
    note
  }
}
export const queryReset = () =>{
  return{
    type:"RESET"
  }
}
export const nav = (nav) =>{
  return{
    type:"NAV",
    nav
  }
}
export const error = (error) => {
  return{
    type:"ERROR",
    error
  }
}
