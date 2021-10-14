/*
조합의 경우수(메모이제이션)

로 계산합니다. 하지만 여러분은 이 공식을 쓰지않고 다음 공식을 사용하여

재귀를 이용해 조합수를 구해주는 프로그램을 작성하세요.


▣ 입력설명 첫째 줄에 자연수 n(3<=n<=33)과 r(0<=r<=n)이 입력됩니다.

▣ 출력설명 첫째 줄에 조합수를 출력합니다.
*/



function solution(n, r){ 
    let answer;

    let val = 1;    

    function DFS(n,r){
        if(n<r){
            return 1;
        }else{
            return n * DFS(n-1,r)
        }
    }
    answer = DFS(n,r) / DFS(r,1)

    return answer;
}

console.log(solution(5, 3));

// 총평 생각이 엄청 닫혀 있엇음 리턴을 통해 값을 else 에서도 리턴하는 방법만 알면 됫는데 개 뻘짓함


