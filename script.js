function copyEvent(element) {
    var $temp = $("<input>");
    let header = document.querySelector("h1");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    console.log(element)
    if(element=='#copy_number'){
       alert("Copied phone number" );
    }
    if(element=='#copy_email'){
       alert("Copied e-mail adress" );
    }
    
 }