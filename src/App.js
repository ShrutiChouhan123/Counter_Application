import { Card, Button,Alert} from 'react-bootstrap';
import React from 'react';



class UsingBootsrap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      // show:false
      flag:false,
      dec:false,
    }

  }

  Increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  Decrement = () => {
    if(this.state.count===0){
      //  alert("decrement over")
      this.setState({dec:true})
      this.setState({flag:false})
    }
    else{
      this.setState({ count: this.state.count - 1 })
    }
   
  }
  Reset = () => {
  //  this.setState({show:false})
    this.setState({flag:true})
    this.setState({dec:false})
    this.setState({ count: 0 })
  
  }


  render() {
    return (
      <>
       {/* {this.state.show ?<Alert>this is alert</Alert>:'' } */}
       {this.state.flag ? <Alert class="alert alert-success">Reset All the data</Alert>: ''}
       {this.state.dec ? <Alert class="alert alert-danger">Decrement Over</Alert> : ''}
        <center><h1 style={{ marginTop: "10px" }}>Counter Application</h1></center>
        
        <Card style={{ width: "30%", background: "yellow", marginLeft: "300px", marginTop: "100px", fontSize: "40px" }} >
          <Card.Body style={{ marginLeft: "100px" }}>{this.state.count}</Card.Body>

          <Button variant="outline-success" onClick={this.Increment}>Increment</Button>{' '}
          <Button variant="outline-danger" onClick={this.Decrement}>Decrement</Button>{' '}
          <Button variant="outline-secondary" onClick={this.Reset}>Reset
          </Button>{' '}
          
        </Card>
       
        
      </>
    )
  }
}

export default UsingBootsrap;