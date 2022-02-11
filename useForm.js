import  { useState } from 'react'

const useForm = (initialstate={}) => {
  const [values, setvalues] = useState(initialstate);

  const reset = () =>{
    setvalues(initialstate);
  }

  const handleInputChange =({target}) =>{
    setvalues({
        ...values,
        [target.name]: target.value
      })
  }
  return [values, handleInputChange,reset];
}

export default useForm
