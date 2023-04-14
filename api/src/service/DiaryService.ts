import diaryData from '../../diaryData.json'
import {  NonSensitiveInfoDiaryEntry } from '../../definition'

// DiaryEntry, NewDiaryEntry
// : Array<DiaryEntry>
const getEntries= () =>{
    
    const result = ()=>{ return fetch('http://localhost:3000/db')
        .then(res=> res.json())
        .then(json=> {return json.post})
    }
    result().then(resp=> console.log(resp))
    
}

const getNonSensitiveEntries = (): Array<NonSensitiveInfoDiaryEntry> =>{
    return diaryData.post.map(({id,date,weather,visibility})=>{
        return {
            id,
            date,
            weather,
            visibility
        }
    })
}

const addEntry= ()=> []

export default{
    getNonSensitiveEntries,
    getEntries,
    addEntry
}
