// TASK G:

// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
// Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.

function getHighestIndex (arr){
  let maxValue = arr[0];
    let maxIndex = 0;      
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
            maxIndex = i;
        }
    }

    return maxIndex;
}
console.log(getHighestIndex([5, 21, 12, 21, 8]));
// TASK-F

// Yagona string argumentga ega findDoublers nomli function tuzing
// Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
// true yokida false natija qaytarsin.

// MASALAN: findDoublers("hello"); natija true qaytadi. Sababi ikki marotaba takrorlangan 'll' harfi mavjud!

// function findDoublers(str) {
//   str = str.toLowerCase();
//   let seen = {};
//   for (let char of str) {
//     if (seen[char]) {
//       return true;
//     }
//     seen[char] = true;
//   }
//   return false;
// }

// console.log(findDoublers("asaka")); 

// E-TASK: 

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"
// function getReverse(str) {
//   return str.split("").reverse().join("");
// }

// // Test
// console.log(getReverse("assalom")); // "olleh"
// console.log(getReverse("salom")); // "molas"
// // TASK D : 

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin

// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// function checkContent(a,b) {
// if (a.length !== b.length) return false;
//   const s1 = a.split("").sort().join("");
//   const s2 = b.split("").sort().join("");

//   return s1 === s2;
// }
// console.log(checkContent("apelsin", "niselap")); 


// // MITASK-C 

// // Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// // MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.products = {
//       non,
//       lagmon,
//       cola,
//     };
//   }

//   getTime() {
//     const now = new Date();
//     const hours = String(now.getHours()).padStart(2, "0");
//     const minutes = String(now.getMinutes()).padStart(2, "0");
//     return `${hours}:${minutes}`;
//   }

//   qoldiq() {
//     const message = `Hozir ${this.getTime()} da ${this.products.non}ta non, ${this.products.lagmon}ta lagmon va ${this.products.cola}ta cola mavjud!`;
//     console.log(message);
//     return message;
//   }

//   sotish(product, amount) {
//     if (!(product in this.products)) {
//       console.log(`${product} do‘konda mavjud emas!`);
//       return;
//     }
//     if (this.products[product] < amount) {
//       console.log(
//         `Hozircha ${amount}ta ${product} sotib bo‘lmaydi, faqat ${this.products[product]}ta bor!`
//       );
//       return;
//     }
//     this.products[product] -= amount;
//     console.log(`${this.getTime()} da ${amount}ta ${product} sotildi!`);
//   }

//   qabul(product, amount) {
//     if (!(product in this.products)) {
//       console.log(`${product} yangi mahsulot sifatida qo‘shildi!`);
//       this.products[product] = 0;
//     }
//     this.products[product] += amount;
//     console.log(`${this.getTime()} da ${amount}ta ${product} qabul qilindi!`);
//   }
// }
// const shop = new Shop(4, 5, 2);
// shop.qoldiq();
// shop.sotish("non", 2);
// shop.qabul("cola", 5);
// shop.qabul("shakar", 10);
// shop.qoldiq();


// TASK B: 

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
// function countDigits(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     const code = str.charCodeAt(i);
//     if (code >= 48 && code <= 57) count++; // '0'..'9'
//   }
//   return count;
// }


/*TASK A

Harf sifatida kiritilgan birinchi parametr, 
kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
Funktsiya tuzing*/
// function countLetter(letter, word) {
//     return word.split(letter).length - 1;
// }
// console.log(countLetter("e", "fullstackdeveloper"));

// console.log("Jack Ma maslahatlari");

// const list = [
//   "yaxshi talaba boling",                 // 0–20
//   "togri boshliq tanlang va koproq hato qiling", // 20–30
//   "uzingizga ishlashingizni boshlang",    // 30–40
//   "siz kuchli bolgan narsalarni qiling",  // 40–50
//   "yoshlarga investitsiya qiling",        // 50–60
//   "endi dam oling, foydasi yoq endi"      // 60+
// ];
// // CALL BACK
// function  maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("insert number",null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(function(){
//         callback(null, list[5]);
//         },5000);
//     }

// }
// console.log('passed here 0');
// maslahatBering(65, (err,data) =>{
//     if(err) console.log('ERROR', err);
//     else{
//         console.log('javob', data);
//     }
// });
// console.log('passed here 1');

// ASYNC FUNCTION

// async function maslahatBering(a) {
//     if(typeof a !== "number") throw new Error("insert anumber");
//     else if (a <= 20) return list [0];
//     else if (a > 20 && a <=30) return list [1];
//     else if (a > 30 && a <=40) return list [2];
//     else if (a > 40 && a <=50) return list [3];
//     else if (a > 50 && a <=60) return list [4];
//          else { 
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             },5000);
//         });
//     }
// }
// // console.log("passed here 0");
// maslahatBering(20)
// .then((data) => {
//     console.log ("javob:", data);
// })
// .catch((err) => {
//     console.log("ERROR:",err);
// });
// console.log("passed here 1");

// asyn/ await
// async function run() {
//     let javob = await maslahatBering(25);
//     console.log(javob);
//     javob = await maslahatBering(70);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);

// }
// run();

