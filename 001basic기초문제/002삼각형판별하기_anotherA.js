/*

삼각형 판별하기
길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있
으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

*/

function solution(a,b,c){
   let max = Math.max(a,b,c);
   let sum = a+b+c;
   let TwoSum = sum - max;
   return max >= TwoSum ? "NO" : "YES"
}

console.log(solution(6,7,11));

console.log(solution(16,33,17));