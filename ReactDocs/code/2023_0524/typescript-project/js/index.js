"use strict";
console.log('------------------------ 基本類型 ------------------------');
let cusName = "Hello Two";
let num1 = 123;
let boo1 = true;
let anyValue1 = true;
console.log('基本類型 let num1:', num1);
console.log('基本類型 let boo1:', boo1);
console.log('基本類型 let anyValue1:', anyValue1);
console.log('------------------------ 陣列 ------------------------');
let strArr1 = ['a', 'b', 'c'];
let strArr2 = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f']
];
console.log('陣列string[]:', strArr1[1]);
console.log('陣列string[][]:', strArr2[1][2]);
// console.log('陣列string[][]:', strArr2[2][2]);
// 元組
let tuple1 = [1, 'a', true];
let tuple2 = [[1, 'a'], [2, 'b']];
console.log('元組 tuple1[0]:', tuple1[1]);
console.log('元組 tuple2[1][1]:', tuple2[1][1]);
console.log('------------------------ Enum 枚舉 ------------------------');
var FoodNames;
(function (FoodNames) {
    FoodNames["PORK"] = "\u8C6C\u8089";
    FoodNames["BEEF"] = "\u725B\u8089";
    FoodNames["FISH"] = "\u5927\u738B\u5177\u8DB3\u87F2";
    FoodNames["CHICKEN"] = "\u96DE\u8089";
})(FoodNames || (FoodNames = {}));
;
const chicken = FoodNames.FISH;
console.log('枚舉 Enum FoodNames:', chicken);
console.log('------------------------ Union 聯合型別 ------------------------');
let unionV1;
unionV1 = 1000;
unionV1 = 'str';
unionV1 = true;
console.log('聯合型別 Union unionV1:', unionV1);
console.log('------------------------ type 自訂義型別 ------------------------');
let typeValue;
typeValue = 123;
typeValue = 'ABC';
console.log('自訂義型別 let typeValue:', typeValue);
console.log('------------------------ interface ------------------------');
;
;
const userTwo = {
    name: 'YuShangLee',
    age: 36,
    height: 70,
    // sex: 'Man'
};
console.log('object from interface userTwo.name:', userTwo.name);
console.log('object from interface userTwo.age:', userTwo.age);
console.log('object from interface userTwo.height:', userTwo.height);
console.log('object from interface userTwo.sex:', userTwo.sex); // 可選擇欄位
console.log('object from interface userTwo.sex == undefined:', userTwo.sex == undefined);
