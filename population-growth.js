// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p) {
    
    let population = p0;
    let years = 0;

    while(population < p){
        population = Math.floor(population * (1 + percent / 100 ) + aug);
        years++;
    }

    return years;

}