// OPEN THE NAVBAR SIDEBAR

$("header .icon-open").click(function(){
  let headerNav=  $("header .nav").outerWidth()

$("header .nav").css({left:"0px",transition:"left 1s"})
$(".icon-open").css({left:`${headerNav}px`,transition:"left 1s"})
})



// CLOSE THE NAVBAR SIDEBAR
$(".close-icon").click(function(){
    let headerNav=$("header .nav").outerWidth()
   
    $("header .nav").css({left:`-${headerNav}px`,transition:"left 1s"})
    $(".icon-open").css({left:"0px",transition:"left 1s"})
    
})

$(".nav-link").click(function(e){
let navHref=  $(e.target).attr("href")
let eleTop=$(navHref).offset().top;

$("html,body").animate({
  scrollTop:eleTop
},2000)

})



// SLIDE UP OF SECTION 2


$(".details .section1 .slideUp-element").slideUp()

$(".details .section1 h2").click(function(e){
$(e.target).next().slideToggle()
})



// MESSAGE OF 100 LETTERS

$(".contact-us .form textarea").on( "input",function(e){
  
  let textLength = Number($(".contact-us .form textarea").val().length)
  let ele= Number($(".contact-us .form .msg span#num").text())- textLength
let spanElement=$(".contact-us .form .msg span#num")

 console.log(textLength)
if(textLength > 100 || isNaN(textLength)){
  spanElement.text("your available character finished")
}
else{
  spanElement.text(100-textLength)

}
 
})





// COUNTDOWN TIMER

function myTimer() {  
  var ending =  $("#duration").attr("data-endtime"),  
      endTime = new Date(ending);  
  endTime = Date.parse(endTime) / 1000;  
  var now = new Date();  
  now = Date.parse(now) / 1000;  
  var timeLeft = endTime - now;  
  var days = Math.floor(timeLeft / 86400);  
  var hours = Math.floor((timeLeft - days * 86400) / 3600);  
  var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);  
  var seconds = Math.floor(  
    timeLeft - days * 86400 - hours * 3600 - minutes * 60  
  );  
  if (days < "10") {  
    days = "0" + days;  
  }  
  if (days < "1") {  
    days = "0";  
  }  
  if (hours < "10") {  
    hours = "0" + hours;  
  }  
  if (hours < "1") {  
    hours = "0";  
  }  
  if (minutes < "10") {  
    minutes = "0" + minutes;  
  }  
  if (minutes < "1") {  
    minutes = "0";  
  }  
  if (seconds < "10") {  
    seconds = "0" + seconds;  
  }  
  if (seconds < "1") {  
    seconds = "0";  
  }  
  $("#days").text(days+ " D")
  $("#hours").text(hours+ " H")
  $("#min").text(minutes+ " M")
  $("#sec").text(seconds+ " S")
    
}  
setInterval(function() {  
  myTimer();  
}, 1000); 