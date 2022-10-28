import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../config/config";

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${BASE_URL}Accounts/Login`,
        { email, password },
        config
      );
      // store user's token in local storage
      localStorage.setItem("userToken", data.returnObj.token);
      localStorage.setItem("userInfo", JSON.stringify(data.returnObj));

      return data.returnObj;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error);
      } else {
        return rejectWithValue(error.error);
      }
    }
  }
);


export const registerUser = createAsyncThunk(
  "user/register",
  async (model, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios.post(`${BASE_URL}Accounts/Register`, model, config);
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data.errors);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async (arg, { getState, rejectWithValue }) => {
    try {
      // get user data from store
      const { user } = getState();

      // configure authorization header with user's token
      const config = {
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
      };

      const { data } = await axios.get(`/api/user/profile`, config);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
