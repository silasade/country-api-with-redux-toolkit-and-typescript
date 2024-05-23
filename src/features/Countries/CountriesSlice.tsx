import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type Country = {
    flags: { png: string };
    name: { common: string; official: string; nativeName: any };
    population: number;
    region: string;
    capital:string
};

type InitialState = {
    loading: boolean;
    countries: Country[];
    error: string;
};

const initialState: InitialState = {
    loading: false,
    countries: [],
    error: ""
};

export const fetchCountries = createAsyncThunk("countries/fetchCountries", async (region?: string) => {
    const url = region ? `https://restcountries.com/v3.1/region/${region}` : 'https://restcountries.com/v3.1/all';
    const response = await axios.get(url);
    return response.data;
});


const countrySlice = createSlice({
    name: "countries",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCountries.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchCountries.fulfilled, (state, action: PayloadAction<Country[]>) => {
            state.loading = false;
            state.countries = action.payload;
            state.error = "";
        });
        builder.addCase(fetchCountries.rejected, (state, action) => {
            state.loading = false;
            state.countries = [];
            state.error = action.error.message || "Failed to fetch countries";
        });
    },
});

export default countrySlice.reducer;
