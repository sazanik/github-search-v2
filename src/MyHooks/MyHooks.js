import React, {useEffect, useState} from "react";

function useLogger(value) {
  useEffect(() => {
    console.log('Value changed: ', value)
  }, [value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  const onChange = e => {
    setValue(e.target.value)
  }
  const clear = () => {
    setValue('')
  }

  return {
    bind: {value, onChange},
    value, clear
  }
}

function MyHooks() {
  const input = useInput('')

  useLogger(input.value)

  return (
    <div className="my-hooks">

      {/*<input type="text" value={input.value} onChange={input.onChange}/>*/}
      <input type="text" {...input.bind}/>
      <button className='btn-warning' onClick={() => input.clear()}>Clear</button>
      <hr/>
      <h1>{input.value}</h1>

    </div>

  )
}

export default MyHooks