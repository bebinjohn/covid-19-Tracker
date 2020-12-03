import React,{Component} from 'react';
import axios from 'axios';
import Layout from '../Layout/Layout';
import Charts from "../Charts//Charts";
import  {Form,FormGroup,Label,Input}from 'reactstrap';
import styles from './CountryPicker.module.css';
class CountryPicker extends Component{
    state={
        data:null,
        selected:null,
        count:null
    }
    componentDidMount(){
        axios.get("https://covid19.mathdro.id/api/countries")
        .then(response=>{
            //console.log(response);
            this.setState({
                data:response.data.countries
            })
        })
    }
    chosencountry=(country)=>{
        if(country==="Global") {
            this.setState({
                count:country
            })
        }
        else {
        axios.get("https://covid19.mathdro.id/api/countries/"+country)
        .then(response=>{
           //console.log(response);
            this.setState({
                selected:response.data,
                count:country
            })
        })}}
        //const url='https://covid19.mathdro.id/api/countries/'+country;
        //console.log(url);
    
    render(){
        
    if(this.state.data){
        //console.log(this.state.data)
        const countries=this.state.data.map((country,index)=>{
            return(
            <option value={country.name} key={index}>{country.name}</option>
            );
           
        })
        //console.log(countries);
    return(
        <div>
            <Layout data={this.state.selected} country={this.state.count}/>
           <Form>
               <FormGroup className={[styles.select,"offset-4"]}>
                   <Label  className={styles.flag}> Select the country to display</Label>
                   <Input onChange={(event)=>this.chosencountry(event.target.value) }type="select" name="select">
                       <option value="Global">Global</option>
                   {countries}
                   </Input>
               </FormGroup>
           </Form>
           <Charts data={this.state.selected} country={this.state.count}/>
        </div>
    )}
    else return (<div></div>);
}}
export default CountryPicker;