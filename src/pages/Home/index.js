import { useEffect, useState } from "react";

function Home() {
  const [cadastrados, setCadastrados] = useState([]);

  useEffect(() => {
    function carregaLista() {
      const minhaLIsta = localStorage.getItem("@listaFornecedores");

      if (minhaLIsta) {
        setCadastrados(JSON.parse(minhaLIsta));
      }
    }

    carregaLista();
  }, []);

  function excluir(cnpj) {
    let verificaFornecedor = cadastrados.filter((item) => {
      return item.cnpj !== cnpj;
    });
    setCadastrados(verificaFornecedor);

      localStorage.setItem("@listaFornecedores", JSON.stringify(verificaFornecedor));
  
  }

  return (
    <div className="container mt-4">
      <h1>Cadastrados</h1>
      <div className="card">
        <div className="card-body bg-light">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">CNPJ</th>
                <th scope="col">Razão social</th>
                <th scope="col">Nome Fantasia</th>
                <th scope="col">Email</th>
                <th scope="col">CEP</th>
                <th scope="col">Rua</th>
                <th scope="col">Bairro</th>
                <th scope="col">Cidade</th>
                <th scope="col">Estado</th>
                <th scope="col">Ação</th>
              </tr>
            </thead>
            <tbody>
              {cadastrados.map((item) => {
                return (
                  <tr key={item}>
                    <td>{item.cnpj}</td>
                    <td>{item.razao}</td>
                    <td>{item.nFantasia}</td>
                    <td>{item.email}</td>
                    <td>{item.cep}</td>
                    <td>{item.rua}</td>
                    <td>{item.bairro}</td>
                    <td>{item.cidade}</td>
                    <td>{item.estado}</td>
                    <td>
                      <button className="btn btn-sm">Editar</button>
                      <button
                        onClick={() => excluir(item.cnpj)}
                        className="btn btn-sm"
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
