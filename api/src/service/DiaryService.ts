import diaryData from '../routes/diaryData.json'
import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../../definition'

const getEntries= (): Array<DiaryEntry> => diaryData 

const getNonSensitiveEntries = (): Array<NonSensitiveInfoDiaryEntry> =>{
    return diaryData.map(({id,date,weather,visibility})=>{
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
