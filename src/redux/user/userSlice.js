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
    ascending: (state, action) => {
      state.users = [...action.payload].sort((a,b) => a.name.localeCompare(b.name))
    },
    decending: (state, action) => {
      state.users = [...action.payload].sort((a,b) => b.name.localeCompare(a.name))
    }
  },
}))

export const { ascending, decending} = userSlice.actions;
export default userSlice.reducer;