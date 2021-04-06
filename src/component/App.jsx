import React from 'react'
import Rect from './Rect.jsx'


const TextInput = (props) => {
  return <input ref={props.inputRef} />
}

export default class App extends React.Component {

    constructor (props) {
      super(props)
      // creatRefでref変数を作成
      this.upload = React.createRef()
      this.done = React.createRef()
    }

    // アップロードされたファイルの処理
    handleUpload = (e) => {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.readAsText(file, 'UTF-8')
      reader.onload = e => {
        alert(e.target.result)
      }
      e.target.value = null

      // currentプロパティ経由で生のHTMLElementを操作できる
      this.done.current.style.display = ''
    }

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
          <h1>Hello, world!</h1>
          <Rect />
          <Rect num={1} bgcolor='#e02020' />
          <Rect num={2} bgcolor='#20e020' />
          <Rect num={3} bgcolor='#2020e0' />
          <input type='file' ref={this.upload} style={{display: 'none'}} onChange={this.handleUpload} />
          <button onClick={() => this.upload.current.click()}>アップロード</button>
          <div ref={this.done} style={{display: 'none'}}>アップロード完了</div>
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
