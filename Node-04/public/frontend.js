// Função que chama o endpoint e exibe os dados
async function carregarDados() {
    try {
      const resposta = await fetch('http://localhost:3001/notas');
      const dados = await resposta.json();
      document.getElementById('saida').textContent = JSON.stringify(dados, null, 2);
    } catch (erro) {
      console.error('Erro ao carregar os dados:', erro);
    }
  }
  