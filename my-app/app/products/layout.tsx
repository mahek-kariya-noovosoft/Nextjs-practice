"use client";

import {useParams} from "next/navigation";
import React from "react";
import "./products.css";

export default function ProductsLayout({
                                           main,
                                           sidebar,
                                           info,
                                           children,
                                       }: {
    main: React.ReactNode;
    sidebar: React.ReactNode;
    info: React.ReactNode;
    children: React.ReactNode;
}) {
    const params = useParams();
    const productId = params?.productId;

    return (
        <div className="products-layout">
            <div className="products-main">
                <p style={{fontSize: 14, opacity: 0.7}}>
                    Layout sees productId: {productId}
                </p>

                {main}

                <div className="info-tabs">{info}</div>

                {children}
            </div>

            <aside className="products-sidebar">{sidebar}</aside>
        </div>
    );
}
