'use client'

import {useTheme} from './theme-provider'

export default function ThemeToggle() {
    const {theme, toggleTheme} = useTheme()

    return (
        <button className="theme-btn" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
    )
}
