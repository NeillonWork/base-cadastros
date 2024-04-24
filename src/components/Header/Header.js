import { Link } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <Link to="/" class="navbar-brand">
          Fornecedores
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" class="nav-link active" aria-current="page">
                Minha lista
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/cadastro" class="nav-link">
                Cadastro
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
