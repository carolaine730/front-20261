import './Tabela.css';
function Tabela({tableData, title}) {
  return (
    <article>
      <table>
        <thead>
          {title && (
            <tr>
              <th colSpan={tableData.header.length}>{title}</th>
            </tr>
          )}
          <tr>
            {tableData.header.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}

export default Tabela;
