/*let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é o ${num}`)*/

let num = [5, 8, 2, 9, 3]
num.push(1) // push para adicionar de forma automática um novo elemento ao array.
num.sort() // sort para colocar todos elementos de dentro de um array e colocar em ordem crescente.
console.log(num)
console.log(`O vetor tem, ${num.length} posições`) //Para mostrar todos os elementos de dentro de um array. 
console.log(`O primeiro valor do vetor é ${num[0]}`)  //Para mostrar o elemento de forma separada.

let pos = num.indexOf(5)  // Variável pos (let pos) recebe (=) o num.indexOf()
if (pos == -1) { // Se (if) a posição (pos) for igual (==) a menos um (-1) vai mostrar a mensagem abaixo
    console.log(`Valor não foi encontrado!`) //aparace esta mensagem, caso o valor seja encontrado ele ignora esta mensagem e envia a a mensagem abaixo com a informação de onde esta o elemento solicitado
} else { //Se não (else).
    console.log(`O valor está na posição ${pos}`) //Caso encontre aparace esta mensagem
}
