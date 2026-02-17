import {ReactNode} from "react";

export default function basicLayout({children}: { children: ReactNode }) {
    return (
        
        <html>
        <body>
        {children}
        </body>
        </html>
    )
}