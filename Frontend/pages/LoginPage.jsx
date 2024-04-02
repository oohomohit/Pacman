import React from "react";
import { useGame } from "../src/contexts/GameContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { userName, setUserName, enroll, setEnroll, phone, setPhone } =
    useGame();
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    navigate("start");
  }

  return (
    <section className="vh-100 w-100" style={{ backgroundColor: "yellow" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div
              className="card"
              style={{
                borderRadius: "1rem",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <div className="row">
                <div className="image-icon">
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.v0A2yxPF5gTfSA7l_gKcDgHaF7&pid=Api&P=0&h=180"
                    alt="pacmanimage"
                    // className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        ></i>
                      </div>

                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        <strong>Enter Details to Play Game</strong>
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          value={phone}
                          onChange={(e) =>
                            setUserName(e.target.value.toUpperCase())
                          }
                          placeholder="vidya_sagar"
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          <strong>Username</strong>
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          placeholder="21UCS108"
                          value={enroll}
                          onChange={(e) =>
                            setEnroll(e.target.value.toUpperCase())
                          }
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          <strong> Enrollment</strong>
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          value={userName}
                          onChange={(e) =>
                            setPhone(e.target.value.toUpperCase())
                          }
                          placeholder="6201427621"
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          <strong>Phone No.</strong>
                        </label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                          onClick={handleClick}
                        >
                          Enter
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
