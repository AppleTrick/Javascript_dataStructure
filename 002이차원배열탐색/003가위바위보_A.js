/*
# 문제
가위 바위 보

A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.

가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.

*/

/*
# Memo
N : 게임횟수
이길경우 A or B 출력
비길경우 D출력
*/

function solution(arrA, arrB){
    let answer = [];
    for (let i = 0; i < arrA.length; i++) {
        if(arrA[i] === arrB[i]) answer.push('D');
        else if(arrA[i]===1&&arrB[i]===3)  answer.push('A');
        else if(arrA[i]===2&&arrB[i]===1)  answer.push('A');
        else if(arrA[i]===3&&arrB[i]===2)  answer.push('A');
        else answer.push('B');
    }

    return answer;
}


let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));

// 단조롭게도 풀수도 있다 굳이 복잡하게 할 필요가 없다..