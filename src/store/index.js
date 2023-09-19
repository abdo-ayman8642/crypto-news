// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

// Reducer
const initialState = {
  data: [],
  loading: false,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_DATA_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_DATA_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Actions
export const fetchData = () => async (dispatch) => {
  dispatch({ type: "FETCH_DATA_REQUEST" });

  try {
    const response = await fetch("https://api.coinranking.com/v2/coins"); // Replace with your API endpoint
    const data = await response.json();

    dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
  }
};

// Redux store
const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector) => useSelector(selector);

export default store;
