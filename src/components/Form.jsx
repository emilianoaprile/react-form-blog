import { useState } from "react";

function Form() {
  // inizializzo gli state per recuperare il value dell'input e l'array nel quale varranno inseriti
  const [titolo, setTitolo] = useState("");
  const [lista, setLista] = useState([]);

  // sincronizzo il valore del title con l'oggetto event aggiornando lo stato tramite setNewTitle
  const handleNewTitle = (e) => {
    setTitolo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    // aggiungo il titolo all'array
    setLista(lista => ([titolo,...lista]));
    setTitolo("");
  };

  console.log(titolo);
  console.log(lista)

  return (
    <>
      <div>
        <h2>Aggiungi un titolo</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Inserisci un titolo.."
            value={titolo}
            onChange={handleNewTitle}
          />
          <button>Aggiungi</button>
        </form>
        <h2>Titoli:</h2>
        <ul>
          {lista.map((listItem, index) => (
            <li key={`title${index}`}>
              {listItem}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Form;
