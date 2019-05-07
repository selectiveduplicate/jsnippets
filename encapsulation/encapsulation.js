// just to demonstrate encapsulation in JS
// 

// let's see an object with a nickName attribute 
// that shouldn't be exposed so that it can be 
// modified as one pleases

var protectorOfCat = (function () {
    var nickName = "Bhutu Mia";
    var regex = new RegExp(/\d+/);

    return {    // return an object when the function is called
        setNewNickName: (newNickName) => {
            if (regex.test(newNickName)) {
                alert("Invalid name!");
            }
            else {
                nickName = newNickName; // inner object has access to the variable nickName
            }
        },
        getFullName: () => {
            return nickName;
        }
    };       // end of return
}());        // we are calling the function
            // and assigining the returned object to the variable protectorOfCat
// usually the entire anonymaous function and the invocation
// is wrapped around with braces for 
// better readability