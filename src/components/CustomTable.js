// src/components/CustomTable.js
import React from 'react';

function CustomTable({ columns, data }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {Object.values(row).map((value, columnIndex) => (
                            <td key={columnIndex}>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default CustomTable;
