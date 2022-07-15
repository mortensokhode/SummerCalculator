import './varDefinitions.css'
import './App.css'
import ChangeTheme from './components/ChangeTheme'

import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import { IROUNDFACTOR, EMPTYSTRING } from './globalConstants'

import { setDisplay, pushToRecord, popRecord, clearGeneral, prepareResult } from "./features/calculatorSlice"

const App = () => {
  const dispatch = useDispatch()
  
  // benyttet useSelector for å spesifisere hvilke deler av state-objektet jeg ville ha tak i
  const display     = useSelector(state => state.calculator.value.display)
  const displayLine = useSelector(state => state.calculator.value.displayLine)
  const record      = useSelector(state => state.calculator.value.record)
  
  // useState for å definere konstant med 'setter'
  //const [showResult, setShowResult] = useState(false)

// Button clicks
  const setButtonHandler = (event) => {
    dispatch(setDisplay(event.target.value))
    dispatch(pushToRecord(event.target.value))

  }

// clear out the calculator
  const clearHandler = () => {
    dispatch(clearGeneral())
  }

  // calculate and show the result
  const calculate = () => {
    const tempResult = Math.round((eval(displayLine.replace(/[^-()\d/*+.]/g, '')))*IROUNDFACTOR)/IROUNDFACTOR
    dispatch(prepareResult(tempResult))
  }

  // some regrets?  remove entries from right to left, one at a time
  const backSpace = () => {
    dispatch(popRecord())
  }

  return (
      <div className='mainCalc'>
        <div className='displayBox'>
          <p id='record' className='calcDisplay'> {display} </p>
          <p id='calcDisplay' className='calcDisplay'> {displayLine} </p>
        </div>

        <div className='btnBox'>
          <button value='7' onClick={setButtonHandler} className='calcButton' id='seven'>    7  </button>
          <button value='8' onClick={setButtonHandler} className='calcButton' id='eight'>    8  </button>
          <button value='9' onClick={setButtonHandler} className='calcButton' id='nine'>     9  </button>
          <button onClick={backSpace} className='calcButton' id='back'> DEL </button>
          <button value='4' onClick={setButtonHandler} className='calcButton' id='four'>     4  </button>
          <button value='5' onClick={setButtonHandler} className='calcButton' id='five'>     5  </button>
          <button value='6' onClick={setButtonHandler} className='calcButton' id='six'>      6  </button>
          <button value='+' onClick={setButtonHandler} className='calcButton' id='add'>      +  </button>
          <button value='1' onClick={setButtonHandler} className='calcButton' id='one'>      1  </button>
          <button value='2' onClick={setButtonHandler} className='calcButton' id='two'>      2  </button>
          <button value='3' onClick={setButtonHandler} className='calcButton' id='three'>    3  </button>
          <button value='-' onClick={setButtonHandler} className='calcButton' id='subtract'> -  </button>
          <button value='.' onClick={setButtonHandler} className='calcButton' id='decimal'>  .  </button>
          <button value='0' onClick={setButtonHandler} className='calcButton' id='zero'>     0  </button>
          <button value='/' onClick={setButtonHandler} className='calcButton' id='divide'>   /  </button>
          <button value='*' onClick={setButtonHandler} className='calcButton' id='multiply'> *  </button>
          <button onClick={clearHandler} className='calcButton' id='generalClear'> RESET </button>
          <button onClick={calculate} className='calcButton' id='calculate'> = </button>
        </div>
        <ChangeTheme />
      </div>
  )
}

export default App
