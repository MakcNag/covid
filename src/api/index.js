import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

export const fetcData = async () => {
    try {

        // const response = await axios.get(url)
        // console.log (response)
        
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url)
      
             // const modifiedDatat = {            
            // confirmed: data.confirmed,
            // recovered: data.recovered,
            // deaths: data.deaths,
            // lastUpdate: data.lastUpdate
         // ******* next
                // confirmed,
                // recovered,
                // deaths,
                // lastUpdate  
         // *******        
        // }
        // return modifiedDatat;

        // *******  next
         return  { confirmed, recovered, deaths, lastUpdate }
       

    } catch (error) {

    }
}