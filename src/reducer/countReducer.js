export const countReducer = (value, action) => {
    switch(action.type){
      case "INCREMENT" : {return value += 1}
      case "DECREMENT" : {return value -=1}
      case "INCREMENT CUSTOM" : {return value += action.diff}
      case "DECREMENT CUSTOM" : {return value -= action.diff}
      default : {return value}
    }
  }