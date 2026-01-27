// app/products/@main/page.tsx
import { delay } from "@/utils/delay";

export default async function MainProducts() {
    await delay(4000); // ⏳ 4 seconds delay (server-side)

    return (
        <div>
            <h1>Main Products</h1>
            <ul>
                <li>iPhone</li>
                <li>MacBook</li>
                <li>AirPods</li>
            </ul>
        </div>
    );
}
