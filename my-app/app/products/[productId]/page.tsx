import ProductClient from "./ProductClient";

type PageProps = {
    params: Promise<{
        productId: string;
    }>
};

export default async function ProductPage({params}: PageProps) {
    const {productId} = await params;

    const product = await getProduct(productId);

    return (
        <ProductClient
            productId={product.id}
            productName={product.name}
        />
    );
}

async function getProduct(id: string) {
    return {
        id,
        name: `Product ${id}`,
    };
}
