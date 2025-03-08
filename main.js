function ali() {
  let name = document.getElementById("firs").value;
  let lastname = document.getElementById("last").value;
  document.getElementById("first").innerText = "Hallo " + name + " " + lastname;
  if (name.toLowerCase() === "hajrat" && lastname.toLowerCase() === "ali") {
    document.getElementById("second").innerText = "Aap Bahut Achhe Admi Hai";
  } else {
    document.getElementById("second").innerText = "Aap Ek Number ke Chutiya Insan Hai";
  }
  document.querySelector(".bs").hidden = true;
  document.querySelector(".as").hidden = false;
} 
