import React from "react";

export default function Login() {

   let width=window.innerWidth
   let height=window.innerHeight

  return (
    <>
      <div id="LoginContainer">
        <div id="LoginBox">
          <div id="LoginLeft"  style={{width:width<700?"100%":"50%"}} >
            <h1>Login</h1>
            <label id="inputContainer">
              <input type="text" placeholder="Enter username.." />
              <input type="password" placeholder="Enter password.." />
            </label>
            <div id="ForgetContainer">
              <div id="checkBoxContainer">
                <div>
                  <input type="checkbox" />
                </div>
                <div style={{ width: "100%" }}>Remember me</div>
              </div>
              <p>Forget password?</p>
            </div>

            <div id="btnContainer">
              <button id="LoginButton">Login</button>
            </div>

            <div id="SignupText">
              <div>
                Don't have a account?<b>Signup</b>{" "}
              </div>
            </div>
          </div>
          <div id="LoginRight"  style={{display:width<700?"none":"flex"}}>
            <img src="https://cdn.dribbble.com/userupload/14898990/file/original-ba68e98ea10e1867e831884c3b153387.png?resize=2048x1536&vertical=center "/>
          </div>
        </div>
      </div>
    </>
  );
}
