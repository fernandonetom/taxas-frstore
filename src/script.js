document.addEventListener('DOMContentLoaded', () => {
  $('form').on('submit',(e)=> {
    e.preventDefault();
    const valor = $('#valor').val()
    if(valor === ""){
      return alert('preencha o valor')
    }

    let tabela = `<table class="table table-striped">
    <thead>
      <tr>
      <th scope="col">Parcela</th>
        <th scope="col">Total</th>
        <th scope="col">Taxa</th>
        <th scope="col">Parcela</th>
      </tr>
    </thead>
    <tbody>
    `;

    const newV = parseFloat(valor)
    tabela += `
    <tr>
      <th scope="row">Débito</th>
      <td>${(newV/(1-(1.48)/100)).toFixed(2)}</td>
      <td>1.48%</td>
      <td>${(newV/(1-(1.48)/100)).toFixed(2)}</td>
    </tr>
    `

    const taxa = [0, 1.08, 1.62, 2.16, 2.7, 3.24, 3.78, 4.32, 4.86, 5.4, 5.94, 6.48]

    for(let i = 0; i< 12; i++){
      const nTaxa = 2.96 + taxa[i];
      const valorComTaxa = (newV/(1-(nTaxa)/100)).toFixed(2)
      tabela += `
    <tr>
      <th scope="row">${i +1}x</th>
      <td>${valorComTaxa}</td>
      <td>${nTaxa.toFixed(2)}%</td>
      <td>${(valorComTaxa/(i + 1)).toFixed(2)}</td>
    </tr>
    `
    }

    tabela += `
  </tbody>
</table>`

$('.table-responsive')[0].innerHTML = tabela;
  })
})