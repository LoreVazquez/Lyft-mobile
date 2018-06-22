var code = "";
function getCode(){
        
    for(var i = 0; i < 3; i++){
        code += Math.floor(Math.random()* 10);
        console.log(code);
    }

    swal("Tu código es:", "LAB-" + code);

    setTimeout(function(){(window.location.href = 'code.html');},3000);

}

$("#input-code").keypress(function(){
    console.log($("#input-code").val())
    console.log(code)
if($("#input-code").val() == code){
    $("#code").val().removeAttr("disabled");
}
});


$("#number-phone").keypress(function(){
    this.value = this.value.replace(/[^0-9]/g, '');
    if($("#number-phone").val().length > 9){
       $("#next").attr("disabled", false);
    }else{
        $("#next").attr("disabled", true)
    }
});



 // Banderas
 $("li").on('click', function () {
    var $valueSelect = $(this).data('code');
    var lada = $("#lada").html()

    if ($valueSelect === 'MX') {
        console.log("mexico")
        $("#lada").html('+52');
    } else if ($valueSelect === 'USA') {
        console.log("usa")
        $("#lada").html('+001');
    } else if ($valueSelect === 'PN') {
        $("#lada").html ('+507');
    } else if ($valueSelect === 'UK') {
        $("#lada").html('+44');
    }
});

//Vista de inicio

$("#sing-up").click(function(){
    window.location.href = "sing-up.html"
})

$("#log-in").click(function(){
    window.location.href = "log-in.html"
})

$("#back-sing-in").click(function(){
    window.location.href = "sing-up.html"
})


$("#back-index").click(function(){
    window.location.href = "index.html"
})

$(document).ready(function(){
    $('#next').click(function(){
        getCode();
    });
    
  });

