import React,{Component} from 'react';
//import Layout from './components/Layout/Layout';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Header from './components/Header/Header';
import styles from './App.module.css';

class App extends Component{
  
  render(){
    return(
      
      <div className={styles.body} >
          <header>
            <Header/>
           <CountryPicker/>
          </header>
      </div>
     
    );
  }
  
}

export default App;
