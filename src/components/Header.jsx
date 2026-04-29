export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a 
  className="d-block text-center fw-bold fs-3 text-primary my-4 pb-2 border-bottom border-3"
  href="/"
>
  🖥 Equipamento
</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link fw-bold fs-5 text-dark" href="/listing">
                📋 Listing
              </a>
            </div>
        </div>
    </nav>
  );
}