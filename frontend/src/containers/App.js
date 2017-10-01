import React, { Component } from 'react'
import { observer } from 'mobx-react';

@observer
export default class App extends Component {
  render() {
    const { store } = this.props
    const dict = store.dictionary
    // store.addWord({
    //   en: 'test',
    //   ru: 'тест',
    //   transcription: 'тэст'
    // })
    return (
      <div>
        <h1>Привет, Максим!</h1>
        <table>
          <thead>
            {/* <td></td> */}
            <td>EN</td>
            <td>RU</td>
            <td>transcription</td>
          </thead>
          <tbody>
            { dict.map((word => 
                <tr key={ word.id }>
                  <td>{ word.en }</td>
                  <td>{ word.ru }</td>
                  <td>{ word.transcription }</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}