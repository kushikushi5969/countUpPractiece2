import React from 'react'
import Rect from './Rect.jsx'
import Handleupload from './Handleupload.jsx'
import Input from './Input.jsx'
import Count from './Count.jsx'



export default class App extends React.Component {

    render () {
      return (
        <>
          <h1>Count Up</h1>
          <Rect />
          <Rect num={1} bgcolor='#e02020' />
          <Rect num={2} bgcolor='#20e020' />
          <Rect num={3} bgcolor='#2020e0' />
          <h1>File Upload</h1>
          <Handleupload />
          <h1>Text Input</h1>
          <Input />
          <h1>Count Hook!</h1>
          <Count />
        </>
      )
    }

}
