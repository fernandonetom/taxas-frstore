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
      <th scope="col">Parcelas</th>
        <th scope="col">Taxa</th>
        <th scope="col">Valor recebido</th>
      </tr>
    </thead>
    <tbody>
    `;

    const newV = parseFloat(valor)
    tabela += `
    <tr>
      <th scope="row">Débito ${(newV*(1-(1.45)/100)).toFixed(2)}</th>
      <td>1.48%</td>
      <td>${(newV*(1-(1.45)/100)).toFixed(2)}</td>
    </tr>
    `

    const taxa = [0, 0.69, 1.03, 1.36, 1.69, 2.02, 2.93, 3.26, 3.58, 3.91, 4.23, 4.54]

    for(let i = 0; i< 12; i++){
      const nTaxa = 2.9 + taxa[i];
      const valorComTaxa = (newV*(1-(nTaxa)/100)).toFixed(2)
      tabela += `
    <tr>
      <th scope="row">${i +1}x de R$ ${(valorComTaxa/(i + 1)).toFixed(2)}</th>
      <td>${nTaxa.toFixed(2)}%</td>
      <td>${valorComTaxa}</td>
    </tr>
    `
    }

    tabela += `
  </tbody>
</table>`

$('.table-responsive')[0].innerHTML = tabela;
  })
})
