import ProductClient from "./ProductClient";
import {notFound} from "next/navigation";

type PageProps = {
    params: Promise<{
        productId: string;
    }>;
};

export async function generateStaticParams() {
    return [
        {productId: "1"},
        {productId: "2"},
        {productId: "3"},
    ];
}

export const dynamicParams = true;
export const revalidate = 10;

export default async function ProductPage({params}: PageProps) {
    const {productId} = await params;
    const product = await getProduct(productId);

    if (!product) notFound();

    // ✅ JSX CREATED ON THE SERVER
    const productDetailsJSX = (
        <>
            <h2>{product.name}</h2>
            <p>ID: {product.id}</p>
            <p style={{color: "gray"}}>
                Generated at {new Date().toLocaleTimeString()}
            </p>
        </>
    );

    return (
        <ProductClient
            details={productDetailsJSX}
        />
    );
}

async function getProduct(id: string) {
    if (Number(id) > 20) return null;
    return {id, name: `Product ${id}`};
}
