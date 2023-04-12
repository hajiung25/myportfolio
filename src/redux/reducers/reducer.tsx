import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit"

const mouseposition: { position: number[] } = { position: [0, 0] }

const mousePositionSlice = createSlice({
    name: 'reducer',
    initialState: mouseposition,
    reducers: {
        SET_MOUSE_POSITION_HANDLER(state, action: PayloadAction<number[]>) {
            state.position = action.payload
        }
    }
})
export let store = configureStore({
    reducer: {
        mouseposition1: mousePositionSlice.reducer
    }
})

export let { SET_MOUSE_POSITION_HANDLER } = mousePositionSlice.actions

export type RootState = { mouseposition1: { position: number[] } }