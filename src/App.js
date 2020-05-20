import React, { Component } from "react";
import "./styles.css";

class App extends Component{
  constructor(){
super()
this.state={
isLoggedIn: true
}
  }
render(){
let wordDisplay
if(this.state.isLoggedIn){
  wordDisplay = "yes"
}else{wordDisplay="out"}
return(< h3 > is the user logged {wordDisplay} </h3>)



}
}
 export default App