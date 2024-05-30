$(document).ready(function(){
    $('form').on('submit', function(e){
       e.preventDefault()
       const valorTarefa = $('#digite-tarefa').val()
       const novoItem = $('<li></li>')
       $(`<p style ="margin-bottom: 20px"> ${valorTarefa} </p>`).appendTo(novoItem)
       $(novoItem).appendTo('ul')
       $('#digite-tarefa').val('')
    })
     
    $('#lista-tr').on('click', 'li', function(){
        $(this).toggleClass('completed')
    })
})