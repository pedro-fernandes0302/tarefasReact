import { useState } from "react";
import "./tarefa.css";

interface PessoaProps {
  nome: string;
  cpf: number;
  problema_mental: string;
  vivo: boolean;
}

interface CarroProps {
  modelo: string;
  placa: string;
  lugares: number;
  estacionamento: string;
}

interface ConsultaProps {
  sala: string;
  medico: string;
}

interface BaguiProps {
  pessoa: PessoaProps;
  carro: CarroProps;
  consulta: ConsultaProps;
}

export default function Tarefa() {
  const [pessoa, setPessoa] = useState<PessoaProps>({
    nome: "",
    cpf: 0,
    problema_mental: "",
    vivo: true,
  });
  const [carro, setCarro] = useState<CarroProps>({
    modelo: "",
    placa: "",
    lugares: 0,
    estacionamento: "",
  });

  const [consulta, setConsulta] = useState<ConsultaProps>({
    sala: "",
    medico: "",
  });

  const [lista, setLista] = useState<BaguiProps[]>([]);

  return (
    <>
      <div className="cadastro-pessoa">
        <label>
          Seu nome
          <input
            type="text"
            value={pessoa.nome}
            onChange={(e) => setPessoa({ ...pessoa, nome: e.target.value })}
          />
        </label>

        <label>
          Seu cpf
          <input
            type="number"
            value={pessoa.cpf}
            onChange={(e) =>
              setPessoa({ ...pessoa, cpf: Number(e.target.value) })
            }
          />
        </label>

        <label>
          Problema mental
          <input
            type="text"
            value={pessoa.problema_mental}
            onChange={(e) =>
              setPessoa({ ...pessoa, problema_mental: e.target.value })
            }
          />
        </label>

        <label>
          Vivo
          <input
            type="checkbox"
            checked={pessoa.vivo}
            onChange={(e) => setPessoa({ ...pessoa, vivo: e.target.checked })}
          />
        </label>
      </div>

      <div className="cadastrocarro">
        <input
          type="text"
          placeholder="Placa"
          value={carro.placa}
          onChange={(e) => setCarro({ ...carro, placa: e.target.value })}
        />
        <input
          type="number"
          placeholder="Lugares"
          value={carro.lugares}
          onChange={(e) =>
            setCarro({ ...carro, lugares: Number(e.target.value) })
          }
        />
        <input
          type="text"
          placeholder="Modelo"
          value={carro.modelo}
          onChange={(e) => setCarro({ ...carro, modelo: e.target.value })}
        />
        <input
          type="text"
          placeholder="Estacionamento"
          value={carro.estacionamento}
          onChange={(e) =>
            setCarro({ ...carro, estacionamento: e.target.value })
          }
        />
      </div>

      <div className="cadastroconsulta">
        <input
          type="text"
          placeholder="Sala"
          value={consulta.sala}
          onChange={(e) => setConsulta({ ...consulta, sala: e.target.value })}
        />
        <input
          type="text"
          placeholder="Médico"
          value={consulta.medico}
          onChange={(e) => setConsulta({ ...consulta, medico: e.target.value })}
        />
      <button
                onClick={() => {
                    setLista([...lista, { pessoa, carro, consulta }]);
                    setPessoa({ nome: "", cpf: 0, problema_mental: "", vivo: true });
                    setCarro({ modelo: "", placa: "", lugares: 0, estacionamento: "" });
                    setConsulta({ sala: "", medico: "" });
                }}
            >
                Salvar cadastro
            </button>
                <div className="showlist">
                    <h2 className="h2" >Registro salvo  ({lista.length})</h2>
                    <ul>
                {lista.map((item, index) => (
                    <li key={index}>
                        {item.pessoa.nome} — Consulta com {item.consulta.medico} na sala {item.consulta.sala}
                    </li>
                ))}
                    </ul>
                </div>
      </div>
    </>
  );
}
