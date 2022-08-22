var activeBtn = document.getElementById("activeForm");
var forms = document.getElementsByClassName("formSection__form");

function createOption() {
  activeBtn.style.left = "0";

  forms[0].style.top = "10px";
  forms[1].style.top = "10px";
  forms[2].style.top = "10px";
  forms[3].style.top = "10px";
}

function searchOption() {
  activeBtn.style.left = "74px";

  forms[0].style.top = "-314px";
  forms[1].style.top = "-314px";
  forms[2].style.top = "-314px";
  forms[3].style.top = "-314px";
}

function updateOption() {
  activeBtn.style.left = "150px";

  forms[0].style.top = "-725px";
  forms[1].style.top = "-725px";
  forms[2].style.top = "-725px";
  forms[3].style.top = "-725px";
}

function deleteOption() {
  activeBtn.style.left = "228px";

  forms[0].style.top = "-1020px";
  forms[1].style.top = "-1020px";
  forms[2].style.top = "-1020px";
  forms[3].style.top = "-1020px";
}
