import React, { Component } from 'react';

class ForgotPass extends Component {

    constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
    };
  }

  render() {
    return (
      <div className='container-fluid h-custom'>
        <h2 style={{textAlign:'center'}}>Forgot Password</h2>
        <form style={{width:'100%'}} className='d-flex justify-content-center'>
          <div className="form-group" style={{width:'30%'}}>
             <label for="exampleInputEmail1">Email address</label>
             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email}></input>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
           </div> 
        </form> 
        <div className='d-flex justify-content-center'>
        <button type="button" className="btn btn-danger">Send</button>
        <button type="button" className="btn btn-danger">Send</button>


        </div>
       
      </div>
    );
  }
}

export default ForgotPass;
