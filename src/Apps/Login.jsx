import React from 'react';
import '../App.css';

function Login() {

    // const getDetails = () =>{
    //     return window.location.href='/register'
    // }

      const Validations =()=>{
        var dataUser = document.getElementById('user').value;         
        var dataPass = document.getElementById('pass').value; 
        
        if(dataUser.trim() == ""){
             document.getElementById("UserError").innerHTML= "Plesae Enter user name";                
        }else {
            document.getElementById("UserError").innerHTML= "";
        }

        if(dataPass.trim() == ""){
             document.getElementById("PassError").innerHTML= "Plesae Enter password";                
        }else {
            document.getElementById("PassError").innerHTML= "";
        }

        if(dataUser == "Surya" && dataPass == 1234){
             alert('Login Succefully.....!!');
        }else{
            alert('Invalid Crendentilas Please Enter valid Credentials....?')
        }

        console.log('dataUser',dataUser);
        console.log('dataPass',dataPass);
      }
    return (
        // <section className="vh-100">
        //     <div className="container-fluid h-custom">
        //         <div className="row d-flex justify-content-center align-items-center h-100">
        //             <div className="col-md-9 col-lg-6 col-xl-5">
        //                 <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
        //                     className="img-fluid" alt="Sample image"></img>
        //             </div>
        //             <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        //                 <form>
        //                     <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
        //                         <p className="lead fw-normal mb-0 me-3">Sign in with</p>
        //                         <button type="button" className="btn btn-primary btn-floating mx-1">
        //                             <i className="fab fa-facebook-f"></i>
        //                         </button>

        //                         <button type="button" className="btn btn-primary btn-floating mx-1">
        //                             <i className="fab fa-twitter"></i>
        //                         </button>

        //                         <button type="button" className="btn btn-primary btn-floating mx-1">
        //                             <i className="fab fa-linkedin-in"></i>
        //                         </button>
        //                     </div>

        //                     <div className="divider d-flex align-items-center my-4">
        //                         <p className="text-center fw-bold mx-3 mb-0">Or</p>
        //                     </div>

        //                     {/* <!-- Email input --> */}
        //                     <div className="form-outline mb-4">
        //                         <input type="email" id="form3Example3" className="form-control form-control-lg"
        //                             placeholder="Enter a valid email address" />
        //                         <label className="form-label" for="form3Example3">Email address</label>
        //                     </div>

        //                     {/* <!-- Password input --> */}
        //                     <div className="form-outline mb-3">
        //                         <input type="password" id="form3Example4" className="form-control form-control-lg"
        //                             placeholder="Enter password" />
        //                         <label className="form-label" for="form3Example4">Password</label>
        //                     </div>

        //                     <div className="d-flex justify-content-between align-items-center">
        //                         {/* <!-- Checkbox --> */}
        //                         <div className="form-check mb-0">
        //                             <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
        //                             <label className="form-check-label" for="form2Example3">
        //                                 Remember me
        //                             </label>
        //                         </div>
        //                         <a href="/forgot" className="text-body">Forgot password?</a>
        //                     </div>

        //                     <div className="text-center text-lg-start mt-4 pt-2">
        //                         <button type="button" className="btn btn-primary btn-lg"
        //                            >Login</button>
        //                         <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
        //                             className="link-danger" onClick={getDetails}>Register</a></p>
        //                     </div>

        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        //     <div
        //         className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        //         {/* <!-- Copyright --> */}
        //         <div className="text-white mb-3 mb-md-0">
        //             Copyright © 2020. All rights reserved.
        //         </div>
        //         {/* <!-- Copyright --> */}

        //         {/* <!-- Right --> */}
        //         <div>
        //             <a href="#!" className="text-white me-4">
        //                 <i className="fab fa-facebook-f"></i>
        //             </a>
        //             <a href="#!" className="text-white me-4">
        //                 <i className="fab fa-twitter"></i>
        //             </a>
        //             <a href="#!" className="text-white me-4">
        //                 <i className="fab fa-google"></i>
        //             </a>
        //             <a href="#!" className="text-white">
        //                 <i className="fab fa-linkedin-in"></i>
        //             </a>
        //         </div>
        //         {/* <!-- Right --> */}
        //     </div>
        // </section>

        <div>
              <div id="main">
        <div id="sun1">
            <div id="Tesctcontenmt">
                <h1>Design High Performence Emails in Minities</h1>
                <br/><br/>
                <p>GHgfdhgf hufrjfgrhj efhrf erhfhurhgrf. rhfurhgfvyr rhfurhgfu rjfhrg 4rhjhrfhrgf, rhjhfhrg hrfrf hfyr ! njerghfrf hjrfbfn ehfebf hegfbnrbf hdbf</p>
            </div>
        </div>
        <div id="sun2">
             <div id="Imagediv">
                <img id="myimg" src="https://www.euro-online.org/websites/orinsports/wp-content/uploads/sites/10/2021/01/Online.jpg" alt=""></img>
             </div>
             <div id="Logindiv">
                <h1>Login</h1>
             </div>
             <div id="formDiv">
                    <input type="text" name="user" id="user" placeholder="User Name Or Email id" ></input>
                    <p id="UserError"></p>
                    <br/><br/>
                    <input type="password" name="pass" id="pass" placeholder="Password"></input>
                    <p id="PassError"></p>
                    <br/><br/>
                    <a href="#"  style={{textDecoration:"none", float:"right"}} ><span id='forgot'>Forgot Password</span></a>
                    <br/><br/>
                    <button type="button" id="subbtn" onClick={Validations}>Login</button>
             </div><br/><br/>
             <div id="Anchordiv">
                  Didnt Have an Account ? <a href="#">Create an Account</a>
             </div>
        </div>
    </div>
        </div>

    )
}

export default Login;