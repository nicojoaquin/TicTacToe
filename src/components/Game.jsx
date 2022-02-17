import { useEffect, useState } from "react";

const Game = ({
  turno,
  setTurno,
  jugador1,
  jugador2,
  setJugador1,
  setJugador2,
}) => {
  const [celdas, setCeldas] = useState(Array(9).fill(""));
  const [ganador, setGanador] = useState(null);
  const [ganadorNombre, setGanadorNombre] = useState(null);

  useEffect(() => {
    if (ganador) {
      ganador === "X" ? setGanadorNombre(jugador1) : setGanadorNombre(jugador2);
      ganador === "Empate" && setGanadorNombre("Empate");
    }
  }, [ganador, jugador1, jugador2]);

  const checkGanador = () => {
    const lineaGanadora = {
      horizontal: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      vertical: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [6, 4, 2],
      ],
    };

    for (let linea in lineaGanadora) {
      lineaGanadora[linea].forEach((patron) => {
        if (
          celdas[patron[0]] === "" ||
          celdas[patron[1]] === "" ||
          celdas[patron[2]] === ""
        ) {
        } else if (
          celdas[patron[0]] === celdas[patron[1]] &&
          celdas[patron[1]] === celdas[patron[2]]
        ) {
          setGanador(celdas[patron[0]]);
        }
      });
    }
  };

  const handleClick = (val) => {
    if (ganador) return;
    if (celdas[val] !== "") {
      return;
    }
    if (turno === "X") {
      celdas[val] = "X";
      setTurno("O");
    } else {
      celdas[val] = "O";
      setTurno("X");
    }
    checkGanador();
    setCeldas([...celdas, celdas]);
    if (celdas.length === 17 && !ganador) {
      setGanador("Empate");
    }
  };

  const resetearJuego = () => {
    setGanador(null);
    setTurno("");
    setCeldas(Array(9).fill(""));
    setJugador1("");
    setJugador2("");
  };

  const Celdas = ({ val }) => {
    return (
      <td onClick={() => handleClick(val)}>
        <div className="d-flex justify-content-center fs-1">{celdas[val]}</div>
      </td>
    );
  };

  return (
    <main
      className="d-flex flex-colum justify-content-center align-items-center bg-dark"
      style={{ height: "100vh" }}
    >
      <div className="text-light">
        {ganador && (
          <div className="text-center">
            <h2>
              {ganador === "Empate"
                ? `${ganadorNombre}`
                : `El ganador es ${ganadorNombre}`}
            </h2>
            <button className="btn btn-light mb-3 mt-3" onClick={resetearJuego}>
              Jugar de nuevo
            </button>
          </div>
        )}
        {!ganador && <h3>Turno de {turno}</h3>}
        <table>
          <tbody>
            <tr>
              <Celdas val={0} />
              <Celdas val={1} />
              <Celdas val={2} />
            </tr>
            <tr>
              <Celdas val={3} />
              <Celdas val={4} />
              <Celdas val={5} />
            </tr>
            <tr>
              <Celdas val={6} />
              <Celdas val={7} />
              <Celdas val={8} />
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Game;
