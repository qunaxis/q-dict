import { observable } from 'mobx';

class Word {
    @observable id = Date.now()
    @observable en = ''
    @observable ru = ''
    @observable transcription = ''

    constructor(data) {
        this.en = data.en,
        this.ru = data.ru,
        this.transcription = data.transcription
    }
}

class Store {
    @observable foo = 'bar'
    @observable dictionary = []

    addWord(data) {
        this.dictionary.push(new Word(data))
    }
}



export default new Store