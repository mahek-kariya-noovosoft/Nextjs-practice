import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type Row = {
    name: string;
    role: string;
    exp: number;
};

type GridState = {
    rows: Row[];
};

const initialState: GridState = {
    rows: [
        {name: "Mahek", role: "Developer", exp: 2},
        {name: "Aman", role: "Tester", exp: 1}
    ]
};

const gridSlice = createSlice({
    name: "grid",
    initialState,
    reducers: {
        setRows: (state, action: PayloadAction<Row[]>) => {
            state.rows = action.payload;
        }
    }
});

export const {setRows} = gridSlice.actions;
export default gridSlice.reducer;
