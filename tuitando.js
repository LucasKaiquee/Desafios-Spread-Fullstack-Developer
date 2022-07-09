/*O microblog Twitter é conhecido por limitar as postagens em 140 caracteres. Conferir se um texto vai caber em um tuíte é sua tarefa.

Entrada
A entrada é uma linha de texto T (1 ≤ |T| ≤ 500).

Saída
A saída é dada em uma única linha. Ela deve ser "TWEET" (sem as aspas) se a linha de texto T tem até 140 caracteres. Se T tem mais de 140 caracteres, a saída deve ser "MUTE".

 
Exemplo de Entrada
RT @TheEllenShow: If only Bradley's arm was longer. Best photo ever. #oscars pic.twitter.com/C9U5NOtGap
Exemplo de Saída
TWEET
*/

let texto = prompt();

if(texto.length <= 140){
    console.log("TWEET");
} else{
    console.log("MUTE");
}
 