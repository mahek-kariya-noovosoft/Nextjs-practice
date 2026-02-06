"use client"

import {useDispatch, useSelector} from "react-redux"
import type {RootState, AppDispatch} from "@/store"
import {loginUserAsync, logout} from "@/store/userSlice"

export default function ThunkDemo() {
    const user = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <div style={{padding: 30}}>
            <h3>Async Thunk Demo</h3>

            {user.loading && <p>Logging in...</p>}

            <p>
                {user.isLoggedIn ? `Hi ${user.name}` : "Not logged in"}
            </p>

            <button onClick={() => dispatch(loginUserAsync("Mahek"))}>
                Login (async)
            </button>

            <button onClick={() => dispatch(logout())}>
                Logout
            </button>
        </div>
    )
}
