import TableDataComponent from "./TableDataComponent";

export default function SzamTabla() {
  const szamok = Array.from({ length: 100 }, (_, i) => i + 1);

  const chunked = [];
  for (let i = 0; i < szamok.length; i += 10) {
    chunked.push(szamok.slice(i, i + 10));
  }

return (
  <>
    {chunked.map((sor, sorIndex) => (
      <tr key={sorIndex}>
        {sor.map((szo, szoIndex) => (
          <TableDataComponent key={szoIndex} data={szo}></TableDataComponent>
        ))}
      </tr>
    ))}
  </>
    );
}