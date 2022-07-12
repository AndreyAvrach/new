import React, { Component } from "react";
 
import axios from "axios";
 
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null
    };
  }
 
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      this.setState({
        users: response.data.map(item => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
            </tr>
          );
        })
      });
    });
  }
 
  render() {
    if (!this.state.users) {
      return null;
    } else {
      return (
        <table>
          <tbody>{this.state.users}</tbody>
        </table>
      );
    }
  }
}
 
export default App;