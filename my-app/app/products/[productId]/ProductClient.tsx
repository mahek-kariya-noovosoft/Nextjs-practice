// app/products/[productId]/ProductClient.tsx

"use client";

type Props = {
    productId: string;
    productName: string;
};

export default function ProductClient({productId, productName}: Props) {
    return (
        <div>
            <h1>{productName}</h1>
            <p>Product ID: {productId}</p>

            <button onClick={() => alert(productId)}>
                Add to cart
            </button>
        </div>
    );
}
