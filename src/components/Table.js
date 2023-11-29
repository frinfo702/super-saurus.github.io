
// Tableコンポーネントを定義
function Table({ data }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>番号</th>
                    <th>年</th>
                    <th>月</th>
                    <th>学歴</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.number}</td>
                        <td>{row.year}</td>
                        <td>{row.month}</td>
                        <td>{row.education}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default Table;