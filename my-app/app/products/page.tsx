import Link from "next/link";
import "./products.css";

export default function ProductsPage() {
    const products = Array.from({length: 10}, (_, i) => ({
        id: (i + 1).toString(),
        name: `Product ${i + 1}`,
    }));

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
