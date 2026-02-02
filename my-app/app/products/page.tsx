import Link from "next/link";
import "./products.css";

export default async function ProductsPage() {
    const res = await fetch('http://localhost:3000/api/products', {
        cache: 'no-store', // always fresh
    })

    const products: { id: number; name: string }[] = await res.json()

    return (
        <div className="products-page">
            <h1>Products Page</h1>
            <ul className="products-list">
                {products.map((p) => (
                    <li key={p.id}>
                        <Link href={`/products/${p.id}`}>{p.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
