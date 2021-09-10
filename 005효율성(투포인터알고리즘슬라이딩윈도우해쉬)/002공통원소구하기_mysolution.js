/*
공통원소 구하기
A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로
그램을 작성하세요.
*/

function solution(arr1, arr2){
    let answer = []
    for (let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i])){
            answer.push(arr1[i]);
        }
    }
    answer.sort((a,b) => a-b)

    return answer;
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));