import { createSlice } from "@reduxjs/toolkit";
import { EMPTYSTRING } from "../globalConstants";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: {themeColor: EMPTYSTRING,
                previous: EMPTYSTRING},
        },
        reducers: {
            changeTheme: (state, action) => {
                state.value = action.payload
            },
        },
  })


export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer
