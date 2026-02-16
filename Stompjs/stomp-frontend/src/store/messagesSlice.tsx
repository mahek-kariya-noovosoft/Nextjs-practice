import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const messagesSlice = createSlice({
    name: "messages",
    initialState: [] as string[],
    reducers: {
        addMessage: (state, action: PayloadAction<string>) => {
            state.push(action.payload);
        },
    },
});

export const {addMessage} = messagesSlice.actions;
export default messagesSlice.reducer;
