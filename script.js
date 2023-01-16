// Dados dos alunos
const studants = [
  // Aluno 01
  {
    name: "João",
    scoreOne: 5,
    scoreTwo: 9,
  },
  // Aluno 02
  {
    name: "Letícia",
    scoreOne: 10,
    scoreTwo: 9,
  },
  // Aluno 03
  {
    name: "Diego",
    scoreOne: 5,
    scoreTwo: 4,
  },
  // Aluno 04
  {
    name: "Júlia",
    scoreOne: 3,
    scoreTwo: 5,
  },
]

// Resultado
function finalScore(scoreOne, scoreTwo) {
  return (scoreOne + scoreTwo) / 2
}

function printFinalScore(studant) {
  let result = finalScore(studant.scoreOne, studant.scoreTwo)
  if (result >= 7) {
    return `A média do(a) aluno(a) ${studant.name} é:  ${result}
    Parabéns! Você foi aprovado(a)`
  } else {
    return `A média do(a) aluno(a) ${studant.name} é:  ${result}
    Não foi dessa vez! Tente novamente!`
  }
}

for (let studant of studants) {
  let resultMessage = printFinalScore(studant)
  alert(resultMessage)
}
