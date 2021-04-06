import React from 'react'

const TextInput = (props) => {
  return <input ref={props.inputRef} />
}

export default class Input extends React.Component {

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
      <div>
        <div>
          <button onClick={this.focusInput}>入力フォーカス</button>
        </div>
        <div>
            <input type="text" ref={(input) => { this.input = input }} onChange={this.changeInput} />
            <TextInput inputRef={el => this.textInput = el} />
          </div>
      </div>
    )
  }
}
