import { useEffect, useState } from "react";

function Cadastro() {
  const [cnpj, setCnpj] = useState("");
  const [razao, setRazao] = useState("");
  const [nFantasia, setNFantasia] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const [cadastro, setCadastro] = useState([]);

  useEffect(() => {
    const listCadastrados = localStorage.getItem("@listaFornecedores");

    if (listCadastrados) {
      setCadastro(JSON.parse(listCadastrados));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@listaFornecedores", JSON.stringify(cadastro));
  }, [cadastro]);

  function cadastrar(e) {
    e.preventDefault();

    const novoCadastro = {
      cnpj: cnpj,
      razao: razao,
      nFantasia: nFantasia,
      email: email,
      cep: cep,
      rua: rua,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
    };

    setCadastro([...cadastro, novoCadastro]);
  }

  return (
    <div className="container mt-4">
      <h1>Formulario para Cadastro</h1>

      <div className="card mb-5">
        <div className="card-body bg-light">
          <form onSubmit={cadastrar} className="row g-3">
            <div className="col-md-2">
              <label htmlFor="inputEmail" className="form-label">
                Digite o CNPJ
              </label>
              <input
                type="text"
                className="form-control"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputEmail" className="form-label">
                Razão social
              </label>
              <input
                type="text"
                className="form-control"
                value={razao}
                onChange={(e) => setRazao(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputEmail" className="form-label">
                Nome Fantasia
              </label>
              <input
                type="text"
                className="form-control"
                value={nFantasia}
                onChange={(e) => setNFantasia(e.target.value)}
              />
            </div>
            <div className="col-md-2">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="col-md-2">
              <label htmlFor="inputCEP" className="form-label">
                CEP
              </label>
              <input
                type="text"
                className="form-control"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
            </div>

            <div className="col-md-3">
              <label htmlFor="inputRua" className="form-label">
                Rua
              </label>
              <input
                type="text"
                className="form-control"
                value={rua}
                onChange={(e) => setRua(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="inputBairro" className="form-label">
                Bairro
              </label>
              <input
                type="text"
                className="form-control"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
              />
            </div>
            <div className="col-md-2">
              <label htmlFor="inputCidade" className="form-label">
                Cidade
              </label>
              <input
                type="text"
                className="form-control"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
            </div>
            <div className="col-md-2">
              <label htmlFor="inputEstado" className="form-label">
                Estado
              </label>
              <input
                type="text"
                className="form-control"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              />
            </div>

            <div className="d-grid d-md-flex justify-content-md-end">
              <button type="submit" className="btn btn-primary">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>

      <div>
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
            </tr>
          </thead>
          <tbody>
            {cadastro.map((item) => {
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
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cadastro;
