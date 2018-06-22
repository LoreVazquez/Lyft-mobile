
function getCode(){
    var code = "";    
    for(var i = 0; i < 3; i++){
        code += Math.floor(Math.random()* 10);
        console.log(code);
    }
    swal("Tu código es:", "LAB-" + code);

    if($("#code").val() = code){

    }
}


$("#number-phone").keypress(function(){
    this.value = this.value.replace(/[^0-9]/g, '');
    if($("#number-phone").val().length > 9){
       $("#next").attr("disabled", false);
    }else{
        $("#next").attr("disabled", true)
    }
});


$("#back-index").click(function(){
    window.location.href = "index.html"
})



//Vista de inicio

$("#sing-up").click(function(){
    window.location.href = "sing-up.html"
})

$("#log-in").click(function(){
    window.location.href = "log-in.html"
})


$(document).ready(function(){
    $('#next').click(getCode);
  });

