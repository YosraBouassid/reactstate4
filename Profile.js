import React, { Component } from 'react'

export class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    componentDidMount = () => {
        setInterval(() => {
          this.setState({ count: this.state.count+1 });
      }, 1000)
      }
    render() {
        return (
            <div>
            <h1>
                {this.props.person.fullName}
            </h1>
            <h3>
                {this.props.person.bio}
            </h3>
            <img src={this.props.person.imgSrc} alt={this.props.person.fullName} style={{height:300}}/>
            <h2>
                {this.props.person.profession}
            </h2>
            <p>
                {`times the component did mount ${this.state.count}`}
            </p>
            
            </div>
        )
    }
}

export default Profile
