import React from 'react'

export default class HandleUpload extends React.Component {

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

  render () {
    return (
      <>
        <input type='file' ref={this.upload} style={{display: 'none'}} onChange={this.handleUpload} />
        <button onClick={() => this.upload.current.click()}>アップロード</button>
        <div ref={this.done} style={{display: 'none'}}>アップロード完了</div>
      </>
    )
  }
}
