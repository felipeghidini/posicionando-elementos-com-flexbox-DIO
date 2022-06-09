const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'Desenvolvedora'
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'Desenvolvedora'
}

const paulo: {nome: string, idade: number, profissao: string} = {
    nome: 'Paulo',
    idade: 25,
    profissao: 'Desenvolvedora'
}

enum Profissao {
    Professora, 
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}
interface Pessoa {
    nome: string,
    idade: number, 
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[],
}

const victor: Pessoa = {
    nome: 'Victor',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const amanda: Pessoa = {
    nome: 'Amanda',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const eloah: Estudante = {
    nome: 'Eloah',
    idade: 1,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática', 'Lógica']
}

const rafael: Estudante = {
    nome: 'Rafael',
    idade: 1,
    materias: ['Matemática', 'Lógica']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item);
    }
}

listar(eloah.materias);  