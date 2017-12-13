

function openTab(e, tabName) {

  var i, tabContent, menuTabs;

  tabContent = document.getElementsByClassName("TabContent");
  for(i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  menuTabs = document.getElementsByClassName("MenuTabs");
  for(i = 0; i < menuTabs.length; i++) {
    menuTabs[i].className = menuTabs[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  e.currentTarget.className += " active";
}
