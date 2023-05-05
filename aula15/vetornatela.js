let valores = [8, 1, 7, 4, 2, 9]
valores.sort() //coloca os elementos em ordem crescente dentro da array.

//console.log(valores) (pior maneira!)
/*
for(let pos=0; pos < valores.length; pos++) { 
    
    (Enquanto variável (let pos) pos for menor (<) que valor do vetor (valores.length) o pos vai receber pos mais um (pos++))

    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) //(Melhor maneira)
}