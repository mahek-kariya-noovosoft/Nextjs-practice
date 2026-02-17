"use client";

import {ModuleRegistry, AllCommunityModule} from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);


import {AgGridProvider, AgGridReact} from "ag-grid-react";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {ColDef} from "ag-grid-community";


import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {useState} from "react";

type Car = {
    make: string;
    model: string;
    price: number;
    electric: boolean;
};

const GridExample = () => {
    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState<Car[]>([
        {make: "Tesla", model: "Model Y", price: 64950, electric: true},
        {make: "Ford", model: "F-Series", price: 33850, electric: false},
        {make: "Toyota", model: "Corolla", price: 29600, electric: false},
    ]);

    const colDefs: ColDef[] = [
        {field: "make", flex: 2},
        {field: "model", flex: 1},
        {field: "price", flex: 1},
        {field: "electric", flex: 1}
    ];


    // ...


    const modules = [AllCommunityModule];

    return (
        <div className="ag-theme-alpine" style={{width: "auto"}}>
            <AgGridReact
                theme="legacy"
                rowData={rowData}
                columnDefs={colDefs}
                domLayout="autoHeight"
            />

        </div>

    )
}
export default GridExample;