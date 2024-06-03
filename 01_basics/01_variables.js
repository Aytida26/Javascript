const accountId = 144553;
let accountEmail ="adityapowale@gmail.com";
var accountPassword = "1223344";
accountCity = "Khopoli";

// accountId = 2; not allowed this is constant

accountEmail = "ap@gmail.com";
accountPassword = "1223432";
accountCity = "Hyderabad";
let accountState;  //undefined


console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


// block scope
/*
prefer not use var
because of issue in  block scope and funtional scope
*/