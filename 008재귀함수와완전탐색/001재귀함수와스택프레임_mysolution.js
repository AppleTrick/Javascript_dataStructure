/*
재귀함수
자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성하세요.

*/

function solution(n){

    function DFS(n){
        if (n !== 1) {
            DFS(n-1);
            console.log(n);
        }else{
            console.log(n);
        }
    }

    DFS(n);
}

solution(3);

// DFS 는 스택 구조 ;