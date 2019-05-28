import React, { Component } from 'react';

class Signin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sign_in_form: {
        email: '',
        password: '',
      }
    }
  }

  onSignInFromValueChange (event, field) {
    const val = event.target.value
    let copy = JSON.parse(JSON.stringify(this.state))
    copy.sign_in_form[field] = val
    this.setState(copy)
  }

  login() {
    const { email, password } = this.state.sign_in_form
    if (!email || !password) {
      alert('表单信息没有填写完整')
    }
  }

  render () {
    return (
      <div className="container">
        <div className="sign_up">
          <h1>用户登录</h1>
          <p> <input onChange={(e) => { this.onSignInFromValueChange(e, 'email')}} value={this.state.sign_in_form.email} className="middle" type="text" placeholder="Email" /> </p>
          <p> <input onChange={(e) => { this.onSignInFromValueChange(e, 'password')}} value={this.state.sign_in_form.password} className="middle" type="password" placeholder="密码" /> </p>
          <p>
            <input onClick={() => { this.login() }} className="middle-button" type="submit" value="登录"/>
            {/* <a href="javascript:;" onClick={() => { this.goSignUp() }}>去注册 >> </a> */}
          </p>
        </div>
      </div>
    )
  }
}

export default Signin;