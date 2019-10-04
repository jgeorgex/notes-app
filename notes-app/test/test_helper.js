var assert = {
  isTrue: function(itemToCheck, testName) {
    if (!itemToCheck) {
      console.log(testName + " Test failed because " + itemToCheck + " is false.")
    } else {
      console.log(testName + " test passed")
    }
  }
}
