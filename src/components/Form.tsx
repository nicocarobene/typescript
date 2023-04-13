import useNewSubForm from "../hook/useNewSubForm"
import { Sub } from "../types"



interface FormProps{
  onNewSub: (newSub: Sub) => void
}

export default function Form({onNewSub}:FormProps) {
  // const [inputValues, serInputValues] = useState<FormState['inputValues']>(INITIAL_STATE)

  const [inputValues, dispatch] = useNewSubForm()

  const handleSubmit= (evt:React.FormEvent<HTMLFormElement>)=>{
      evt.preventDefault()
      onNewSub(inputValues)
      handleClear()
  }

  const handleChange =(evt:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >)=>{
    const { name, value } = evt.target
    dispatch({
      type: 'change_value',
      payload: { 
        inputName: name,
        inputValue: value
      }
    })}

  //   console.log(evt)
  //   serInputValues({
  //       ...inputValues,
  //       [evt.target.name]: evt.target.value
  //   })
  // }

  const handleClear =()=>{
    dispatch({
      type: 'clear'
    })}

  //   serInputValues(INITIAL_STATE)
  // }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type='text' value={inputValues.nick} name="nick" placeholder="nick"/>
            <input onChange={handleChange} type='number' value={inputValues.subMonths} name="subMonths" placeholder="subMonth"/>
            <input onChange={handleChange} type='text' value={inputValues.avatar} name="avatar" placeholder="avatar"/>
            <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="description"/>
            <button onClick={handleClear} type="button">Clear the form</button>
            <button>Save new Sub!</button>
        </form>
    </div>
  )
}

