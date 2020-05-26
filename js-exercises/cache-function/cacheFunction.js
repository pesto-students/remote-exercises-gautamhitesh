function cacheFunction(cb) {
  let functionArguments={}
  return function(...args){
    if(!functionArguments[args[0]]){
      functionArguments[args[0]]=true;
      return cb(...args);
    }
  }
}

export {
  cacheFunction,
};
