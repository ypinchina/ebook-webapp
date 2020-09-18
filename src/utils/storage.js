import Storage from 'web-storage-cache'
const localStorage = new Storage()
function getStorage (key) {
  return localStorage.get(key)
}
function setStorage (key, val) {
  return localStorage.set(key, val)
}
export function clearStorage () {
  return localStorage.clear()
}
export function removeStorage (key) {
  return localStorage.delete(key)
}
export function setUserHabit (fileName, key, val) {
  let userHabit = getStorage(fileName)
  if (!userHabit) {
    userHabit = {}
  }
  userHabit[key] = val
  return setStorage(fileName, userHabit)
}
export function getUserHabit (fileName, key) {
  const userHabit = getStorage(fileName)
  if (userHabit) {
    return userHabit[key]
  } else {
    return null
  }
}
