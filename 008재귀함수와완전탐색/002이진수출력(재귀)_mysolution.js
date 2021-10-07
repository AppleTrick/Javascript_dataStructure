/*

재귀함수를 이용한 이진수 출력

10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요. 단 재귀함수를 이용 해서 출력해야 합니다.
*/

function solution(n){
    let answer="";

    function DFS(n){
        if(n === 0){
            return;
        }else{
            if (n%2 === 1) {
                answer =  "1" + answer;
            }else{
                answer =  "0" + answer;
            }
            n = parseInt(n/2);
            DFS(n);
        }
    }

    DFS(n);

    return answer;
}

console.log(solution(11));