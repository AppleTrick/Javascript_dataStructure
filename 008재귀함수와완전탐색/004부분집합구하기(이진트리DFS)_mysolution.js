/*
부분집합 구하기(DFS)

자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램 을 작성하세요.

*/
function solution(n){
    let answer = Array.from({length:n}, ()=>0);
    // console.log(answer);
  
    function DFS(n){
        if(n === 0){
            console.log(answer.join("").replace(/0/g,"")); 
            return;
        }else{
            answer[n-1] = n;
            DFS(n-1);
            answer[n-1] = 0;
            DFS(n-1);
        }
    }

    DFS(n);
    
}

console.log(solution(3));