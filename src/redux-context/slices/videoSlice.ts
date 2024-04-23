import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface videoState {
    value: string
  }
  
  const localStoredTheme = localStorage.getItem("video")

  const initialState: videoState =localStoredTheme?JSON.parse(localStoredTheme) :{ value :""}
  console.log(initialState);
  
  
  export const videoSlice = createSlice({
    name: 'changeVideo',
    initialState,
    reducers: {
      changeVideo: (state, action) => {
        state.value = action.payload;
        localStorage.setItem("video", JSON.stringify(state));
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { changeVideo } = videoSlice.actions
  
  export default videoSlice.reducer