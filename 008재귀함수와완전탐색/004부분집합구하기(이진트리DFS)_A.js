/*
부분집합 구하기(DFS)

자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램 을 작성하세요.

*/
function solution(n){
    let answer =[];
    let ch = Array.from({length : n+1} ,()=>0); // 길이가 n+1 까지의 배열 모드 배열이 값은 0
    function DFS(v){
        if(v === n+1){ // 들어온 v의 값이 n으로 들어온 값 보다 클 경우 종료
            // 1로 들어온것만 출력
            let tmp = ""
            for (let i = 1; i <= n; i++){
                if(ch[i] === 1){
                    tmp += i + " ";
                }             
            }
            if(tmp.length > 0){
            answer.push(tmp.trim());    // trim() 양끝 문자열 공백 제거

            }
        }else{
            ch[v] = 1;
            DFS(v+1);
            ch[v] = 0
            DFS(v+1);
        }
    }

    DFS(1);
    return answer;
    
}

console.log(solution(3));