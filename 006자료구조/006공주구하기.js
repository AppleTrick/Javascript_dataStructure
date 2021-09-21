function solution(n,k){
    let queue = Array.from({length : n} , (v,i) => v = i+1);
    console.log(queue);
}

console.log(solution(8,3));