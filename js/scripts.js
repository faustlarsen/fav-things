$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
   
    let food = $("input#food").val();
    let drinks = $("input#drink").val();
    let movies = $("input#movie").val();
    let books = $("input#book").val();
    let music = $("input#music").val();
    let favorite = [food, drinks, movies, books, music];
    let array = [];
    array.push(favorite[1], favorite[0], favorite[2]);
    let list = document.createElement('ul');
    array.forEach(function (array) {
    let li = document.createElement('li');
    li.textContent = array;
    list.appendChild(li);

  $("#result").append(list);

    }); 
  });
});

