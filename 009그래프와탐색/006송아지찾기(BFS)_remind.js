/*
송아지 찾기(BFS : 상태트리탐색)
현수는 송아지를 잃어버렸다. 다행히 송아지에는 위치추적기가 달려 있다. 현수의 위치와 송아
지의 위치가 수직선상의 좌표 점으로 주어지면 현수는 현재 위치에서 송아지의 위치까지 다음
과 같은 방법으로 이동한다. 송아지는 움직이지 않고 제자리에 있다. 
현수는 스카이 콩콩을 타고 가는데 한 번의 점프로 앞으로 1, 뒤로 1, 앞으로 5를 이동할 수 
있다. 최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하는 프로그램을 작성
하세요
*/

function solution(s, e){  
    let answer = 0;
    let ch = Array.from({length : 10001} , ()=> 0); // 체크배열
    let dis = Array.from({length : 10001} , ()=>0); // dis 배열
    let queue = [];

    ch[s] = 1;       // 체크배열을 통해 시작점은 0 => 1로 변함
    queue.push(s);   // 처음값을 넣어줌 queue가 없을때까지 확인해야되기때문;
    dis[s] = 0;

    while(queue.length){
        let x = queue.shift(); // 첫 출발좌표  ex ) 5;
        for (let nx of [x-1,x+1,x+5]) {
            if(nx === e){
                return dis[x] + 1; // dis에 존재하는 점핑 횟수
            }

            if(nx > 0 && nx <= 100000 && ch[nx] === 0){
                ch[nx] = 1; // 체크 배열에 확인 표시를 넣어줌
                queue.push(nx); // queue 에 nx 를 넣어줌
                dis[nx] = dis[x] + 1; 
            }
        }
    }
    return answer;
}

console.log(solution(5, 14)); // 현수 위치 , 송아지 위치 => 점프 1,-1,5 => 최단경로로 구하기