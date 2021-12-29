var todaysDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todaysDate);

var currentHour = moment().hour();
var background = $(".background");
for (var i = 0; i < background.length; i++) {
  var el = background[i];
  var elId = Number(el.id);

  if (currentHour === elId) {
    el.style = "background-color: red;";
  }
  if (currentHour < elId) {
    el.style = "background-color: green;";
  }
  
}

var textArea=document.getElementsByClassName('description')

var saveButton = $(".saveBtn");
for (var i = 0; i < saveButton.length; i++) {
  console.log(textArea[i])
  textArea[i].value=localStorage.getItem('time')
  
}
$(".saveBtn").on("click", function () {
  var text=$(this).siblings(".description").val()
  var time=$(this).siblings(".description").siblings('.hour').text().trim()
  console.log(text)
  console.log(time)
  localStorage.setItem(time, text)
});


 

