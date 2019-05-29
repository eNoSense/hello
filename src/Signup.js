import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AV from 'leancloud-storage';

class Signup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sign_up_form: {
        nickname: '',
        email: '',
        password: '',
        confirm_password: '',
      },
    }
  }

  onValueChange (event, field) {
    const val = event.target.value
    let copy = JSON.parse(JSON.stringify(this.state))
    copy.sign_up_form[field] = val
    this.setState(copy)
  }

  onSubmitSignUpForm () {
    const {nickname, email, password, confirm_password} = this.state.sign_up_form
    if (!email || !password || !confirm_password || !nickname) {
      alert('注册信息不能为空！')
    }
    if (password !== confirm_password) {
      alert('两次密码填写不一致！')
    }
    //
    const user = new AV.User()
    user.setUsername(nickname)
    user.setEmail(email)
    user.setPassword(password)
    user.signUp().then((loginedUser) => {
      console.log('loginedUser')
      console.log(loginedUser)
      this.props.history.push('/index');
    }, (error) => {
      alert(JSON.stringify(error))
    })
  }

  render () {
    return (
      <div className="container">
        <div className="sign_up">
          <h1>用户注册</h1>
          <p> <input onChange={(e) => { this.onValueChange(e, 'nickname')}} value={this.state.sign_up_form.nickname} className="middle" type="text" placeholder="昵称" /> </p>
          <p> <input onChange={(e) => { this.onValueChange(e, 'email')}} value={this.state.sign_up_form.email} className="middle" type="text" placeholder="Email" /> </p>
          <p> <input onChange={(e) => { this.onValueChange(e, 'password')}} value={this.state.sign_up_form.password} className="middle" type="password" placeholder="密码" /> </p>
          <p> <input onChange={(e) => { this.onValueChange(e, 'confirm_password')}} value={this.state.sign_up_form.confirm_password} className="middle" type="password" placeholder="重复密码" /> </p>
          <p> <input onClick={() => { this.onSubmitSignUpForm() }} className="middle-button" type="submit" value="注册"/> </p>
        </div>
      </div>
    )
  }
}

export default withRouter(Signup);
