export default {
  findById (array, id) {
    if (!array) {
      return null
    }
    return array.find(ele => ele.id === id)
  }
}
