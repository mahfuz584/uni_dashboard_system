import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userPayload: {},
};
const userManagementSlice = createSlice({
  name: "userManagement",
  initialState: initialState,
  reducers: {
    fetchUsers: (state, action) => {
      state.userPayload = action.payload;
    },
  },
});

export const { fetchUsers } = userManagementSlice.actions;
export default userManagementSlice.reducer;
