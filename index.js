function show() {
    $.ajax({
        url: 'show.php',
        timeout: 10000,
        success: function(data) {
            $('#chat').html(data);
        },
        error: function() {
            $('#chat').html("Не удалось загрузить сообщения");
        }
    });
}
    
function send() {
    var sender = $('#sender').val();
    var message = $('#chattext').val(); 
        
    if(sender.length > 0 && message.length > 0) {
        $.ajax({
            url: 'send.php',
            type: 'post',
            timeout: 10000,
            data: {'sender': sender, 'message': message},
            success: function(data) {
                document.getElementById('chattext').value = "";
            },
            error: function() {
                alert("Не удалось отправить сообщение");
            }
        });
    } else if(sender.length == 0) {
        alert("Введите своё имя!");
    } else if(message.length == 0) {
        alert("Введите сообщение!");
    }
}
    
var interval = 1000;
    
show();
    
setInterval('show()', interval);