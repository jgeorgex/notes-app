var assert = {
  isTrue: function(itemToCheck) {
    if (!itemToCheck) {
      console.log("Test failed because " + itemToCheck + " is false.")
    } else {
      console.log("test passed")
    }
  }
}
