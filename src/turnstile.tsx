import { useRef, useState } from "react";
import { handleSubmit, verifyForm } from "./submitContract";
import { Turnstile } from "@marsidev/react-turnstile";

function TurnstileForm() {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [resetTurnstile, setResetTurnStile] = useState(true);
  const [isButtonVisible, setButtonVisible] = useState(false);
  const turnstileRef = useRef(null);

  return (
    <div>
      {isFormVisible && (
        <h2
          className="text-uppercase text-center text-secondary mb-5"
          data-aos="fade-up"
        >
          <span style={{ color: "rgb(255, 255, 255)" }}>
            Entre em contato abaixo!
          </span>
        </h2>
      )}
      <div
        className="alert alert-success mb-3 mx-auto"
        role="alert"
        id="alertbox"
      >
        <span>* Complete todos os campos.</span>
      </div>
      {isFormVisible && (
        <div>
          <form method="POST">
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                id="name-2"
                name="name"
                placeholder="Nome"
              ></input>
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                id="email-2"
                name="email"
                placeholder="Email"
              ></input>
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="message-2"
                name="message"
                rows={6}
                placeholder="Mensagem"
              ></textarea>
            </div>
            <div>
              {" "}
              <div className="container mb-3">
                <div className="row col-md-8 mx-auto">
                  {resetTurnstile && (
                    <Turnstile
                      ref={turnstileRef}
                      siteKey={import.meta.env.VITE_SITEKEY}
                      onSuccess={() => setButtonVisible(true)}
                    />
                  )}
                </div>
              </div>
              {isButtonVisible && resetTurnstile && (
                <div className="container" data-aos="fade-up">
                  <div className="row">
                    <div className="col-md-10 mx-auto">
                      <button
                        className="btn btn-primary w-100"
                        id="submit-button"
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          setResetTurnStile(false);
                          setTimeout(() => {
                            setButtonVisible(false);
                            setResetTurnStile(true);
                          }, 0);
                          if (verifyForm() === true) {
                            handleSubmit().then(() => {
                              setResetTurnStile(false);
                              setIsFormVisible(false);
                              setButtonVisible(false);
                            });
                          }
                        }}
                        style={{ background: "rgb(152,67,173)" }}
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default TurnstileForm;
