export function fakeApi(otherFunction){
    return new Promise(resolve =>{
        setTimeout(() => {
            return resolve(otherFunction);
        }, 1000);
    })
}