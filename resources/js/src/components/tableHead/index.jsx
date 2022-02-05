import React from "react";

export default function TableHead({ columns }) {
    return (
        <thead>
            <tr className="table-head">
                {columns.map((column, i) => (
                    <th key={i + column}>{column}</th>
                ))}
            </tr>
        </thead>
    );
}
