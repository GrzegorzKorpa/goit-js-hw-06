'use strict';

class StringBuilder {
    #value;

    constructor(value) {
        this.#value = value;   
    }
    getValue() {
        return this.#value;
    }
    
    padStart(str) {  
        this.str = str;
        this.#value = `${this.str}${this.#value}`;
    }

    padEnd(strstr) {
        this.strstr = strstr;
        this.#value = `${this.#value}${this.strstr}`;  
    }

    padBoth(strstrstr) {
        this.strstrstr = strstrstr;
        this.#value = `${this.strstrstr}${this.#value}${this.strstrstr}`;   
    }

}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="