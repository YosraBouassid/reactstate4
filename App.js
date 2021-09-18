import React, { Component } from 'react'
import picture from './yosra.jpg'
import Profile from './Profile'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      person:{
        fullName:"Yosra Bouassida",
        bio: "computer engineering",
        imgSrc: picture,
        profession: "Software engineer"
        },
    isShow: false,
    count:0
    }
  }
  toggle = () => {
    this.setState({isShow:!this.state.isShow})
    
  }
  
 

  render() {
    return (
      <div>
        <h1>Profile </h1>
        <button onClick={this.toggle}>{this.state.isShow ? "Hide Profile " : " Show Profile"}</button>
        {
          
          this.state.isShow === true ? <Profile person={this.state.person}/> : "\n click the button to show the profile"
        }
        
      </div>
    )
  }
}

export default App

