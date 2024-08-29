import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialStateTypes } from "@/types/TypesList";

const isDarkMode = localStorage.getItem('isDarkMode') !== null 
    ? JSON.parse(localStorage.getItem('isDarkMode') || '{}') 
    : []

const setItemFunc = (isDarkMode: boolean) => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))
}

const initialState: InitialStateTypes = {
    isDarkMode: isDarkMode,
}

const globalSlice = createSlice ({
    name: "globalState",
    initialState,
    reducers: {
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;

            setItemFunc(state.isDarkMode);
        }
    }
})

export const { setIsDarkMode } = globalSlice.actions

const state = configureStore ({
    reducer: {
        global: globalSlice.reducer
    }
})

export default state;
export type State = ReturnType<typeof state.getState>