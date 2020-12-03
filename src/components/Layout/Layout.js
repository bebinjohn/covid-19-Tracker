import React, { Component } from 'react';
import Cards from '../Cards/Cards';
import axios from 'axios';
class Layout extends Component{
  state={
    data: null
  }
 async componentDidMount(){
     axios.get(" https://covid19.mathdro.id/api")
     .then(response=>{
      // console.log(response.data)
       this.setState({
         data:response.data
          })
     })
   }
    render(){
      //console.log(this.props.data);
       //console.log(this.props.country)
       
      if(this.props.country===null && this.state.data!=null){
        return (
          <div >
            <Cards data={this.state.data} />
            
            
          </div>
        );}
        else if(this.props.country==="Global" && this.state.data!==null){
          return(
            <div >
            <Cards data={this.state.data} />
            
            
          </div>
          );
        }
        else if(this.props.country!=="Global" && this.state.data!==null){
          return(
          <div >
            <Cards data={this.props.data} />
            </div>);
        }
        
        else
        return(
          <div>
          </div>
        )
      }
}
 export default Layout;