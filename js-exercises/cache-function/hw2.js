//https://scotch.io/tutorials/understanding-memoization-in-javascript
//memoization


function nthfiboelement(n){
    var var1=0;
    var var2=1;
    var tempSum=0;
    if(n==0){
        return null;
    }
    else if(n==1){
        return var1;
    }
    else if(n==2){
        return  var2;
    }
    else{
        for(var k=2;k<=n;k++){
            tempSum=var1+var2;
            var1=var2;
            var2=tempSum;
        }
      return tempSum  
    }
}
console.log(nthfiboelement(7))

function nthfiboelementrecursion(n,var1, var2){
    if(n==1){
        return var2;
    }
    return nthfiboelementrecursion(n-1,var2, var1+var2)
}
function betterFibo(n){
    if(n<=1){
        return 1;
    }
    return betterFibo(n-1)+betterFibo(n-2)
}

console.log(nthfiboelementrecursion(7,0,1))
console.log(betterFibo(7))


function memoizedFibo(n, memo){
    var memo = memo || {}
    if(n<=1){
        return 1
    }
    if(memo[n]){
        return memo[n]
    }
    return memoizedFibo(n-1,memo)+memoizedFibo(n-2,memo)
}

console.log(memoizedFibo(7))


function memoizer(anyfunction){
    let cache={}
    return function(n){
        if(cache[n]!=undefined){
            return cache[n]
        }
        else{
            let result = anyfunction(n)
            cache[n]=result
            return result
        }
    }
}

console.log(memoizer(betterFibo(7)))
