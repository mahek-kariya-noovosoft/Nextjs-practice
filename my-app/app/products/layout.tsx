"use client";

import {useParams} from "next/navigation";
import React from "react";

export default function ProductsLayout({main, sidebar, children}: {
    main: React.ReactNode;
    sidebar: React.ReactNode;
    children: React.ReactNode;
}) {
    const params = useParams();
    const productId = params?.productId;

    return (
        <div style={{display: "flex", gap: 20}}>
            <div style={{flex: 3}}>
                <p>Layout sees productId: {productId}</p>
                {main}
                {children}
            </div>

            <div style={{flex: 1}}>{sidebar}</div>
        </div>
    );
}
