import { useEffect } from "react";
import "aos/dist/aos.css";
import TurnstileForm from "./components/turnstile";
import mainApp from "./components/mainApp";

const App = () => {
  useEffect(() => mainApp(), []);

  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon.png" />
        <link rel="stylesheet" href="src/App.css" />
        <link rel="stylesheet" href="src/index.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700&amp;display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&amp;display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body
        id="page-top"
        data-bs-spy="scroll"
        data-bs-target="#mainNav"
        data-bs-offset="72"
      >
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        ></script>

        <nav
          className="navbar navbar-light navbar-expand-lg fixed-top bg-secondary text-uppercase"
          id="mainNav"
          style={{ background: "#270061" }}
        >
          <div className="container">
            <button
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              className="navbar-toggler text-white bg-primary navbar-toggler-right text-uppercase rounded"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars"></i>
            </button>
            <h1 style={{ textAlign: "center", cursor: "default" }}>Lunxi</h1>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li
                  className="nav-item mx-0 mx-lg-1"
                  style={{ textAlign: "center", cursor: "pointer" }}
                >
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    onClick={() => {
                      const section = document.getElementById("portfolio");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    projetos
                  </a>
                </li>
                <li
                  className="nav-item mx-0 mx-lg-1"
                  style={{ textAlign: "center", cursor: "pointer" }}
                >
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    onClick={() => {
                      const section = document.getElementById("about");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Sobre mim
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1"></li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="text-center text-white bg-primary masthead">
          <div className="container">
            <h1>Lunxi</h1>
            <hr
              className="star-light"
              style={{ transform: "scale(2)", marginTop: "80px" }}
            />
            <h2 className="font-weight-light mb-0" style={{ height: "0px" }}>
              3+ anos de experiência com JavaScript & TypeScript
              <br />
            </h2>
          </div>
        </header>
        <section id="portfolio" className="portfolio container">
          <h2
            className="text-uppercase text-center text-secondary mb-0"
            data-aos="fade-up"
          >
            <span style={{ color: "rgb(255, 255, 255)" }}>
              Projetos Oficiais
            </span>
          </h2>
          <hr
            data-aos="fade-up"
            className="star-light mb-5"
            style={{ marginTop: "69px" }}
          />
          <div className="row gy-4 row-cols-1 row-cols-md-2 d-flex">
            <div className="col" data-aos="slide-right">
              <div className="d-flex flex-column flex-lg-row">
                <div className="py-4 py-lg-0 px-lg-4">
                  <a
                    target="_blank"
                    href="https://github.com/Lunixyz/Astra-Luna"
                  >
                    <h4>Astra Luna</h4>
                  </a>
                  <p>
                    Um BOT de Discord com foco em melhorar minhas habilidades
                    com a library "Discord.js"
                  </p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="slide-left">
              <div className="d-flex flex-column flex-lg-row">
                <div className="py-4 py-lg-0 px-lg-4">
                  <a target="_blank">
                    <h4>Aridium API</h4>
                  </a>
                  <p>
                    Uma API RESTful para dados do BUFF163 & Dash Skins. (Em
                    desenvolvimento)
                  </p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="slide-right">
              <div className="d-flex flex-column flex-lg-row">
                <div className="py-4 py-lg-0 px-lg-4">
                  <a target="_blank" href="https://github.com/Lunixyz/Nitrogen">
                    <h4>Nitrogen</h4>
                  </a>
                  <p>
                    Um BOT de Discord que usa o Projeto Aridium como API para
                    buscar os melhores preços e descontos no BUFF163 & Dash
                    Skins.
                  </p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="slide-left">
              <div className="d-flex flex-column flex-lg-row">
                <div className="py-4 py-lg-0 px-lg-4">
                  <a target="_blank" href="https://github.com/Lunixyz/Ares-API">
                    <h4>Ares API</h4>
                  </a>
                  <p>
                    Uma API que tem a habilidade de obter dados como o status
                    dos servidores do Counter-Strike e várias informações da
                    Steam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="text-white bg-primary mb-0"
          id="about"
          style={{ background: "#54078d" }}
        >
          <div className="container">
            <h2
              className="text-uppercase text-center text-white"
              data-aos="flip-up"
            >
              Sobre mim
            </h2>
            <hr data-aos="flip-up" className="star-light mb-5" />
            <div className="row">
              <div className="col-lg-4 ms-auto">
                <p className="lead" data-aos="fade">
                  <span
                    style={{
                      color: "rgb(248, 225, 229)",
                      backgroundColor: "rgba(2, 2, 2, 0.06)",
                    }}
                  >
                    Tenho experiência com controle de versão (Git), otimização
                    de desempenho e escalabilidade, análise de código,
                    refatoração, monitoramento e depuração de aplicações em
                    produção, além de lidar com requisitos de
                    internacionalização e localização. Tenho habilidade em
                    explicar conceitos técnicos de forma clara e concisa.
                  </span>
                  <br />
                  <br />
                  <br />
                  <br />
                </p>
              </div>
              <div className="col-lg-4 me-auto" data-aos="fade">
                <p className="lead" data-aos="fade">
                  <span
                    style={{
                      color: "rgb(248, 225, 229)",
                      backgroundColor: "rgba(2, 2, 2, 0.06)",
                    }}
                  >
                    Também tenho uma experiência sólida em desenvolvimento
                    back-end com Node.js, conhecimento avançado em JavaScript e
                    TypeScript, sou familiarizado com Express.js e MongoDB,
                    tenho experiência em integração de APIs de terceiros e
                    código limpo e escalável.
                  </span>
                  <br />
                </p>
              </div>
            </div>
            <div className="text-center mt-4"></div>
          </div>
        </section>
        <section id="contact">
          <div className="container">
            <h2
              className="text-uppercase text-center text-secondary mb-0"
              data-aos="fade-up"
            >
              <span style={{ color: "rgb(255, 255, 255)" }}>
                E ai? Quer me contratar?
              </span>
            </h2>
            <hr data-aos="fade-up" className="star-light mb-5"></hr>
          </div>
          <div className="row d-flex justify-content-center" data-aos="fade-up">
            <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div className="card mb-5">
                <div
                  className="card-body p-sm-5"
                  style={{
                    borderColor: "rgb(107,18,195)",
                    background: "rgb(67,26,74)",
                  }}
                >
                  <TurnstileForm />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center text-white copyright py-4"
          style={{ background: "#0f0214" }}
        >
          <footer className="text-center py-4">
            <div className="col">
              <ul
                className="list-inline d-inline-block my-2"
                style={{ transform: "scale(2.5)" }}
              >
                <li className="list-inline-item me-4">
                  <div
                    className="bs-icon-circle bs-icon-primary bs-icon ao"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.location.href = "https://discord.gg/EH9nW2CT";
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-discord"
                    >
                      <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
                    </svg>
                  </div>
                </li>
                <li className="list-inline-item me-4">
                  <div
                    className="bs-icon-circle bs-icon-primary bs-icon"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.location.href = "https://github.com/Lunixyz";
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-github"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div
                    className="bs-icon-circle bs-icon-primary bs-icon"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.location.href = "https://twitter.com/akaLunx";
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-twitter"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                    </svg>
                  </div>
                </li>
              </ul>
            </div>
          </footer>
        </div>
        <div className="d-lg-none scroll-to-top position-fixed rounded">
          <a
            className="text-center d-block rounded text-white"
            onClick={() => {
              const section = document.getElementById("page-top");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <i className="fa fa-chevron-up"></i>
          </a>
        </div>
        <div
          className="modal text-center"
          role="dialog"
          tabIndex={-1}
          id="portfolio-modal-1"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
              <script src="assets/js/script.min.js"></script>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};
export { App };
