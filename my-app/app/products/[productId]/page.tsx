import ProductClient from "./ProductClient";
import {notFound} from "next/navigation";

type PageProps = {
    params: Promise<{
        productId: string;
    }>;
};

// 1️⃣ Pre-build ONLY top 3 products
export async function generateStaticParams() {
    return [
        {productId: "1"},
        {productId: "2"},
        {productId: "3"},
    ];
}

// 2️⃣ Allow other product pages at runtime
export const dynamicParams = true;

// 3️⃣ Revalidate every 10 seconds
export const revalidate = 10;

export default async function ProductPage({params}: PageProps) {
    const {productId} = await params;

    // fake DB fetch
    const product = await getProduct(productId);

    if (!product) {
        notFound();
    }

    return (
        <>
            {/* 🔥 SERVER-ONLY PROOF */}
            <p style={{color: "gray"}}>
                Page generated at: <strong>{new Date().toLocaleTimeString()}</strong>
            </p>

            <ProductClient
                productId={product.id}
                productName={product.name}
            />
        </>
    );
}

async function getProduct(id: string) {
    // simulate invalid product
    if (Number(id) > 20) return null;

    return {
        id,
        name: `Product ${id}`,
    };
}
