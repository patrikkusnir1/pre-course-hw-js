<<<<<<< HEAD
let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportMarried2 = {...passportMarried, married: true, address: {...passportMarried.address}}

console.log(passportMarried)
console.log(passportMarried2)
=======
let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};


let passportMarried2 = {
    address: { ...passportMarried.address },
    married: true,
    name: passportMarried.name,
    surname: passportMarried.surname
};

console.log(passportMarried);
console.log(passportMarried2);
>>>>>>> 713ca6b536bca1d88aa6318c1683ecd1bd9051ef
