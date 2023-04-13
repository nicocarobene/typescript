import { SubResponseFromApi, Sub } from "../types"



export const getAllSubs =()=>{
    return fetchSubs().then(mapFromApiToSubs)
}
const fetchSubs= (): Promise<SubResponseFromApi>=>{
    return fetch('http://localhost:3004/post')
      .then(res=> res.json())
  }

const mapFromApiToSubs= (ApiResponse: SubResponseFromApi): Array<Sub> =>{
    return ApiResponse.map(subfromApi =>{
      const {
        nick,
        months: subMonths,
        profileUrl: avatar,
        description
      } = subfromApi

      return{
        nick,
        description,
        subMonths,
        avatar
      }
    })
  }
