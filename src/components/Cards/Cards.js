import React from 'react';
import  {Card,CardBody,CardFooter,CardTitle,CardText,CardHeader,CardSubtitle} from 'reactstrap';
import styles from './Cards.module.css';
import  Countup from 'react-countup';
const Cards=(props)=>{
    let data=props.data;
    //console.log(data);
   const confirmed=data.confirmed.value;
   const recoverd=data.recovered.value;
   const death=data.deaths.value;
   const date=new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'})
   .format(new Date(Date.parse(data.lastUpdate)));
    return(
        <div className="container ">
            <div className="row d-none d-sm-block">
        <span className={styles.card}>
            <span className="col-sm-4">
                <Card  >
                    <CardHeader style={{background:"cyan",
                                        color:"black",
                                        fontFamily:"cursive"}}>
                        Infected
                    </CardHeader>
                    <CardBody style={{background:"lightcyan"}}>
                        <CardTitle style={{
                            fontFamily:"Kameron",
                            fontWeight:"bold",
                            fontSize:"120%"
                        }}>
                            <Countup
                            start={0}
                            end={confirmed}
                            duration={1}
                            separator=","/>
                        </CardTitle>
                        <CardSubtitle style={{
                            fontFamily:"cursive"
                        }}>
                            {date}
                        </CardSubtitle>
                        <CardText style={{
                            fontFamily:"cursive"
                        }}>
                            Number of active cases of covid-19
                        </CardText>
                    </CardBody>
                    <CardFooter style={{background:"cyan"}}/>
                </Card>
            </span>
            <span className="col-sm-4">
                <Card>
                    <CardHeader style={{background:"green",
                color:"white",
                fontFamily:"cursive"}}>
                        Recovered
                    </CardHeader>
                    <CardBody style={{background:"#E0F9C9"}}>
                        <CardTitle style={{
                            fontFamily:"Kameron",
                            fontWeight:"bold",
                            fontSize:"120%"
                        }}>
                        <Countup
                            start={0}
                            end={recoverd}
                            duration={1}
                            separator=","/>
                        </CardTitle>
                        <CardSubtitle style={{
                            fontFamily:"cursive"
                        }}>
                        {date}
                        </CardSubtitle>
                        <CardText style={{
                            fontFamily:"cursive"
                        }}>
                            Number of recovered cases of covid-19
                        </CardText>
                    </CardBody>
                    <CardFooter style={{background:"green"}}/>
                </Card>
            </span>
            <span className="col-sm-4">
                <Card>
                    <CardHeader style={{background:"red",
                color:"white",
                fontFamily:"cursive"}}>
                        Deaths
                    </CardHeader>
                    <CardBody style={{background:"#FED8D1"}}>
                        <CardTitle style={{
                            fontFamily:"Kameron",
                            fontWeight:"bold",
                            fontSize:"120%"
                        }}>
                        <Countup
                            start={0}
                            end={death}
                            duration={1}
                            separator=","/>
                        </CardTitle>
                        <CardSubtitle style={{
                            fontFamily:"cursive"
                        }}>
                        {date}
                        </CardSubtitle>
                        <CardText style={{
                            fontFamily:"cursive"
                        }}>
                            Number of death cases of covid-19
                        </CardText>
                         </CardBody>
                    <CardFooter style={{background:"red"}}/>   
                </Card>
            </span>
            </span>
            </div>
            <div className="container d-block d-sm-none ">
            <div className="row">
        <span >
            <span className="col-12">
                <Card>
                <CardHeader style={{background:"cyan",
                                        color:"black",
                                        fontFamily:"cursive"}}>
                        Infected
                    </CardHeader>
                    <CardBody style={{background:"lightcyan"}}>
                        <CardTitle style={{
                            fontFamily:"Kameron",
                            fontWeight:"bold",
                            fontSize:"120%"
                        }}  >
                        <Countup
                            start={0}
                            end={confirmed}
                            duration={1}
                            separator=","/>
                        
                        </CardTitle >
                        <CardSubtitle style={{
                            fontFamily:"cursive"
                        }}>
                        {date}
                        </CardSubtitle>
                        <CardText style={{
                            fontFamily:"cursive"
                        }}>
                            Number of active cases of covid-19
                        </CardText>
                    </CardBody>
                    <CardFooter style={{background:"cyan"}}/>
                </Card>
            </span>
            <span className="col-12">
                <Card>
                <CardHeader style={{background:"green",
                color:"white",
                fontFamily:"cursive"}}>
                        Recovered
                    </CardHeader>
                    <CardBody style={{background:"#E0F9C9"}}>
                        <CardTitle style={{
                            fontFamily:"Kameron",
                            fontWeight:"bold",
                            fontSize:"120%"
                        }}>
                        <Countup
                            start={0}
                            end={recoverd}
                            duration={1}
                            separator=","/>
                        </CardTitle>
                        <CardSubtitle style={{
                            fontFamily:"cursive"
                        }}>
                        {date}
                        </CardSubtitle>
                        <CardText style={{
                            fontFamily:"cursive"
                        }}>
                            Number of recovered cases of covid-19
                        </CardText>
                    </CardBody>
                    <CardFooter style={{background:"green"}}/>
                </Card>
            </span>
            <span className="col-12">
                <Card>
                <CardHeader style={{background:"red",color:"white",
                                        fontFamily:"cursive"}}>
                        Deaths
                    </CardHeader>
                    <CardBody style={{background:"#FED8D1"}}>
                        <CardTitle style={{
                            fontFamily:"Kameron",
                            fontWeight:"bold",
                            fontSize:"120%"
                        }}>
                        <Countup
                            start={0}
                            end={death}
                            duration={1}
                            separator=","/>
                        
                        </CardTitle>
                        <CardSubtitle style={{
                            fontFamily:"cursive"
                        }}>
                        {date}
                        </CardSubtitle>
                        <CardText style={{
                            fontFamily:"cursive"
                        }}>
                            Number of death cases of covid-19
                        </CardText>
                    </CardBody>
                    <CardFooter style={{background:"red"}}/>
                </Card>
            </span>
            </span>
            </div>
            </div>
            </div>
            
    )
}
export default Cards;