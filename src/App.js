import React from 'react';

import { Card, Chart, CountryPicker } from './components'
import styles from './app.module.css'

// ***********************************************
// import {fetcData} from './api'
// class  App extends React.Component {
//     state = {
//         data: {},
//     }
   
// async componentDidMount (){
//     const fetchedDate = await fetcData()
//     console.log (fetchedDate)
//     this.setState ({data : fetchedDate}) 
// }     

// render (){
//   const {data}= this.state 

//   return ( 
//     <div className = {styles.container}>
//     <Card/>
//      <CountryPicker/>
//      <Chart/>
//     </div>
//   );
// }
// }
// export default App;
// ****************************************************



export default function App() {
  return (
    <div className = {styles.container}>
      
    <Card/> 
    <CountryPicker/>
    <Chart/>
      
    </div>
  )
}
