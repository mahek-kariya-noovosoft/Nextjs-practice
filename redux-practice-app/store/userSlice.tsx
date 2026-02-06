import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit"

interface UserState {
    isLoggedIn: boolean
    name: string | null
    loading: boolean
}

const initialState: UserState = {
    isLoggedIn: false,
    name: null,
    loading: false,
}

const loginUserAsync = createAsyncThunk(
    "user/loginAsync",
    async (name: string) => {
        return new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve(name)
            }, 1500)
        })
    }
)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.isLoggedIn = true
            state.name = action.payload
        },
        logout: (state) => {
            state.isLoggedIn = false
            state.name = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUserAsync.pending, (state) => {
                state.loading = true
            })
            .addCase(loginUserAsync.fulfilled, (state, action) => {
                state.loading = false
                state.isLoggedIn = true
                state.name = action.payload
            })
    },
})

export const {login, logout} = userSlice.actions
export {loginUserAsync}
export default userSlice.reducer
