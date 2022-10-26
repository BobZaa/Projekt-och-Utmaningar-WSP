const library = { 
    addition : function(arg1 , arg2) {
        return arg1 + arg2 
    } , 

    multiplikation : function(arg1 , arg2){
        return arg1 * arg2        
    },

    stringAddition : function(arg1 , arg2){
        return arg1.length + arg2.length 
    }

}

console.log(library.addition(8,6))
console.log()
console.log(library.multiplikation(10,20))
console.log()
console.log(library.stringAddition("dogzer","capybara" ))
