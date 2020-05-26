function sumAll(a) {
  var sum=0;
  if(a[0]<a[1]){
    for(var i=a[0];i<=a[1];i++){
      sum+=i;
    }
  }
  else{
    for(var i=a[1];i<=a[0];i++){
      sum+=i
    }
  }
  return sum;
}

export {
  sumAll,
};
