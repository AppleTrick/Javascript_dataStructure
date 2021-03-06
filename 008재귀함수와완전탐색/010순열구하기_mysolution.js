/*
순열 구하기

10이하의 N개의 자연수가 주어지면 이 중  M개를 뽑아 일렬로 나열하는 방법을 모두 출력합니다.

▣ 입력설명 첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다. 두 번째 줄에 N개의 자연수가 오름차순으로 주어집니다.

▣ 출력설명 첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다. 출력순서는 사전순으로 오름차순으로 출력합니다.
*/

function solution(m, arr){         
    let answer=[];
    let answer1 = []
    let tmp = Array.from({length : arr.length}, ()=> 0);

    function DFS(L , tmp){
        if(L >= m){
            let answerTemp = "";
            for (let j = 0; j < tmp.length; j++) {
               if(tmp[j] == 1 ){
                   answerTemp = answerTemp + " " +  arr[j];
               }
            }
            answer.push(answerTemp);
            // answer1.push([...tmp]);
            // 주소값 참조로 인해 마지막에 모든 값이 [0,0,0] 인경우를 가지게 되서 tmp가 제대로 복사 되지 않는다.
            
        }else{
            for (let i = 0; i < tmp.length; i++) {
                if(tmp[i] == 1){
                    continue;
                }else{
                    tmp[i] = 1;
                    DFS(L+1, tmp);
                    tmp[i] = 0;
                }
            }
        }
    }

    DFS(0, tmp);

    // console.log(answer1);

    return answer;
}

let arr=[3, 6, 9];
console.log(solution(2, arr));