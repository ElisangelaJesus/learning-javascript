// 1. Declare uma constante para o seu nome
const nome = "Elisangela";

// 2. Declare uma variável para sua idade (que pode mudar)
let idade = 31; // Coloque sua idade real aqui

// 3. Crie o objeto de usuário
const usuario = {
  nome: nome,
  idade: idade,
  posgraduando: true,
  tecnologias: ["JavaScript", "Git", " GitHub"],
};

// 4. Tente mudar o nome (Isso vai causar um erro proposital)
// nome = "Outro Nome";
//Explicação: "Isso deu erro porque constantes não permitem reatribuição".

console.log("Perfil do Usuário:", usuario);

// Aprendizado: Usei 'const' para o nome porque é um dado imutável nesta regra de negócio.
