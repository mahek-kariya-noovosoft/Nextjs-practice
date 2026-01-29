// ProductClient.tsx
"use client";

import {useRouter} from "next/navigation";

type Props = { productId: string; productName: string };

export default function ProductClient({productId, productName}: Props) {
    const router = useRouter();

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    background: "white",
                    padding: 20,
                    borderRadius: 10,
                    minWidth: 300,
                }}
            >
                <h2>{productName}</h2>
                <p>ID: {productId}</p>
                <button onClick={() => router.back()}>Close</button>
            </div>
        </div>
    );
}
