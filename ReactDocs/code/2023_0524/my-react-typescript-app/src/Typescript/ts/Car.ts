// 透過interface規範必須要有的欄位及方法
export interface Car {
    name: string;
    age: number;
    driving: (mph: number) => string;
}