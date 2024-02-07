function solution(price, money, count) {
    var buf = 0
   for(let i = 0 ; i <= count ; i++) {
       buf += i * price
   }

    return buf > money ? buf-money : 0
}