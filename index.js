// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//category select 
var categorySelect = document.getElementById('categorySelect');
var myInput = document.getElementById('myInput');
var addBtn = document.querySelector('.addBtn');

categorySelect.addEventListener('change', function() {
  var selectedCategory = categorySelect.value.toLowerCase();

  // Toggle the visibility of the input field and "Add" button based on the selected category
  myInput.style.display = (selectedCategory === 'all') ? 'none' : 'block';
  addBtn.style.display = (selectedCategory === 'all') ? 'none' : 'block';

  var tasks = document.querySelectorAll('ul li');
  tasks.forEach(function(task) {
    var taskCategory = task.textContent.split(' ')[0].slice(1, -1).toLowerCase();
    if (selectedCategory === 'all' || selectedCategory === taskCategory) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
});


//Adding the task according to the category
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var category = document.getElementById("categorySelect").value;
  
    if (inputValue === '' || category === 'all') {
      alert("Please select category and enter the task!");
    } else {
      var t = document.createTextNode(`[${category}] ${inputValue}`);
      li.appendChild(t);
      document.getElementById("myUL").appendChild(li);
  
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
  
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
    }
  
    document.getElementById("myInput").value = "";
  }