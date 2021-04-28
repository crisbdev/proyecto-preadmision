const name = prompt("Bem-vindo ao teste, informe seu nome para continuar: ");


if (name != "") {
    console.log(name);
    document.write("Teste de " + name);

    const confirmationTest = prompt("Deseja realizar o teste? S/N");

    console.log(confirmationTest);

    if (confirmationTest == "S") {
        /* let wichTest = prompt("Qual te deseja realizar?" + "\n" + "Digite " + 1 + " para Teste do BBB." + "\n" + "Digite " + 2 + " para Teste de Avenida Brasil.")
         console.log(wichTest)
         if (wichTest === 1) {*/
        //Primeira pergunta
        let firstAnswer = prompt("Quem foi o primeiro do eliminado BBB?" + "\n" + "Digite " + 1 + " para Lucas." + "\n" + "Digite " + 2 + " para Kerline." + "\n" + "Digite " + 3 + " para Arcrebiano.");
        console.log(firstAnswer);
            if (firstAnswer == 2) { console.log(document.getElementById("rightAnswers"))
            document.getElementById("rightAnswers").innerHTML += "\n" + "Kerline"
        } else document.getElementById("wrongAnswers").innerHTML += "\n" + "Kerline"
        //Segunda pergunta
        let secondAnswer = prompt("Quem era conhecido por ser a espiã da casa?" + "\n" + "Digite " + 1 + " para Karol com K." + "\n" + "Digite " + 2 + " para Juliette." + "\n" + "Digite " + 3 + " para Sarah.");
        console.log(secondAnswer);
        if (secondAnswer == 3) {
            document.getElementById("rightAnswers").innerHTML += "\n" + "Sarah"
        } else document.getElementById("wrongAnswers").innerHTML += "\n" + "Sarah"
        //Terceira pergunta
        let thirdAnswer = prompt("Quem ganhou a última prova do líder na última semana de abril?" + "\n" + "Digite " + 1 + " para Juliette." + "\n" + "Digite " + 2 + " para Camila." + "\n" + "Digite " + 3 + " para Gil do Vigor.");
        console.log(thirdAnswer);
        if (thirdAnswer == 1) {
            document.getElementById("rightAnswers").innerHTML += "\n" + "Juliette"
        } else document.getElementById("wrongAnswers").innerHTML += "\n" + "Juliette"


        /* }//Segundo teste else {
            //Primeira pergunta
            let firstAnswer = prompt("Quem foi a personagem de Adriana Esteves na novela?" + "\n" + "Digite " + 1 + " para Carminha." + "\n" + "Digite " + 2 + " para Nina." + "\n" + "Digite " + 3 + " para Soraya.");
            console.log(firstAnswer);
            //Segunda pergunta
            let secondAnswer = prompt("Como se chamava o jogador de futebol casado com Carminha?" + "\n" + "Digite " + 1 + " para Jorginho." + "\n" + "Digite " + 2 + " para Tufão." + "\n" + "Digite " + 3 + " para Leleco.");
            console.log(secondAnswer);
            //Terceira pergunta
            let thirdAnswer = prompt("Como se chamava a personagem de Débora Falabella" + "\n" + "Digite " + 1 + " para Rita." + "\n" + "Digite " + 2 + " para Judite." + "\n" + "Digite " + 3 + " para Gabriela.");
            console.log(thirdAnswer);
        }
       /*function printAnswers(){ 
           document.write();
   */
    } else {
        alert("Muito obrigada por clicar, o teste não será realizado sem identificação.")
    }

}
// } else alert("Nome não informado! Tente novamente.")*/