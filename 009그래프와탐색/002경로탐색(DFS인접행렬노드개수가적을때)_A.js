/*

경로 탐색(인접행렬)

방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프 로그램을 작성하세요. 아래 그래프에서 1번 정점에서 5번 정점으로 가는 가지 수는 총 6 가지입니다.

▣ 입력설명 첫째 줄에는 정점의 수 N(1<=N<=20)와 간선의 수 M가 주어진다. 그 다음부터 M줄에 걸쳐 연 결정보가 주어진다.

▣ 출력설명 총 가지수를 출력한다.

*/

function solution(n, arr){  // n 정점 개수 , arr 간선정보
    let answer=0;   // 총가지수
    let graph = Array.from(Array(n+1),()=>Array.from(n+1).fill(0) ); // 0 을 제외한 크기 인접행렬 만들 그래프를 설정; 
    let ch = Array.from({length : n+1} , ()=> 0 ); // 방문했는지에 대한 내용을 저장하는 체크 배열

    let path = []; // 방문기록

    // for문을 통해 간선정보를 그래프에 넣어준다.
    for(let [a,b] of arr){
        graph[a][b] = 1; // 방향 그래프일 경우
    }
    function DFS(v){
        if(v === n){ // n이라는 종점에 도달했을때
            answer++;
            console.log(path);
        }else{
            for (let i = 1; i <= n; i++) {
                if(graph[v][i] === 1 && ch[i] ===0){// 가는 방향이 있어야되고 이미간적이 없어야됨
                    ch[i] = 1;
                    path.push(i);
                    DFS(i);
                    ch[i] = 0;
                    path.pop();
                }
            }
        }
    }
    path.push(1);
    ch[1] = 1; // 제일 처음 방문하는 경우를 생각해줘야됨
    DFS(1);
    return answer;
}

let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));