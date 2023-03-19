import React, { useReducer } from 'react';
import Button from './Button';
import reducer from './reducer';

const Calculator = () => {
  const [stateValue, dispatch] = useReducer(reducer, '');

  const operators = ["/","*","+","-","C"];
  const numbers = ["1","2","3","4","5","6","7","8","9",".","0","="];

  const addValue = (e) => {
    if(e.target.value === "=" ) {
      dispatch({type: "EVAL"});
      return;
    } else if(e.target.value === "C" ) {
      dispatch({type: "CLEAR"});
      return;
    } else {
      dispatch({type: "COMMON", payload: e.target.value});
    }
  }

  return (
    <>
      <section className="calculator">
        <div className="wrapper">
          <h2 className="section-title">react calculator with react hooks</h2>
          <div className="calc">
            <form action="#FIXME">
              <div className="input-box">
                <input type="text" value={stateValue} placeholder="0" readOnly />
                <input type="text" value={stateValue} readOnly />
              </div>
              <div className="operator-box">
                {
                  operators.map((operator, idx) => {
                    return <Button key={idx} type="button" value={operator} addValue={addValue} />
                  })
                }
              </div>
              <div className="number-box">
                {
                  numbers.map((number, idx) => {
                    return <Button key={idx} type="button" value={number} addValue={addValue} />
                  })
                }
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Calculator;