
function duplicateLetters(...args) {
  var count={};
  var arr=args[0].split("")
  arr.forEach((x)=>{count[x]=(count[x]||0)+1;})

  var max=0;
  for(var i in count){
    if(max<count[i]){
      max=count[i];
    }
    
  }
  if(max<=1){
    console.log(false,max,count)
    return false;
  }
  return max;
}


export {
  duplicateLetters,
};
