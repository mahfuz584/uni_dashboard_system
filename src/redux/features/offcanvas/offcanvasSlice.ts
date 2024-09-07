import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open : false,
}
const offcanvasSlice = createSlice({
    name : "offcanvas",
    initialState : initialState,
    reducers : {
        openOffcanvas : (state) => {
            state.open = true;
        },
        closeOffcanvas : (state) => {
            state.open = false;
        }
    }
})

export const {openOffcanvas,closeOffcanvas} = offcanvasSlice.actions;
export default offcanvasSlice.reducer