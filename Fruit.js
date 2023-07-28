import React, {Component} from 'react';
class Frt extends Component{
  constructor(){
    super();
    this.state={fruit:"orange"};
	}
  render(){
    return(
    <div>
      <h1 align="center" >APPLICATION</h1>
		<h1>I Love {this.state.fruit} fruit</h1>
    </div>
    )
  }
}
export default Frt;