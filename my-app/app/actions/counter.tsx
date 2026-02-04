'use server'

export async function increment(count: number) {
    await new Promise(r => setTimeout(r, 1000))
    return count + 1
}
