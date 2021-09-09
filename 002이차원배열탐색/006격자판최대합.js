/*
격자판 최대합
N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합 니다.
5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.
*/
function solution(arr){
    let max = Number.MIN_SAFE_INTEGER;
    let sum;

    for (const x of arr) {
        sum = x.reduce((a,b) => a+b);
        // console.log(sum);
        if(sum > max){
            max = sum;
        }
        sum = 0;
    }

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {
            sum = sum + arr[j][i]
        }
        // console.log(sum);
        if(sum > max){
            max = sum;
        }
        sum = 0;
    }

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i][i]
    }
    if(sum > max){
        max = sum;
    }
    sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[4-i][i]
    }
    if(sum > max){
        max = sum;
    }
    sum = 0;
    
    return max;
}


let arr=[
        [10, 13, 10, 12, 15], 
        [12, 39, 30, 23, 11],
        [11, 25, 50, 53, 15],
        [19, 27, 29, 37, 27],
        [19, 13, 30, 13, 19]
    ];
console.log(solution(arr));