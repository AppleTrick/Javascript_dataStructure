/*
오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램
을 작성하세요.

첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다. 
세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다.
네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다. 
각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.
*/

// 시간복잡도가 조낸 커진다. nlogn 만큼 시간복잡도가 커지기 대문에 효율성이 안좋아진다.

// 두개의 포인터를 잡는다가고 해서 투 포인터 알고리즘이다.

function solution(arr1, arr2){
    let answer=[];
    let n = arr1.length;
    let m = arr2.length;
    let p1 = p2 = 0;
    // 둘다 참일 경우만 실행
    while( p1 < n && p2 < m){
        if(arr1[p1] <= arr2[p2] ){
            answer.push(arr1[p1++]);
        }else{
            answer.push(arr2[p2++]);
        }
    }
    while(p1< n){
        answer.push(arr1[p1++]);
    }
    while(p2< m){
        answer.push(arr2[p2++]);
    }

    return answer;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));