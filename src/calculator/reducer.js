const reducer = (state, {type, payload}) => {

  const regEx = /[+-/.*]/;

  switch(type) {

    case "COMMON" : {
      const current = state + payload;
      const regexMatch1 = regEx.test(current[current.length - 1]);
      const regexMatch2 = regEx.test(current[current.length - 2]);

      if (regexMatch1 && regexMatch2) {
        return current.slice(0, current.length - 2) + payload;
      } else if((current[0] === '0') && (current[1] !== '.')) {
        return state;
      } else {
        return current;
      }
    }

    case "CLEAR" : {
      const str = state.toString();
      return str.slice(0,str.length-1);
    }
    
    case "EVAL" : {
      if(state) {
        if(regEx.test(state[state.length-1]) || state[0] === '/' || state[0] === '*') {
          console.log("invalid expression : ", Math.random().toFixed(3));
          return state = '';
        } else {
          const output = eval(state);
          const str = output.toString();
          if (!str.includes('.')) {
            return parseInt(output.toFixed(0));
          } else {
            return parseFloat(output.toFixed(6));
          }
        }
      } 
      break;
    }

    default : console.log("calc error");;
  }

  return state;

}

export default reducer;