const username = prompt("Bem-vindo ao teste, informe seu nome para continuar: ");
const containerName = document.querySelector("#container");
if (username != "") {
    
    containerName.innerHTML += "Teste de " + username;

    const confirmationTest = prompt("Deseja realizar o teste? S/N");

    if (confirmationTest == "S") {
        let chooseTest = prompt("Qual te deseja realizar?" + "\n" + "Digite " + 1 + " para Teste do BBB." + "\n" + "Digite " + 2 + " para Teste de Avenida Brasil.")
        if (chooseTest == 1) {
            //Primeira pergunta
            let firstAnswer = prompt("Quem foi o primeiro do eliminado BBB?" + "\n" + "Digite " + 1 + " para Lucas." + "\n" + "Digite " + 2 + " para Kerline." + "\n" + "Digite " + 3 + " para Arcrebiano.");
            if (firstAnswer === 2) {
                document.getElementById("rightAnswers").innerHTML += "\n" + "Kerline"
            } else document.getElementById("wrongAnswers").innerHTML += "\n" + "Resposta 1"
            //Segunda pergunta
            let secondAnswer = prompt("Quem era conhecido por ser a espiã da casa?" + "\n" + "Digite " + 1 + " para Karol com K." + "\n" + "Digite " + 2 + " para Juliette." + "\n" + "Digite " + 3 + " para Sarah.");
            if (secondAnswer === 3) {
                document.getElementById("rightAnswers").innerHTML += "\n" + "Sarah"
            } else document.getElementById("wrongAnswers").innerHTML += "\n" + "Resposta 2"
            //Terceira pergunta
            let thirdAnswer = prompt("Quem ganhou a última prova do líder na última semana de abril?" + "\n" + "Digite " + 1 + " para Juliette." + "\n" + "Digite " + 2 + " para Camila." + "\n" + "Digite " + 3 + " para Gil do Vigor.");
            if (thirdAnswer === 1) {
                document.getElementById("rightAnswers").innerHTML += "\n" + "Juliette"
            } else document.getElementById("wrongAnswers").innerHTML += "\n" + "Resposta 3"

        }
    } /*Segundo teste*/
    else {
        //Primeira pergunta
        let firstAnswer = prompt("Quem foi a personagem de Adriana Esteves na novela?" + "\n" + "Digite " + 1 + " para Carminha." + "\n" + "Digite " + 2 + " para Nina." + "\n" + "Digite " + 3 + " para Soraya.");
        if (firstAnswer === 1) {
            document.getElementById("rightAnswers").innerHTML += "\n" + "Carminha"
        } else document.getElementById("wrongAnswers").innerHTML += "\n" + "Resposta 1"
        //Segunda pergunta
        let secondAnswer = prompt("Como se chamava o jogador de futebol casado com Carminha?" + "\n" + "Digite " + 1 + " para Jorginho." + "\n" + "Digite " + 2 + " para Tufão." + "\n" + "Digite " + 3 + " para Leleco.");
        if (firstAnswer === 2) {
            document.getElementById("rightAnswers").innerHTML += "\n" + "Tufão"
        } else document.getElementById("wrongAnswers").innerHTML += "\n" + "Resposta 2"
        //Terceira pergunta
        let thirdAnswer = prompt("Como se chamava a personagem de Débora Falabella" + "\n" + "Digite " + 1 + " para Rita." + "\n" + "Digite " + 2 + " para Judite." + "\n" + "Digite " + 3 + " para Gabriela.");
        if (firstAnswer === 1) {
            document.getElementById("rightAnswers").innerHTML += "\n" + "Rita"
        } else document.getElementById("wrongAnswers").innerHTML += "\n" + "Resposta 3"
    }
    /*function printAnswers(){ 
           document.write();
   */
} else {
    alert("Muito obrigada por clicar, o teste não será realizado sem identificação.")
}

// } else alert("Nome não informado! Tente novamente.")*/