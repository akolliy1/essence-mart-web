/**
 *
 * @param {*} key
 * @param {*} value
 * @param {*} time in seconds
 */
const setItem = (key, value, time) => {
  const now = new Date()

  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value: value,
    expiry: now.getTime() + time * 1000
  }
  if (!time) delete item.expiry
  return localStorage.setItem(key, JSON.stringify(item))
}

/**
 *
 * @param {*} key
 */
const getItem = key => {
  const itemStr = localStorage.getItem(key)
  // if the item doesn't exist, return null
  if (!itemStr) {
    return null
  }
  const item = JSON.parse(itemStr)
  const now = new Date()
  // compare the expiry time of the item with the current time
  if (item.expiry && now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    removeItem(key)
    return null
  }
  return item.value
}

/**
 *
 * @param {*} key
 */
const removeItem = key => {
  return localStorage.removeItem(key)
}

const LocalStorage = {
  setItem,
  getItem,
  removeItem
}

export default LocalStorage
