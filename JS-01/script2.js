// Obter elementos do DOM
const botao = document.getElementById("botao");
const h1 = document.getElementById("titulo");
const campoTexto = document.getElementById("campoTexto");
const lista = document.getElementById("lista");

// 3. Alterar o texto do h1 quando o botão for clicado
botao.addEventListener("click", function() {
    h1.textContent = "Botão clicado!";
});

// 4. Alterar o texto do h1 para "Olá, mundo!" quando a página for carregada
window.addEventListener("load", function() {
    h1.textContent = "Olá, mundo!";
});

// 5. Mudar a cor do h1 para vermelho quando o botão for clicado
botao.addEventListener("click", function() {
    h1.style.color = "red";
});

// 6. Capturar o valor do campo de texto e exibir no console ao pressionar Enter
campoTexto.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        console.log("Texto digitado:", campoTexto.value);
        campoTexto.value = ""; // Limpar o campo após exibir no console
    }
});

// 7. Criar um event handler para remover itens da lista ao serem clicados
lista.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.remove(); // Remove o item clicado
    }
});
