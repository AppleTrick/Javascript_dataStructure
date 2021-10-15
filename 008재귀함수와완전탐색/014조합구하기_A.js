/*
조합 구하기

1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 램을 작성하세요.

M개를 뽑는 방법의 수를 출력하는 프로그

▣ 입력설명 첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.

▣ 출력설명 첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다. 출력순서는 사전순으로 오름차순으로 출력합니다.

*/

function solution(n, m){  // 1~n 까지 , m개 를 뽑음       
    let answer=[];
    let arr = Array.from({length : m}, () => 0)
    
    function DFS(L, s){
        if(L===m){ // Level 이 m 과 같아지는 순간
            answer.push(arr.join());
        }else{
            for (let i = s; i <= n; i++) {
                arr[L] = i;
                DFS(L+1, i+1);
            }
        }
    }

    DFS(0,1);
    return answer;
}

console.log(solution(4, 2));

