/*

연속 부분수열 2

N개의 수로 이루어진 수열이 주어집니다.

이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그 램을 작성하세요.

만약 N=5, M=5이고 수열이 다음과 같다면 1 3 1 2 3 합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, {1, 3, 1}로 총 10가지입니다.

*/

function solution(m, arr){
    let answer = 0;
    
    for (let j = 1; j <= arr.length; j++) { // 서칭 갯수

        for (let s = 0; s < arr.length - j + 1; s++) { // 서칭 시작 위치
            
            let sum = 0
            
            for (let i = 0; i < j; i++) {
                sum += arr[s+i]
            }

            if (sum <= 5) {
                answer ++;
            }
            
        }
    }

    return answer;
}

let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));