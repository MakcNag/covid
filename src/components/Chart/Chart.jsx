import React , {useState, useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2'

import styles from './Chart.module.css';
import { fetchDailyDate } from '../../api'

export default function Chart() {
const [dailyData, setdailyData] = useState ([])

useEffect(() => {
    const ftchApi = async () =>{
        setdailyData( await fetchDailyDate());
   ;
 
    }
    
    ftchApi()
    
}, [])

console.log (dailyData)
const LineChart = (
    dailyData.length ? (
    <Line
    data = {{
        labels: dailyData.map(({ date }) => date),
               datasets: [{
        data: dailyData.map(({ confirmed }) => confirmed) ,
          label: 'infected',
          borderColor: '#3333ff',
          fill: true 
        }, {
            data: dailyData.map(({ deaths }) => deaths) ,
            label: 'Deaths',
            borderColor: 'read',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true 

        }]

    }}
    />
    ): null
)
    return (
       <div className = {styles.container}>

{LineChart}

       </div>
    )
}
