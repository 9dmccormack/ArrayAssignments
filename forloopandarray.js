let oz = [8,12,16,20,24,32];
let sizes = ["xs","s","m","l",'xl'];
let prices = [4.99,9.99,19.99,49.99];
let speeds = [93,99,95,96,97,99];
let pings = [45,60,120,80,155,160,220,110];
let bits = [1,1,0,1,0,0,1,0,0,1];

function example1(list,percent){
    let  =[];
    for(let d=0; d<oz.length; d++){
        if (example1 [d] >=amount){
            example1.push(ozs[d])
        }
}
    return example1;
}

function bits(bit){
    let total=0;
    for(let b=0; b<bit.length; b++){
        total = total+ bits[b];
        //new = old + current #
    }
    return total;
}

function average(list){

    let count = 0;
    for(let c=0; c<list.length; c++){
        count=count + list[c]
    }
return count/list.length
}

function example4(list, number){

}

//Creating test code
function main(){
    console.log(example1(oz,20));
    console.log("The total # of bits is "+example2());
    console.log("Your average ping for internet is "+average(pings));
    console.log("The first pitch thrown above 95 was pitch-index "+example4(speeds, 95));
}
//run test code with CTRL + SHIFT + B
main();
