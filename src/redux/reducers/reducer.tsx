import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit"

const mouseposition: { position: number[] } = { position: [0, 0] }
const onScrollValue: { value: number } = { value: 0 }
const browserSize: { size: { width: number, height: number } } = { size: { width: window.innerWidth, height: window.innerHeight } }

const mousePositionSlice = createSlice({
    name: 'mousePositionSlice',
    initialState: mouseposition,
    reducers: {
        SET_MOUSE_POSITION_HANDLER(state, action: PayloadAction<number[]>) {
            state.position = action.payload
        }
    }
})
const onScrollSlice = createSlice({
    name: 'onScrollSlice',
    initialState: onScrollValue,
    reducers: {
        SET_ON_SCROLL_VALLUE(state, action: PayloadAction<number>) {
            state.value = action.payload
        }
    }
})
const browserSizeSlice = createSlice({
    name: 'browserSizeSlice',
    initialState: browserSize,
    reducers: {
        SET_BROWSER_SIZE(state, action: PayloadAction<{ width: number, height: number }>) {
            state.size = action.payload
        }
    }
})


export let store = configureStore({
    reducer: {
        mouseposition: mousePositionSlice.reducer,
        onScroll: onScrollSlice.reducer,
        browserSize: browserSizeSlice.reducer
    }
})

export let { SET_MOUSE_POSITION_HANDLER } = mousePositionSlice.actions
export let { SET_ON_SCROLL_VALLUE } = onScrollSlice.actions
export let { SET_BROWSER_SIZE } = browserSizeSlice.actions

export type MousePositionState = { mouseposition: { position: number[] } }
export type OnScrollState = { onScroll: { value: number } }
export type BrowserSizeState = { browserSize: { size: { width: number, height: number } } }