const getFullName = (firstName, lastName) => {
    console.log(`My full name is ${firstName} ${lastName}`)
  }
  
  // Method 1
  // module.exports = getFullName;
  
  // Method 2
  module.exports = {
    getFullName,
    // func2,
    // func3,
    // var1,
    // var2
  }