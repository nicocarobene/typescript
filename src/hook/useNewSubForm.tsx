import { useReducer } from "react"
import { Sub } from "../types"

type FormReducerAction={
    type: 'change_value'
    payload: {
      inputName: string,
      inputValue: string
    }
  } | {
    type: 'clear'
  }

interface FormState{
    inputValues: Sub
 }
  
  const INITIAL_STATE = {
    nick: '',
    subMonths: 1,
    avatar: '',
    description: ''
  }
  
  
  const formReducer= (state:FormState['inputValues'], action: FormReducerAction)=>{
    switch(action.type){
      case 'change_value':
        const{inputName, inputValue} = action.payload
        return{
          ...state,
          [inputName]: inputValue
        }
      case 'clear':
        return INITIAL_STATE
  
      default: 
      return state
    }
  }


  const useNewSubForm = ()=>{
    return useReducer(formReducer, INITIAL_STATE)
  }

export default useNewSubForm
