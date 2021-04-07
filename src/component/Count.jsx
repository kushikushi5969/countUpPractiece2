import React, {useState} from 'react'

const Count = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Add count</button>
      <button onClick={() => setCount(count - 1)}>Remove count</button>
    </>
  )
}

export default Count
