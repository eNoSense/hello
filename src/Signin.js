import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AV from  'leancloud-storage';

class Signin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sign_in_form: {
        nickname: '',
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
    const { nickname, password } = this.state.sign_in_form
    if (!nickname || !password) {
      alert('表单信息没有填写完整')
    }
    AV.User.logIn(nickname, password)
      .then(user => {
        console.log(user)
        this.setState({
          current_user: user,
        })
        this.props.history.push('/index')
      }, error => {
        alert(JSON.stringify(error))
      })
  }

  render () {
    return (
      <div className="container">
        <div className="sign_up">
          <h1>用户登录</h1>
          <p> <input onChange={(e) => { this.onSignInFromValueChange(e, 'nickname')}} value={this.state.sign_in_form.email} className="middle" type="text" placeholder="用户名" /> </p>
          <p> <input onChange={(e) => { this.onSignInFromValueChange(e, 'password')}} value={this.state.sign_in_form.password} className="middle" type="password" placeholder="密码" /> </p>
          <p>
            <input onClick={() => { this.login() }} className="middle-button" type="submit" value="登录"/>
            <Link to="/signup" >去注册 >> </Link>
          </p>
        </div>
      </div>
    )
  }
}

export default withRouter(Signin);
