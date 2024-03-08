import React from "react";
import "./Auth.css";
import LoginComponment from "../../components/Auth/Login";
import RegisterComponent from "../../components/Auth/Register";

const AuthPage = () => {
  return (
    <>
      <div className=" d-flex mt-20 c:\Users\ford_\Downloads\Todo.PNG justify-content-center align-middle">
        <div className="align-self-center ">
          <div class="col-12 text-center align-self-center py-5 px-5">
            <h6 class="mb-0 pb-3">
              <span>Log In </span>
              <span>Sign Up</span>
            </h6>
            <input
              class="checkbox"
              type="checkbox"
              id="reg-log"
              name="reg-log"
            />
            <label for="reg-log"></label>
            <div class="card-3d-wrap mx-auto">
              <div class="card-3d-wrapper">
                <div class="card-front">
                  <LoginComponment />
                </div>
                <div class="card-back">
                  <RegisterComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AuthPage;
