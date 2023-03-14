let $ = document
let in1 = $.querySelector('.in_1')
let in2 = $.querySelector('.in_2')

let sp1 = $.querySelector('.title1')
let sp2 = $.querySelector('.title2')

function func_1(){
    if(in1.value.length < 12){
        sp1.innerHTML = 'must be more character'
        sp1.style.color = 'red'
    }else{
        sp1.innerHTML = 'it`s well'
        sp1.style.color = 'blue'
    }
}

function func_2(){
    if(in2.value.length < 8){
        sp2.innerHTML = 'must be more character'
        sp2.style.color = 'red'
    }else{
        sp2.innerHTML = 'it`s well'
        sp2.style.color = 'blue'
    }
}
