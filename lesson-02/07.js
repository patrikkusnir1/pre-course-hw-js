let passportMarried = {
    name: "Petr", 
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
}

let passportMarried2 = {
    address: { ...passportMarried.address },
    married: true,
    ...passportMarried,
};
console.log(passportMarried)
console.log(passportMarried2)