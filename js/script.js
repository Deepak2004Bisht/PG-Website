// signup form
function openModal() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("modal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("modal").style.display = "none";
  }
  
  function toggleMenu() {
    const navButtons = document.getElementById("navButtons");
    navButtons.style.display = navButtons.style.display === "flex" ? "block" : "flex";
  }

  
   
// login form
  function openModal1(){
    document.getElementById("overlay1").style.display = "block";
    document.getElementById("modal1").style.display = "block";
  }

  function closeModal1(){
    document.getElementById("overlay1").style.display = "none";
    document.getElementById("modal1").style.display = "none";
  }

  function toggleMenu() {
    const navButtons = document.getElementById("navButtons");
    navButtons.style.display = navButtons.style.display === "flex" ? "none" : "flex";
  }
  
