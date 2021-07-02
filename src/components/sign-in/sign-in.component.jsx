import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = e => {
      e.preventdefault();

      this.setState({ email: '', password: ''})
  }


  handleChange = e =>{
      const {value , name} = e.target;

      this.setState({[name]: value})
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit = {this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange = {this.handleChange}
            value={this.state.email}
            label = 'Email'
            required
          />

          <FormInput
            name="password"
            type="password"
            handleChange = {this.handleChange}
            label = 'Password'
            value={this.state.password}
            required
          />
          <div className='buttons'>
            <CustomButton name="button" type="submit"> Sign In </CustomButton>
            <CustomButton name="button" onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;