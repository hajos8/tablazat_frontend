import TableDataComponent from "./TableDataComponent";
import beszed from "./data.js"

export default function SzamTabla() {
  const szamok = []

  beszed.data.forEach(elem =>{
    elem.split(" ").forEach(szo =>{
        szamok.push(szo)
    })
  })

  const chunked = [];
  for (let i = 0; i < szamok.length; i += 5) {
    chunked.push(szamok.slice(i, i + 5));
  }

return (
  <>
    {chunked.map((sor, sorIndex) => (
      <tr key={sorIndex}>
        {sor.map((szo, szoIndex) => (
          <TableDataComponent key={szoIndex} data={szo}></TableDataComponent>
        ))}
        <td>
            <button onClick={console.log}>Törlés</button>
        </td>
      </tr>
    ))}
  </>
    );
}