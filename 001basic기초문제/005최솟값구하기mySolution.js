/*
    7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
    ex > [5 3 7 11 2 15 17]
*/

function solution(arr){

    let answer = Math.min(...arr)
    // let answer = Math.min.apply(null, arr);
    return answer;
}

let arr = [5,3,7,11,2,15,17];
console.log(solution(arr));
