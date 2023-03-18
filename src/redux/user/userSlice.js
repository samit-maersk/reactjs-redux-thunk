import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const getUsers = createAsyncThunk("users/getUsers", async () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json());
});

export const userSlice = createSlice(({
  name: 'user',
  initialState : {
    users: [],
    favUser: [],
    loading: false
  },
  extraReducers:(builder)=> {
    builder.addCase(getUsers.pending, (state,action) => {
        state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state,action) => {
        state.loading = false;
        state.users = action.payload
    });
    builder.addCase(getUsers.rejected, (state,action) => {
        state.loading = false;
    });
  },
  reducers: {
    ascending: (state, action) => {
      state.users = [...action.payload].sort((a,b) => a.name.localeCompare(b.name))
    },
    decending: (state, action) => {
      state.users = [...action.payload].sort((a,b) => b.name.localeCompare(a.name))
    },
    setAsFav: (state, action) => {
      state.favUser.push(action.payload)
      console.log(action.payload)
    },
  },
}))

export const { ascending, decending, setAsFav } = userSlice.actions;
export default userSlice.reducer;