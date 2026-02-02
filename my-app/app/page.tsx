import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <Link href="/products">Go to Products</Link>
            <br/>
            <Link href="/count">Go to Count Page</Link>
        </>
    );
}
