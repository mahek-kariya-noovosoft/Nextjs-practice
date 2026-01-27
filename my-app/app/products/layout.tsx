// app/products/layout.tsx
export default function ProductsLayout({
                                           main,
                                           sidebar,
                                       }: {
    main: React.ReactNode;
    sidebar: React.ReactNode;
}) {
    return (
        <div style={{ display: "flex", gap: 20 }}>
            <div style={{ flex: 3 }}>{main}</div>
            <div style={{ flex: 1 }}>{sidebar}</div>
        </div>
    );
}
