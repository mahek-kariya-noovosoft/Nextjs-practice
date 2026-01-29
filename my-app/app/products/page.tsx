import Link from "next/link";

export default function ProductsPage() {
    const products = Array.from({length: 10}, (_, i) => ({
        id: (i + 1).toString(),
        name: `Product ${i + 1}`,
    }));

    return (
        <div>
            <h1>Products Page</h1>
            <ul>
                {products.map((p) => (
                    <li key={p.id} style={{marginBottom: 10}}>
                        <Link
                            href={`/products/${p.id}`}
                            style={{color: "blue", textDecoration: "underline"}}
                        >
                            {p.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
