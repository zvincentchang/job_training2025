console.log('------------------------ 基本類型 ------------------------');
let cusName: string = "Hello Two";
let num1: number = 123;
let boo1: boolean = true;
let anyValue1: any = true;

console.log('基本類型 let num1:', num1);
console.log('基本類型 let boo1:', boo1);
console.log('基本類型 let anyValue1:', anyValue1);

console.log('------------------------ 陣列 ------------------------');
let strArr1: string[] = ['a', 'b', 'c'];
let strArr2: string[][] = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f']
];

console.log('陣列string[]:', strArr1[1]);
console.log('陣列string[][]:', strArr2[1][2]);
// console.log('陣列string[][]:', strArr2[2][2]);

// 元組
let tuple1: [number, string, boolean] = [1, 'a', true];
let tuple2: [number, string][] = [[1, 'a'], [2, 'b']];

console.log('元組 tuple1[0]:', tuple1[1]);
console.log('元組 tuple2[1][1]:', tuple2[1][1]);

console.log('------------------------ Enum 枚舉 ------------------------');
enum FoodNames {
    PORK = '豬肉',
    BEEF = '牛肉',
    FISH = '大王具足蟲',
    CHICKEN = '雞肉'
};

const chicken = FoodNames.FISH;
console.log('枚舉 Enum FoodNames:', chicken);


console.log('------------------------ Union 聯合型別 ------------------------');
let unionV1: number | string | boolean;
unionV1 = 1000;
unionV1 = 'str';
unionV1 = true;
console.log('聯合型別 Union unionV1:', unionV1);

console.log('------------------------ type 自訂義型別 ------------------------');
type cusType = number | string;
let typeValue: cusType;
typeValue = 123;
typeValue = 'ABC';
console.log('自訂義型別 let typeValue:', typeValue);


console.log('------------------------ interface ------------------------');
interface UserInterface {
    name: string;
    age: number;
};

interface UserInterface {
    height: number;
    sex?: string
};

const userTwo: UserInterface = {
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


console.log('------------------------ Object from type ------------------------');
// type、interface差別：type 欄位不能擴充、interface欄位可以擴充
type userType = {
    name: string
    age?: number
};

const userOne: userType = {
    name: 'YuShangLee',
    age: 36
};

console.log('object from type userOne.name:', userOne.name);
console.log('object from type userOne.age:', userOne.age);

console.log('------------------------ function ------------------------');
function hello(a: number, b: string): any {
    return a + b;
}

console.log('function hello:', hello(3, '2'));

// undefined 問號參數類型
// 可選擇性傳入的參數類型
// 必須放在參數列上的最後一個
function helloTwo(a: number, b: number, c?: number, d?: number): number {
    // 透過判斷undefined就可讓 return a + b + c; 通過檢查編譯
    // if (c === undefined) return -1;
    if (c === undefined) return a + b;
    if (d === undefined) return a + b + c;
    return a + b + c + d;
}

console.log('function helloTwo:', helloTwo(1, 2));
console.log('function helloTwo:', helloTwo(1, 2, 3));
console.log('function helloTwo:', helloTwo(1, 2, 3, 4));


// 箭頭函式
const func = (a: string): number => {
    let b = parseInt(a);
    b += 2;
    return b;
}
console.log('箭頭函式 const func:', func('3'));

// 箭頭函式省略{}接續直接代表回傳
const funcTwo = (a: string): number => parseInt(a) + 2;
console.log('箭頭函式 const funcTwo:', funcTwo('3'));

console.log('------------------------ as 斷言、fetch api ------------------------');

import fetch from 'cross-fetch';

type userData = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
};

// Typescript使用fetch須以下設置
// 1.tsconfig.json ("module": "es2022"、"target": "es2022"、"moduleResolution": "node")
// 1.1 npm install -S cross-fetch
// 2.package.json (加入"type": "module"設置)
const fetchUserData = async (): Promise<userData> => {
    // 透過as訂義fetch api所回傳的資料結構type
    const userData = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(rs => rs.json())
        .catch(error => {
            console.log("FetchError:", error);
        });

    console.log("inner:", userData);

    return userData;
}

