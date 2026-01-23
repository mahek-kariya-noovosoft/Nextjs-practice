
export default function Layout({ sidebar, main }) {
    return (
        <div style={{ display: "flex" }}>
            <aside>{sidebar}</aside>
            <main>{main}</main>
        </div>
    );
}
