class Matriz{
    constructor(data){
        this.data = data
    }

    forEach(f){
        for(let i=0;i<this.data.length;i++){
            f(this.data[i])
        }
    }
}
let m = new Matriz([1,2,3])

m.forEach((x)=>{
    console.log(x)
})