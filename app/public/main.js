$(document).ready(function(){
    $('.deleteUser').on('click' , deleteUser)
})
  

function deleteUser(){
    var confirmation = confirm('Are you sure?')
    if(confirmation){
        $.ajax({
            type : 'DELETE',
            url  : '/'+$(this).data('id')
        }).done(function(response){
            window.location.replace('/info')
        })
        window.location.replace('/info')
    }

}
