import Link from 'next/link'
import {ThemeProvider} from './theme-provider'
import ThemeToggle from './theme-toggle'
import './global.css'

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <ThemeProvider>
            <nav className="nav">
                <div className="nav-links">
                    <Link href="/">Home</Link>
                    <Link href="/products">Products</Link>
                    <Link href="/count">Count</Link>
                </div>
                <ThemeToggle/>
            </nav>

            <main className="container">{children}</main>
        </ThemeProvider>
        </body>
        </html>
    )
}
