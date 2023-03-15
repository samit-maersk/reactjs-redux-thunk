import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const getUsers = createAsyncThunk("users/getUsers", async () => {
    return fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());
});

export const userSlice = createSlice(({
  name: 'user',
  initialState : {
    users: [],
    loading: false
  },
  extraReducers: {
    [getUsers.pending]: (state,action) => {
        state.loading = true;
    },
    [getUsers.fulfilled]: (state,action) => {
        state.loading = false;
        state.users = action.payload
    },
    [getUsers.rejected]: (state,action) => {
        state.loading = false;
    }
  },
  reducers: {
    sort: (state) => {
        console.log(state.users)
    }
  },
}))

export const { sort } = userSlice.actions;
export default userSlice.reducer;