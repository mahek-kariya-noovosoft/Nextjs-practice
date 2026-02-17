"use client";

import "ag-grid-community/styles/ag-theme-quartz.css";
import {AgGridReact} from "ag-grid-react";
import {useState} from "react";
import {DailyTasksRowType} from "@/types/TableTypes";
import {ColDef} from "ag-grid-community";
import "@/lib/agGrid";
import "./global.css";


export default function Home() {
    const [rowData] = useState<DailyTasksRowType[]>([
        {date: "2026-02-16", topic: "AG Grid basics", taskType: "Planned", status: "Done", time: 0.5, notes: null},
        {date: "2026-02-17", topic: "Practicals", taskType: "Planned", status: "Not Started", time: 1, notes: null},
    ]);

    const colDefs: ColDef<DailyTasksRowType>[] = [
        {field: "date", flex: 1},
        {field: "topic", flex: 1},
        {field: "taskType", flex: 1},
        {
            field: "status",
            flex: 1,
            cellClassRules: {
                "status-done": p => p.value === "Done",
                "status-progress": p => p.value === "In Progress",
                "status-incomplete": p => p.value === "Incomplete",
                "status-notstarted": p => p.value === "Not Started",
            },


        },
        {field: "time", flex: 1},
        {field: "notes", flex: 1},
    ];

    console.log(rowData);
    console.log(colDefs);

    return (
        <div className="page">
            <h1 className="title">
                My Exel-like Tracker
            </h1>
            <div className="ag-theme-quartz w-full h-[500px]">
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                    domLayout="autoHeight"
                    enableCellTextSelection={true}
                    defaultColDef={{
                        editable: true,
                        resizable: true,
                    }}
                />
            </div>
        </div>
    );
}
