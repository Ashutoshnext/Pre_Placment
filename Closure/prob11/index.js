function outer(){
    let massage="this is outer information";
    return function (){
        console.log(massage);
        
    }
}
let outerfn=outer()
outerfn()
