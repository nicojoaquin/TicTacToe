const Form = ({ setTurno, jugador1, setJugador1, jugador2, setJugador2 }) => {
  const handleClick = ({ target }) => {
    if ([jugador1, jugador2].includes("")) return alert("Completa los campos");
    setTurno(target.textContent);
  };

  return (
    <main
      className="d-flex justify-content-center align-items-center bg-dark"
      style={{ height: "100vh" }}
    >
      <div className="text-light">
        <h1 className="mb-5 text-center">Elija el primer turno</h1>
        <form
          className="d-flex flex-column justify-content-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="d-flex">
            <input
              type="text"
              placeholder="Jugador 1"
              className="me-5"
              onChange={({ target }) => setJugador1(target.value)}
              value={jugador1}
            />
            <input
              type="text"
              placeholder="Jugador 2"
              onChange={({ target }) => setJugador2(target.value)}
              value={jugador2}
            />
          </div>

          <div className="d-flex text-dark turno mt-3 ms-4">
            <article onClick={handleClick} className="me-5 card">
              X
            </article>
            <article onClick={handleClick} className="me-3 card">
              O
            </article>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Form;
