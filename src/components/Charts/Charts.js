import React,{Component} from 'react';
import axios from 'axios';
import {Line,Bar}from 'react-chartjs-2';
import styles from './Charts.module.css';
class  Charts extends Component{
    state={
        data:null
    }
    componentDidMount(){
            axios.get("https://covid19.mathdro.id/api/daily")
            .then(response=>{
               // console.log(response);
                this.setState({
                    data:response.data
                })
            })
    }
    render(){
       // console.log(this.props.data);
        if ( this.props.data===null&&this.state.data){
        const confirmed=this.state.data.map((confirm)=>{
            return(
                confirm.totalConfirmed
            );
        })
        const death=this.state.data.map((d)=>{
            return(
                d.deaths.total
            );
        })
        const date=this.state.data.map((d)=>{
            return (
                d.reportDate
            );
        })
        const Linechat=(
            <Line
            options={{maintainAspectRatio:false}} 
            data={{
                labels:date,
                datasets:[{
                    data:confirmed,
                    label:"Infected",
                    borderColor:"#3333ff",
                    fill:true
                },{
                    data:death,
                    label:"Deaths",
                    borderColor:"red",
                    backgroundColor:"rgba(255,0,0,0.5)",
                    fill:true
                }]

            }}/>
        );
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 offset-1">
            <h1 className={styles.chart}>
                {Linechat}
            </h1>
            </div>
            </div>
        </div>
    )}
    else if(this.props.country==="Global"&&this.state.data){
        const confirmed=this.state.data.map((confirm)=>{
            return(
                confirm.totalConfirmed
            );
        })
        const death=this.state.data.map((d)=>{
            return(
                d.deaths.total
            );
        })
        const date=this.state.data.map((d)=>{
            return (
                d.reportDate
            );
        })
        const Linechat=(
            <Line 
            options={{maintainAspectRatio:false}}
            data={{
                labels:date,
                datasets:[{
                    data:confirmed,
                    label:"Infected",
                    borderColor:"#3333ff",
                    fill:true
                },{
                    data:death,
                    label:"Deaths",
                    borderColor:"red",
                    backgroundColor:"rgba(255,0,0,0.5)",
                    fill:true
                }]

            }}/>
        );
        
    return(
        <div >
            <div className="row">
                <div className="col-12 offset-1">
            <h1 className={styles.chart}>
                {Linechat}
                </h1>
            </div>
            </div>
        </div>
    )
    }
     if(this.props.country!=="Global"&&this.props.data){
         console.log(this.props.data);
        const confirmed=this.props.data.confirmed.value;
        const recovered=this.props.data.recovered.value;
        const deaths=this.props.data.deaths.value;
        const count=this.props.country;
        const barchart=(
            <Bar
                data={{
                    labels:["Infected","Recovered","Deaths"],
                    datasets:[{
                        label:"people",
                        backgroundColor:[
                            "cyan","green","red"
                        ],
                        data:[confirmed,recovered,deaths]

                    }]
                }}
                options={{
                    maintainAspectRatio:false,
                    legend:{display:false},
                    title:{display:true,text:"Current state in "+count}
                }}
            />
        );
        return(
            <div className="container">
            <div className="row">
                <div className="col-12 offset-1">
            <h1 className={styles.bar}>
                {barchart}
            </h1>
            </div>
            </div>
        </div>
        );
    }
    else{
        return(
            <div></div>
        );
    }
}}
export default Charts;