const user: userData = await fetchUserData();
console.log("outter:", user);
console.log("fetch userId:", user.userId);
console.log("fetch title:", user.title);
console.log("fetch completed:", user.completed);

console.log('------------------------ 類別 class ------------------------');

class Employee {

    // 公開(內外部皆可存取)
    public empNo: number;
    // 受保護(僅內部透過繼承關係存取)
    protected empName: string;
    // 私有(僅class內部)
    private empJobTitle: string;

    constructor(empNo: number, empName: string, empJobTitle: string) {
        this.empNo = empNo;
        this.empName = empName;
        this.empJobTitle = empJobTitle;
    }
}

const empOne = new Employee(7, 'Mark', 'Manager');
// 外部只能存取的到公開的成員
console.log("empOne.empNo:", empOne.empNo);

// 存取protected(受保護)、private(私有)編譯錯誤
// console.log("empOne.empName:", empOne.empName);
// console.log("empOne.empJobTitle:", empOne.empJobTitle);

class SubEmployee extends Employee {
    private salary: number;
    constructor(empNo: number, empName: string, empJobTitle: string, salary: number) {
        super(empNo, empName, empJobTitle);
        this.salary = salary;
    }
    showEmp() {
        console.log("SubEmployee super.empNo:", this.empNo);
        console.log("SubEmployee super.empName:", this.empName);
        console.log("SubEmployee this.salary:", this.salary);
        // 存取private(私有)編譯錯誤
        // console.log("SubEmployee super.empJobTitle:", this.empJobTitle);
    }
    addSalary(money: number): number {
        return this.salary + money;
    }
}

const empTwo = new SubEmployee(8, 'Wendy', 'Accounting', 35000);
empTwo.showEmp();

const newSalary = empTwo.addSalary(3000);
console.log("SubEmployee.addSalary:", newSalary);


console.log('------------------------ 介面 interface ------------------------');
import { Car } from './Car';

class CarImpl implements Car {

    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    driving(mph: number): string {
        return "mph:" + mph;
    }
}

// 多型(polymorphism)
const carOne: Car = new CarImpl('TOYOTA', 15);
console.log("InterfaceCar.name:", carOne.name);
console.log("InterfaceCar.age:", carOne.age);
console.log("InterfaceCar.driving:", carOne.driving(60));

console.log('------------------------ 泛型 Generics ------------------------');

// 運用泛型可彈性的在使用函數、類別時才宣告實際使用的型別
function print<T>(data: T) {
    console.log('Function data:', data);
}

print<string>('Hello');
print<number>(123);

interface Generics<T, R> {
    driving: (arg: T) => R;
}

class GenericsImpl implements Generics<number, string> {
    driving(arg: number): string {
        return "mph:" + arg;
    }
}

// const generics: Generics<number, string> = new GenericsImpl();
const generics = new GenericsImpl();
console.log('Interface Generics:', generics.driving(60));

console.log('------------------------ utility(工具) ------------------------');
// Typescript內建
// https://www.typescriptlang.org/docs/handbook/utility-types.html

interface CatInfo {
    age: number;
    breed: string;
}

const catOne: CatInfo = { age: 10, breed: "Persian" };

// 1.Record<Keys, Type> 紀錄
// 相當於JAVA Map
const cats: Record<string, CatInfo> = {
    'miffy': catOne,
    'boris': { age: 5, breed: "Maine Coon" },
    'mordred': { age: 16, breed: "British Shorthair" }
};

console.log(cats);
console.log('Record<Keys, Type>:', cats['miffy']);

console.log("-------------------------------");
// 2.Pick<Type, Keys>挑選
// 透過Pick可從interface挑選"需要"的「欄位」設置給新宣告的Type,就可省略程式碼欄位宣告
interface Todo {
    title: string;
    description: string;
    completed: boolean;
};

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false
};

console.log("Pick<Type, Keys>:", todo);

console.log("-------------------------------");
// 3.Omit<Type, Keys>忽略
// 透過Omit可從interface忽略"不需要"的欄位設置給新宣告的Type,就可省略程式碼欄位宣告
interface TodoTwo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
};

type TodoPreviewTwo = Omit<TodoTwo, "description">;

const todoTwo: TodoPreviewTwo = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
};

console.log("Omit<Type, Keys>:", todoTwo);
