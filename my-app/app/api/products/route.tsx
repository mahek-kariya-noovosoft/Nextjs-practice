import {NextResponse} from 'next/server'

export async function GET() {
    // pretend this is a DB call
    const products = [
        {id: 1, name: 'iPhone'},
        {id: 2, name: 'MacBook'},
        {id: 3, name: 'AirPods'},
    ]

    return NextResponse.json(products)
}
