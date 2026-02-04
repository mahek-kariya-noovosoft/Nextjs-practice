"use client"

import {useDispatch, useSelector} from "react-redux"
import type {RootState, AppDispatch} from "../store"
import {login, logout} from "@/store/userSlice";

export default function Page() {
    const user = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
            <p>{user.isLoggedIn ? `Hi ${user.name}` : "Not logged in"}</p>

            <button onClick={() => dispatch(login("Mahek"))}>
                Login
            </button>

            <button onClick={() => dispatch(logout())}>
                Logout
            </button>
        </>
    )
}
