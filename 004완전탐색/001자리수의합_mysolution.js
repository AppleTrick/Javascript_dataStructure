/*
자릿수의 합

N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
*/

function solution(n, arr){
    let max = Number.MIN_SAFE_INTEGER;
    let answer = 0
    arr.forEach((element,i) => {
        let sum = String(element).split('').reduce((a,b) => a + parseInt(b),0)

        if( sum > max){
            max = sum;
            answer = arr[i];
        }else if( sum === max && arr[i] > answer){
            answer = arr[i]
        }
    })

    return answer;
}

let arr=[5555,128, 460, 603, 40, 521, 137, 123, 44444];
console.log(solution(7, arr));