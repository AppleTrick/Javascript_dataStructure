/*
이진트리를 전위순회와 후위순회를 연습해보세요.
*/

function solution(v){
    let answer;
    function DFS(v){
        if(v > 7){
            // 멈추는 곳
            return;
        }else{
            // 실행되는 곳
            // console.log(v); // 전위 순회
            DFS(v*2);
            // console.log(v); // 중위 순회
            DFS(v*2+1)
            console.log(v); // 후위 순회
        }
    }

    DFS(v);
    return answer;
    
}

console.log(solution(1));