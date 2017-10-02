import {observable, autorunAsync} from 'mobx'
import _ from 'lodash'

function storedObservable (key, defaultValue, debounce) {
  let fromStorage = localStorage.getItem(key)
  const defaultClone = Object.assign(defaultValue)  // we don't want to modify the given object, because userscript might want to use the original object to reset the state back to default values some time later
  if (fromStorage) {
    _.merge(defaultClone, JSON.parse(fromStorage))
  }
  const obsVal = observable(defaultClone)
  autorunAsync(() => {
    localStorage.setItem(key, JSON.stringify(obsVal))
  }, debounce)
  console.log(obsVal)
  return obsVal
}

export default storedObservable