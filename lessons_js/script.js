
// let bmi1, m1 = 78, h1 = 1.69, bmi2, m2 = 92, h2 = 1.95, a;
// bmi1 = m1 / h1 ** 2;
// bmi2 = m2 / h2 ** 2;
// a = bmi1 > bmi2;
// console.log(bmi1 + ' Mark');
// console.log(bmi2 + ' Jon');
// console.log(a);



// const firstname = `Sherzod`;
// const lastname = `Qodirov`;
// const bithyear = 2002;
// let now = 2021;
// console.log(firstname + ` ` + lastname + ` ` + (now - bithyear) + ` yoshda`);
// console.log(`${firstname} ${lastname} ${now - bithyear} yoshda`);
// console.log(`${firstname}ning familasi: ${lastname}`);



// const dastur = 'javascript';
// const yili = 1995;
// let now = 2021;
// console.log(`${dastur}  ${yili} yilichiqan chiqaniga  ${now - yili} yill boldi `)

// let balance = 0;
// if (balance > 0) {
//     console.log("calling...📞");
// }
// else if(balance==0){
//     console.log("companya hisobidan foydalaning 😎");
// }
// else {
//     console.log(" pul tasha 🤦‍♂️ ");
// }

let bmi1, m1 = 78, h1 = 1.69, bmi2, m2 = 92, h2 = 1.95, a;
bmi1 = m1 / h1 ** 2;
bmi2 = m2 / h2 ** 2;

if (bmi1 > bmi2) {
    a = bmi1 - bmi2;
    console.log(`markniki bmi( ${bmi1}) jonikidan (${bmi2}) yuqori `)
}
else if (bmi1 == bmi2) {
    console.log("bmi teng")
}
else {
    a = bmi2 - bmi1;
    console.log(`joniki bmi ${bmi1} marknikidan ${bmi2} yuqori `)
}