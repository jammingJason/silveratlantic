import React from "react";

const Login = () => {


    return <><div className="container">
        <form name='frmMain' id="formMain">
            <div className="row">
                <div className="col col-12 text-start">
                    <label for="email" class="form-label">Email:</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="email" aria-describedby="basic-addon3 basic-addon4" />
                    </div>
                </div>
            </div>
        </form >
    </div ></>
}

export default Login;