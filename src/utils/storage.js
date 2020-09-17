import Storage from 'web-storage-cache'
const localStorage = new Storage()
export function getStorage (key) {
  return localStorage.get(key)
}
export function setStorage (key, val) {
  return localStorage.set(key, val)
}
export function clearStorage () {
  return localStorage.clear()
}
export function removeStorage (key) {
  return localStorage.delete(key)
}
