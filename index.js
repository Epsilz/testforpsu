$(document).ready(function () {
 $("#form").on('submit', function (){
   $.ajax({
     url: 'https://60376bfd5435040017722533.mockapi.io/formRej',
     type: 'post',  
     async: false,   
     data: $(this).serialize(),
     success: function(data){
        $('#msg').html(data);
    },
     error: function (jqXHR, exception) {
        if (jqXHR.status === 403) {
            alert('Запрещено. У вас нет прав доступа к содержимому. (403)');
        } else if (jqXHR.status == 404) {
            alert('Запрошенная страница не найдена (404).');
        } else if (jqXHR.status == 500) {
            alert('Внутренняя ошибка сервера (500).');
        } else if (exception === 'parsererror') {
            alert('Ошибка анализа JSON.');
        } else if (exception === 'timeout') {
            alert('Тайм-аут.');
        } else if (exception === 'abort') {
            alert('Выполнение запроса Ajax прервано.');
        } else {
            alert('Неизвестная ошибка. ' + jqXHR.responseText);
        } 
    }        
   });
 });
});