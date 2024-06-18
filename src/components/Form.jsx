import { useState } from "react";

function Form() {
  // inizializzo gli state per recuperare il value dell'input e l'array nel quale varranno inseriti
  const [titolo, setTitolo] = useState("");
  const [lista, setLista] = useState([]);

  // sincronizzo il valore del title con l'oggetto event aggiornando lo stato tramite setNewTitle
  const handleNewTitle = (e) => {
    setTitolo(e.target.value);
  };

  console.log(titolo);

  return (
    <>
      <div>
        <h2>Aggiungi un titolo</h2>
        <form>
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
          <li>Titolo aggiunto</li>
        </ul>
      </div>
    </>
  );
}

export default Form;
