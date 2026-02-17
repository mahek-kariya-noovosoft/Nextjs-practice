"use client";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";


export default function Home() {
    return (
        <div className="p-6">
            <h1 className="text-xl font-semibold">
                My Exel-like Tracker
            </h1>
            <div className="ag-theme-quartz mt-4 h-[300px] border rounded">
                Grid goes here
            </div>

        </div>
    );
}
