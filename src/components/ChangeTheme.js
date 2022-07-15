import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeTheme } from '../features/theme'

function ChangeTheme() {
    const [theme, setTheme] = useState('darkblue')
    const dispatch = useDispatch()

  return (
    <div>
        <p>Existing theme: {theme}</p>
        <input type='text' onChange={(event) => {
            setTheme(event.target.value)
            }}>
        </input>
        <button onClick={() => {
            dispatch(changeTheme(theme))
        }} >changeTheme</button>
    </div>
  )
}

export default ChangeTheme