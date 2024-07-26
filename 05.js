// 5. forEach로 변환해보기

// 1. 해당 문제를 forEach로 변경하여 풀어주세요
let arr=  [10, 20, 30] 
// 해당 로직을 작성하세요  
// 결과 값: [100, 200, 300] 출력해주세요 
arr.forEach((a, b) => arr[b] = a*10);
console.log(arr)


// 2. 5의 배수를 찾아 반환하세요
let arr2=  [10, 22, 33]
let arr3 = [];
// 해당 로직 작성해주세요
// 결과값 [10]
arr2.forEach((a) => a%5 === 0 && arr3.push(a))
console.log(arr3)