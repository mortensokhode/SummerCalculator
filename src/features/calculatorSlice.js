import { createSlice } from "@reduxjs/toolkit";
import { EMPTYSTRING, INITIALSTATE } from "../globalConstants";

export const calculatorSlice = createSlice({
    name: "calculator",

    initialState: {
        value: {cleanOut: false,
                display: EMPTYSTRING,
                displayLine: EMPTYSTRING,
                record: []},
        },

    reducers: {
            setDisplay: (state, action) => {
                if (state.value.cleanOut) {
                    state.value.display = EMPTYSTRING
                    state.value.displayLine = EMPTYSTRING
                    state.value.record = []
                    state.value.cleanOut = !state.value.cleanOut
                }
                state = {...state}
                state.value.display = action.payload
                state.value.displayLine += action.payload
                conlog(state, action)
            },

            pushToRecord: (state, action) => {
                state.value.record = [...state.value.record, action.payload]
                conlog(state, action)
            },

            popRecord: (state) => {
                state = {...state}
                state.value.display = state.value.record.pop()
                state.value.displayLine = state.value.record.join('')
                conlog(state, {type: 'calculator/popRecord', payload: null})
            },
            
            clearGeneral: (state) => {
                state.value =  INITIALSTATE
                conlog(state, {type: 'calculator/clearGeneral', payload: null})
            },

            prepareResult: (state, action) => {
                state = {...state}
                state.value.display = state.value.displayLine
                state.value.displayLine = action.payload
                state.value.cleanOut = true
                conlog(state, action)
            },
    }
})
console.log('calculatorSlice intern:',calculatorSlice)

const { actions, reducer } = calculatorSlice
export const { setDisplay, pushToRecord, popRecord, clearGeneral, prepareResult } = actions;
export default reducer;


const conlog = (state, action) => {
    console.log('--------- ' + action.type + ' ---------')
    console.log('payload:', action.payload)
    console.log('display:', state.value.display)
    console.log('displayLine:', state.value.displayLine)
    console.log('cleanOut:', state.value.cleanOut)
    console.log('record:')
    state.value.record.forEach((value, recIndex) => {
        console.log(recIndex + ". " + value); 
       });
    console.log('-'.repeat(20 + action.type.length))
    }

