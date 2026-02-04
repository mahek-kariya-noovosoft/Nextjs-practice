'use client'
import {useActionState} from 'react'
import {increment} from '../actions/counter'

export default function Counter() {
    const [count, incrementAction, isPending] =
        useActionState(increment, 0)

    return (
        <form action={incrementAction}>
            <button disabled={isPending}>
                {isPending ? 'Updating...' : `Count: ${count}`}
            </button>
        </form>
    )
}
