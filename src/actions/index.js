
export const queryFrom = (from) =>{
  return {
    type:"FROM",
    from
  }
}
export const querySenderName = (sender_name) =>{
  return {
    type:"SUBJECT",
    sender_name
  }
}
export const queryEmailAddress = (email_address) =>{
  return {
    type:"TEXT",
    email_address
  }
}
export const queryBabyAge = (baby_age) =>{
  return {
    type:"TEXT",
    baby_age
  }
}
export const queryNeighborhood = (days) =>{
  return {
    type:"TEXT",
    days
  }
}
export const queryDays = (neighborhood) =>{
  return {
    type:"TEXT",
    neighborhood
  }
}
export const queryHowOften = (how_often) =>{
  return {
    type:"TEXT",
    how_often
  }
}
export const queryReferredBy = (referred_by) =>{
  return {
    type:"TEXT",
    referred_by
  }
}
export const queryNote = (note) =>{
  return {
    type:"TEXT",
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
