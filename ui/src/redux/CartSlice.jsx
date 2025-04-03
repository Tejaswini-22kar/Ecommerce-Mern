import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch Cart Count Thunk
export const fetchCartCount = createAsyncThunk(
    "cart/fetchCartCount",
    async (userId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:7000/api/cart/count/${userId}`);
            return response.data.count;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Failed to fetch cart count");
        }
    }
);

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        count: 0,
        loading: false,
        error: null
    },
    reducers: {
        setCartCount: (state, action) => {
            state.count = action.payload;
        },
        incrementCartCount: (state) => { // ✅ New action
            state.count += 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartCount.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCartCount.fulfilled, (state, action) => {
                state.loading = false;
                state.count = action.payload;
            })
            .addCase(fetchCartCount.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { setCartCount, incrementCartCount } = cartSlice.actions; // ✅ Export new action
export default cartSlice.reducer;
