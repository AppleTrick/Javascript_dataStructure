/*
미로탐색(DFS)

7*7 격자판 미로를 탈출하는 경로의 가지수를 출력하는 프로그램을 작성하세요.

*/

function solution(board){  
    let answer=0;
    let dx = [1,0,-1,0];
    let dy = [0,1,0,-1];
    function DFS(x,y){
        // 종료조건
        if(x === 6 && y ===6){
            answer++;
        }else{
            for (let i = 0; i < 4; i++) {
                let nx = x + dx[i]
                let ny = y + dy[i]
                if(nx >= 0 && ny >= 0 && nx <= 6 && ny <=6 && board[nx][ny] === 0){
                    board[nx][ny] = 1;
                    DFS(nx,ny)
                    board[nx][ny] = 0;
                }
            }
        }
    }
    board[0][0] = 1;
    DFS(0,0);
    return answer;
}

let arr=[[0, 0, 0, 0, 0, 0, 0], 
         [0, 1, 1, 1, 1, 1, 0],
         [0, 0, 0, 1, 0, 0, 0],
         [1, 1, 0, 1, 0, 1, 1],
         [1, 1, 0, 0, 0, 0, 1],
         [1, 1, 0, 1, 1, 0, 0],
         [1, 0, 0, 0, 0, 0, 0]];

console.log(solution(arr));