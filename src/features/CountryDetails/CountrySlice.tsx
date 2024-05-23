import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the type for native names, where the key is a language code
type NativeName = {
  [key: string]: {
    official: string;
    common: string;
  };
};

// Correct the Country type based on the provided data
type Country = {
  cca3: string;
  name: { common: string; official: string; nativeName: NativeName };
  flags: { png: string; svg: string; alt: string };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  currencies: { [key: string]: { name: string; symbol: string } };
  languages: {[key:string]:string}
};

type InitialState = {
  loading: boolean;
  country: Country;
  error: string;
};

// Fetch country data from API
export const fetchCountry = createAsyncThunk("country/fetchCountry", async (name: string) => {
  const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
  return response.data[0]; // Assuming we only need the first country in the array
});

const initialState: InitialState = {
  loading: false,
  country: {
    flags: { png: "", svg: "", alt: "" },
    cca3: "",
    name: { common: "", official: "", nativeName: {} },
    population: 0,
    region: "",
    subregion: "",
    capital: [],
    currencies: {},
    languages:{}
  },
  error: "",
};

const CountrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountry.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCountry.fulfilled, (state, action: PayloadAction<Country>) => {
      state.loading = false;
      state.country = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCountry.rejected, (state, action) => {
      state.loading = false;
      state.country = initialState.country;
      state.error = action.error.message || "Failed to fetch";
    });
  },
});

export default CountrySlice.reducer;
