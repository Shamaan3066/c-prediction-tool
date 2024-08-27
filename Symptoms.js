function myfunc() {
    sympcond(storeval(Yconsult()))
}

var a = 0, b = 0;

function Yconsult() {
    var Yfever = document.getElementById("Yfever");
    var Nfever = document.getElementById("Nfever");
    {
        if (Yfever.checked == true)
            a = a + 1;
        else if (Nfever.checked == true)
            b = 0
    }

    var Ycough = document.getElementById("Ycough");
    var Ncough = document.getElementById("Ncough");
    {
        if (Ycough.checked == true)
            a = a + 1
        else if (Ncough.checked == true)
            b = 0
    }

    var Ytiredness = document.getElementById("Ytiredness");
    var Ntiredness = document.getElementById("Ntiredness");
    {
        if (Ytiredness.checked == true)
            a = a + 1
        else if (Ntiredness.checked == true)
            b = 0
    }

    var Ythroat = document.getElementById("Ythroat");
    var Nthroat = document.getElementById("Nthroat");
    {
        if (Ythroat.checked == true)
            a = a + 1
        else if (Nthroat.checked == true)
            b = 0
    }

    var Yheadache = document.getElementById("Yheadache");
    var Nheadache = document.getElementById("Nheadache");
    {
        if (Yheadache.checked == true)
            a = a + 1
        else if (Nheadache.checked == true)
            b = 0
    }

    var Yaches = document.getElementById("Yaches");
    var Naches = document.getElementById("Naches");
    {
        if (Yaches.checked == true)
            a = a + 1
        else if (Naches.checked == true)
            b = 0
    }

    var Ydiarrhoea = document.getElementById("Ydiarrhoea");
    var Ndiarrhoea = document.getElementById("Ndiarrhoea");
    {
        if (Ydiarrhoea.checked == true)
            a = a + 1
        else if (Ndiarrhoea.checked == true)
            b = 0
    }

    var Ydiscolouration = document.getElementById("Ydiscolouration");
    var Ndiscolouration = document.getElementById("Ndiscolouration");
    {
        if (Ydiscolouration.checked == true)
            a = a + 1
        else if (Ndiscolouration.checked == true)
            b = 0
    }

    var Yeyes = document.getElementById("Yeyes");
    var Neyes = document.getElementById("Neyes");
    {
        if (Yeyes.checked == true)
            a = a + 1
        else if (Neyes.checked == true)
            b = 0
    }

    var Ybreathing = document.getElementById("Ybreathing");
    var Nbreathing = document.getElementById("Nbreathing");
    {
        if (Ybreathing.checked == true)
            a = a + 10
        else if (Nbreathing.checked == true)
            b = 0
    }

    var Ymobility = document.getElementById("Ymobility");
    var Nmobility = document.getElementById("Nmobility");
    {
        if (Ymobility.checked == true)
            a = a + 10
        else if (Nmobility.checked == true)
            b = 0
    }

    var Ychest = document.getElementById("Ychest");
    var Nchest = document.getElementById("Nchest");
    {
        if (Ychest.checked == true)
            a = a + 10
        else if (Nchest.checked == true)
            b = 0
    }
}

function storeval() {
    for (i = 0; i < 11; i++) {
        c = a + b;
    }
}

function sympcond() {
    if (c >= 5) {
        window.open("Consult.html")
    }
    else if (c >= 3 && c <= 4) {
        window.open("Medication.html")
    }
    else if (c >= 1 && c <= 2) {
        window.open("Free.html")
    }
    else if (c == 0) {
        window.open("Free.html")
    }
    else {
        alert("Please select options")
    }
}

function validateSelection() {
    // Get all radio button groups
    var groups = document.querySelectorAll('input[type="radio"]:checked');
  
    // Check if at least one group has an option selected
    if (groups.length === 0) {
      // Show the error message
      document.getElementById("error-msg").style.display = "block";
      // Prevent the form submission
      event.preventDefault();
    } else {
      // Hide the error message
      document.getElementById("error-msg").style.display = "none";
      // Call myfunc() to run
      myfunc();
    }
  }