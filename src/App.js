import React, { Component } from 'react'
import './App.css';
import Button from '@material-ui/core/Button';
import UserTable from './components/UserTable';
import Container from '@material-ui/core/Container'
import axios from 'axios'
import NewModal from './components/NewModal'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users : [],
      newmodalOpen : false,
      currentUser:""
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleNewOpen =this.handleNewOpen.bind(this)
    this.handleNewClose =this.handleNewClose.bind(this)
    this.handleNewSubmit =this.handleNewSubmit.bind(this)
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(data => {
      console.log(data.data)
      this.setState({users : data.data})
    }) 
  }

  handleDelete(id){
    const newUsers = this.state.users.filter(user=>{
      return user.id !== id
    })
    this.setState({users:newUsers})
  }

  handleNewOpen = () => {
    this.setState({newmodalOpen:true})
  };

  handleNewClose = () => {
    this.setState({newmodalOpen:false})

  };


  handleNewSubmit(name,username,email,phone,website){
        if(!name || !username || !email || !phone || !website ){
          return null
        }
     
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            name,
            username,
            email,
            phone,
            website
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
      .then((response) => response.json())
      .then((json) =>{
        this.setState((prevState)=>{
          return({
            users : [...prevState.users,json]
          })
        })
        this.setState({
          newmodalOpen:false
        })
      });
  }

  

  render(){
      return (
        <div className="App">  
          <Button 
            variant="contained" 
            style={{
              marginBottom:20
            }}
            onClick={this.handleNewOpen}>
              <b style={{
                fontSize:20,
              }} >Add New User</b>
          </Button> 
          <NewModal 
            open={this.state.newmodalOpen} 
            handleClose = {this.handleNewClose}
            handleSubmit={this.handleNewSubmit}
          /><br/>
          <Container maxWidth="lg">
            <UserTable 
             users={this.state.users} 
             handleDelete={this.handleDelete}
            />
          </Container>
        </div>
      );
  }
 
}

export default App;
