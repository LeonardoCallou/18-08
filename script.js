const button = document.querySelector("button")
const precoInput = document.getElementById("preco")
const quantidadeInput = document.getElementById("quantidade")
const valorInput = document.getElementById("valor")
const paragrafoResultado = document.getElementById("resultado")

button.addEventListener("click", calcularTroco)

function calcularTroco() {
    const preco = precoInput.valueAsNumber
    const quantidade = quantidadeInput.valueAsNumber
    const valorRecebido = valorInput.valueAsNumber

    if (
        precoInput.value === "" ||
        quantidadeInput.value === "" ||
        valorInput.value === ""
    ) {
        alert("Preencha todos os campos!")
        return
    }

    const total = preco * quantidade
    const troco = valorRecebido - total

    if (troco < 0) {
        paragrafoResultado.textContent =
            `Dinheiro insuficiente. Faltam ${Math.abs(troco).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            })}`
        return
    }

    paragrafoResultado.textContent =
        `TROCO = ${troco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })}`
}
