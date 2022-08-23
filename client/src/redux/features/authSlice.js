import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api.js';
export const login = createAsyncThunk(
  'auth/login',
  async ({ formData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.login(formData);
      navigate('/');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signup = createAsyncThunk(
  'auth/signup',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.signup(formData);
      // navigate('/');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const googleSignIn = createAsyncThunk(
  'auth/googleSignIn',
  async ({ result, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.googleSignIn(result);
      navigate('/');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userConnected: null,
    error: '',
    loading: false,
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem('userData', JSON.stringify({ ...action.payload }));
      state.userConnected = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [signup.pending]: (state, action) => {
      state.loading = true;
    },
    [signup.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem('userData', JSON.stringify({ ...action.payload }));
      state.userConnected = action.payload;
    },
    [signup.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [googleSignIn.pending]: (state, action) => {
      state.loading = true;
    },
    [googleSignIn.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem('userData', JSON.stringify({ ...action.payload }));
      state.userConnected = action.payload;
    },
    [googleSignIn.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default authSlice.reducer;
