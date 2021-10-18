/*
    정점 개수가 많아지면 인접 리스트로 해야된다.
*/


function solution(n, arr){  // n 정점 개수 , arr 간선정보
    let answer=0;   // 총가지수
    let graph = Array.from(Array(n+1),()=>Array()); // 행은 1 ~ n 열은 [] 빈배열
    let ch = Array.from({length : n+1} , ()=> 0 ); // 방문했는지에 대한 내용을 저장하는 체크 배열
    
    let path = [];

    for(let [a,b] of arr){
        graph[a].push(b); 
    }
    // console.log(graph);
    /*
    [ 
        [], 
        [ 2, 3, 4 ], 
        [ 1, 3, 5 ], 
        [ 4 ], 
        [ 2, 5 ], 
        [] 
    ]
    */

    function DFS(v){
        if(v===n){
            console.log(path);
            answer++
        }else{
            for (let i = 0; i < graph[v].length; i++) {
                if(ch[graph[v][i]] === 0){ // graph[v][i] => 가는 정점
                    ch[graph[v][i]] = 1;
                    path.push(graph[v][i])
                    DFS(graph[v][i]);
                    ch[graph[v][i]] = 0;
                    path.pop();
                }
                
            }
        }
    }
    ch[1] = 1;
    DFS(1);
    
    return answer;
}

let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));