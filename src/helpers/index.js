export const rejectError = ({ response = null }) => {
  let message = 'Ooops!! something went wrong.'

  if (response && response.data && response.data.message) {
    message = response.data.message
  }
  return Promise.reject(message)
}
