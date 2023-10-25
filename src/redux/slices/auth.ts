import { createSlice, createAsyncThunk, isFulfilled, PayloadAction } from "@reduxjs/toolkit"
import { rejects } from "assert";
import axios from "../../api/axios"

export interface LoginRequest {
  nickname: string,
  password: string,
}

export const fetchLogin = createAsyncThunk('auth/fetchLogin', async (params: any) => {
  const {data} = await axios.post('/login', params);
  return data;
});

export const fetchSignup = createAsyncThunk('auth/fetchSignup', async (params) => {
  const {data} = await axios.post('/signup', params);
  return data;
});

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async () => {
  const {data} = await axios.post('/auth');
  return data;
});

interface AuthState {
  status: 'loading' | 'loaded' | 'error';
  data: any;
}

const initialState: AuthState = {
  data: null,
  status: 'loading',
};

const authSlice = createSlice({
name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'loaded';
        state.data = action.payload;
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      });
  },
});

export const selectIsAuth = (state: any) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;
