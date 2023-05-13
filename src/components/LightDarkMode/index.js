// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  ClickMe = () => {
    this.setState(prevState => ({isDarkMode: !prevState}))
  }

  render() {
    const {isDarkMode} = this.state
    const clsName = isDarkMode ? 'container' : 'cont'
    const a = isDarkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="page">
        <div className={clsName}>
          <h1>Click To Change Mode</h1>
          <button type="button" className="but" onClick={this.ClickMe}>
            {a}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
