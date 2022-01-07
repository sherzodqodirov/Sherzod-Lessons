// const day=`monday`;
// switch(day){
// case "monday":
//     console.log(`1`);
//     break;
// case "tuesday":
//     console.log(`2`);
//     break;

// case "wednesday":
//     console.log(`4`);
//     break;
// case "friday":
//     case "thursday":
//     console.log(`5`);
//     break;
// case "saturday":
//     console.log(`6`);
//     break;
// case "sanday":
//     console.log(`7`);
//     break;
//     default:
//         console.log(`xoto`)
// }
"use strict";
 let a=+(prompt(`yeb ichgan pulizi kiriting`));
 let choychaqa=(a>= 50 && a<= 300) ? a*0.15:a*0.2;
 let hisob_kitob =(a>=50 && a<= 300) ? a+a*0.15: a+a*0.2;
 document.write(`Yeb ichan puliz${a}$, ${choychaqa}$ choychaqa ${hisob_kitob}$ umumiy hisob kitob` );

