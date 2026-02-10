"use client"
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {decrement, increment, incrementIfOdd} from "@/store/counterSlice";

export default function Page() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(incrementIfOdd())}
                >
                    Increment if odd
                </button>
            </div>
        </div>
    )
}