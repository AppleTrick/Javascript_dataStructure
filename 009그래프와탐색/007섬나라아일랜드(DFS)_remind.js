/*
섬나라 아일랜드(DFS 활용)
N*N의 섬나라 아일랜드의 지도가 격자판의 정보로 주어집니다. 각 섬은 1로 표시되어 상하좌
우와 대각선으로 연결되어 있으며, 0은 바다입니다. 섬나라 아일랜드에 몇 개의 섬이 있는지 
구하는 프로그램을 작성하세요.

*/

function solution(board){  
   let answer = 0;  // 섬의 갯구    
   let n = board.length; // 배열 길이 , 섬의 크기
   let dx = [-1,-1,0,1,1,1,0,-1];
   let dy = [0,1,1,1,0,-1,-1,-1];
   
   function DFS(x,y){
       board[x][y] = 0; // 들어온곳에서 x,y를 0 으로 변경해줌
       for (let k = 0; k < 8; k++) {
           let nx = x + dx[k];
           let ny = y + dy[k];
           // 경계선 밖으로 나가면 안됨
           if(nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1){ 
               //경계선 조건 + 보드탐색시 1이면 바로 DFS 걸어버림
                // 재귀호출 => 다 없으면  나가게된다.
                DFS(nx,ny);
           }
       }
   }

   // 전체 탐색

   for (let i = 0; i < n; i++) {
       for (let j = 0; j < n; j++) {
           if (board[i][j] === 1) { // 섬 탐색중 1이면 섬 조회
               answer++; // 발견햇으니 + 1을 해줌
               
               DFS(i,j)
           }     
       }
   }

   return answer;

}

let arr=[[1, 1, 0, 0, 0, 1, 0], 
         [0, 1, 1, 0, 1, 1, 0],
         [0, 1, 0, 0, 0, 0, 0],
         [0, 0, 0, 1, 0, 1, 1],
         [1, 1, 0, 1, 1, 0, 0],
         [1, 0, 0, 0, 1, 0, 0],
         [1, 0, 1, 0, 1, 0, 0]];

console.log(solution(arr));