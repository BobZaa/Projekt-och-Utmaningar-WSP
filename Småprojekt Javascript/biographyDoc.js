const person = {
    presentation : function() {
        console.log(`Hej jag heter ${this.namn} och jag är ${this.adjektiv}. Just nu är jag bara ${this.ålder} år gammal, men när jag växer upp vill jag bli en ${this.jobb}.`) 
    },
    namn     : "Ulf" ,
    ålder    : "17" ,
    jobb     : "programmerare" ,
    adjektiv : "trött"
}

person.presentation()