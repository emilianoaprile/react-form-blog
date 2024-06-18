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
    e.preventDefault();
    // aggiungo il titolo all'array
    setLista((lista) => [titolo, ...lista]);
    setTitolo("");
  };

  console.log(titolo);
  console.log(lista);

  return (
    <>
      <section className="formSection">
        <div className="container">
          <h2>Aggiungi un titolo</h2>
          <form onSubmit={handleSubmit}>
            <div className="formWrapper">
              <input
                type="text"
                placeholder="Inserisci un titolo.."
                value={titolo}
                onChange={handleNewTitle}
              />
              <button className="btn btnAdd">Aggiungi</button>
            </div>
          </form>
          <h2>Titoli:</h2>
          {/* conditional rendering se ci sono titoli renderizza la lista altrimenti il paragrafo */}
          {lista.length > 0 ? (
            <ul className="titleList">
              {lista.map((listItem, index) => (
                <li className="listItem" key={`title${index}`}>
                  {listItem}
                  <button className="btn btnRemove">Elimina</button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="listMessage">Non hai ancora inserito nessun titolo</p>
          )}
        </div>
      </section>
    </>
  );
}

export default Form;
