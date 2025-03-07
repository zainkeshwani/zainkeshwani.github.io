function showTab(tabId) {
  // Hide all tabs
  var tabs = document.getElementsByClassName('tab-content');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active-tab');
  }

  // Remove the active class from all tab buttons
  var tabButtons = document.getElementsByClassName('tab-button');
  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove('active-button');
  }

  // Show the selected tab
  var selectedTab = document.getElementById(tabId);
  selectedTab.classList.add('active-tab');

  // Highlight the selected tab's button
  var selectedTabButton = document.querySelector(`button[onclick="showTab('${tabId}')"]`);
  if (selectedTabButton) {
    selectedTabButton.classList.add('active-button');
  }
}

function toggleMenu() {
  const menu = document.getElementById('menu-items');
  menu.classList.toggle('hidden');
}




// Get the modal and button
var modal = document.getElementById("about-me-modal");
var btn = document.getElementById("about-me-button");
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}