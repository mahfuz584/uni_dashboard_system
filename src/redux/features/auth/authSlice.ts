import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
    userId : string,
    role : "admin" | "faculty" | "student",
    iat : number,
    exp : number
}
type TAuthUSer = {
    user : TUser | null,
    token : string | null
}
const initialState : TAuthUSer = {
    user : null,
    token : null
}

const authSlice = createSlice({
    name : "auth",
    initialState : initialState,
    reducers : {
        setUser : (state,action) => {
            const {user,token} = action.payload;
            state.user = user;
            state.token = token;
        },
        logout : (state) => {
                state.user = null;
                state.token = null;
        }   

    }
})
export const {setUser,logout} = authSlice.actions;
export default authSlice.reducer