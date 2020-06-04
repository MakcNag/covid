import React , {useState, useEffect } from 'react'
import { fetcData } from '../../api'
import CountUp from 'react-countup';


// const Card =  ( {data: {confirmed, recovered}}) => {
//     if (!confirmed) {
//         return ''
//     }
//     return (
//         <div>
//             <h1>{confirmed.value}</h1>
//         </div>
//     )
// }


const Card = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchedDate = async () => {
            const resault = await fetcData();

            setData(resault);
        };

        fetchedDate();
    }, []);


    if (!data.confirmed) {
        return 'Loading ... '
    }
    return (
        <div>
            <h1>COVID-19</h1>
            <h2>Infected</h2>

            <CountUp start={0} end={data.confirmed.value} duration={2.75} separator="," />
            <h2>Recovered</h2>
            <p>{new Date(data.lastUpdate).toDateString()}</p>
            <CountUp start={0} end={data.recovered.value} duration={2.75} separator="," />

            <h2>Deaths</h2>
            <p>{new Date(data.lastUpdate).toDateString()}</p>
            <CountUp start={0} end={data.deaths.value} duration={2.75} separator="," />

        </div>
    )
}

export default Card

