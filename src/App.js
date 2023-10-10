import { Card, Button} from 'react-bootstrap';
import React from 'react';



class UsingBootsrap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      show:true
    }

  }

  Increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  Decrement = () => {
    if(this.state.count==0){
       alert("decrement over")
    }
    else{
      this.setState({ count: this.state.count - 1 })
    }
   
  }
  Reset = () => {
    alert("reset data")
    this.setState({ count: 0 })
  }


  render() {
    return (
      <>
        <center><h1 style={{ marginTop: "10px" }}>Counter Application</h1></center>
        
        <Card style={{ width: "30%", background: "yellow", marginLeft: "300px", marginTop: "100px", fontSize: "40px" }} >
          <Card.Body style={{ marginLeft: "100px" }}>{this.state.count}</Card.Body>

          <Button variant="outline-success" onClick={this.Increment}>Increment</Button>{' '}
          <Button variant="outline-danger" onClick={this.Decrement}>Decrement</Button>{' '}
          <Button variant="outline-secondary" onClick={this.Reset}>Reset</Button>{' '}

        </Card>

        
      </>
    )
  }
}

export default UsingBootsrap;