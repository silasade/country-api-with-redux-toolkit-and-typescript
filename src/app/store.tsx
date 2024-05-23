import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "../features/Theme/ThemeSlice";
import CoutriesReducer from "../features/Countries/CountriesSlice"
import CountryReducer from "../features/CountryDetails/CountrySlice";
export const store=configureStore({
    reducer:{
        theme:ThemeReducer,
        coutries: CoutriesReducer,
        country: CountryReducer
    }
})

export type RootStore=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch