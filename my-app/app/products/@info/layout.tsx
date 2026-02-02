import Link from "next/link";
import "../products.css";

export default function InfoLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <nav className="info-nav">
                <Link href="/products">Overview</Link>
                <Link href="/products/reviews">Reviews</Link>
                <Link href="/products/specs">Specs</Link>
            </nav>

            <div>{children}</div>
        </div>
    );
}
