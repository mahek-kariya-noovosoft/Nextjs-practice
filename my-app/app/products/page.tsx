export default async function Products() {
    await new Promise((res) => setTimeout(res, 2000)); // fake delay

    return <h2>Products Page</h2>;
}
