import React from 'react'
import UserContext from '../utils/UserContext'

class UserClass extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)

    this.state = {
      count: 1,
      userInfo: {
        name: 'name',
        login: '',
      },
    }
  }

  async componentDidMount() {
    console.log('mount')
    const api = await fetch('https://api.github.com/users/nmarkapuram')
    const data = api.json()
    this.setState({
      userInfo: data,
    })
  }

  componentDidUpdate() {
    console.log('update')
  }

  componentWillUnmount() {
    console.log('unmount')
  }

  render() {
    return (
      <div>
        <div>
          <span>Count: {this.state.count}</span>
          <button
            onClick={() => {
              //Never update state variables directly
              this.setState({
                count: this.state?.count + 1,
              })
            }}>
            ++
          </button>
          <span> Name: {this.state?.userInfo?.login} </span>
          <span> Email: {this.props.name} </span>
          <UserContext.Consumer>
              {({loggedInUser}) => (<h1>{loggedInUser}</h1>)}
          </UserContext.Consumer>
        </div>
      </div>
    )
  }
}

export default UserClass
