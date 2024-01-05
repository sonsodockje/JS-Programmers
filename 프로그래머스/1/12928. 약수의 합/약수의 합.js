function solution(n) {
    let arr = []
    for(let i=1; i <= n ;i ++){
        n % i === 0 ? arr.push(i) : "";
    }
    return arr.reduce((arr, item)=>arr+item, 0);
}