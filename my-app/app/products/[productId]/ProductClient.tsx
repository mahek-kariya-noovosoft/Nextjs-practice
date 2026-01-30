"use client";

import {useRouter} from "next/navigation";
import {ReactNode} from "react";

type Props = {
    details: ReactNode;
};

export default function ProductClient({details}: Props) {
    const router = useRouter();

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
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
                {/* ✅ JSX BUILT ON SERVER, RENDERED ON CLIENT */}
                {details}

                <button onClick={() => router.back()}>Close</button>
            </div>
        </div>
    );
}
