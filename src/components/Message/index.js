import {Component} from 'react'
import './index.css'

class Message extends Component {
  state = {isValue: true}
  onLoginButton = () => {
    this.setState(prevState => ({isValue: !prevState.isValue}))
  }
  render() {
    const {isValue} = this.state
    const headingText = isValue ? 'Please Login' : 'Welcome User'
    const buttonText = isValue ? 'Login' : 'Logout'
    return (
      <div className="bg-container">
        <div className="cart-container">
          <h1 className="heading">{headingText}</h1>
          <button onClick={this.onLoginButton} className="btn-1">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default Message
