import Link from "next/link";

export default function InfoLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <nav style={{display: "flex", gap: 12}}>
                <Link href="/products">Overview</Link>
                <Link href="/products/reviews">Reviews</Link>
                <Link href="/products/specs">Specs</Link>
            </nav>

            <div style={{marginTop: 12}}>{children}</div>
        </div>
    );
}
