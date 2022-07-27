const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
    {
        nome: 'Matheus',
		nota: 3,
		turma: '2C',
    }
];

function alunosAprovados(arr, media) { //Crie uma função que recebe o array alunos e um número que irá representar a média final;
	let aprovados = [];

	for(let i = 0; i < arr.length; i++) { //Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
		
        const {nota, nome } = arr[i]; //Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

		if(nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 5));