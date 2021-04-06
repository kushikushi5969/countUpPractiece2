import React from 'react'
import Rect from './Rect.jsx'
import Handleupload from './Handleupload.jsx'


const TextInput = (props) => {
  return <input ref={props.inputRef} />
}

export default class App extends React.Component {

    // フォーカス
    focusInput = () => {
      this.input.focus()
    }

    // 入力連動
    changeInput = () => {
      this.textInput.value = this.input.value
    }

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
          <div>
            <div>
              {/* <input type="text" ref={(input) => { this.input = input }} /> */}
              <button onClick={this.focusInput}>入力フォーカス</button>
            </div>
          </div>
          <div>
            <input type="text" ref={(input) => { this.input = input }} onChange={this.changeInput} />
            <TextInput inputRef={el => this.textInput = el} />
          </div>
        </>
      )
    }

}
