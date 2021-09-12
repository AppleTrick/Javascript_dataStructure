/*
연속 부분수열 1

N개의 수로 이루어진 수열이 주어집니다.

이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.

만약 N=8, M=6이고 수열이 다음과 같다면 1 2 1 3 1 1 1 2 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.
*/

// m 은 합이 되는 부분
// arr은 배열이 되는법

// 투 포인터 알고리즘으로 풀경우..

function solution(m, arr){

    let answer = 0; lt = 0; sum = 0;
    for (let rt = 0; rt < arr.length; rt++) {
        sum += arr[rt];
        if(sum === m ){
            answer++
        }
        while(sum >= m){
            sum -= arr[lt++];
            if (sum===m) {
                answer++;
            }
        }
    }
    
    return answer;
}

let arr =[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, arr));