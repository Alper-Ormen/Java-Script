$(function() {

    var text = document.getElementById("title");
    var Increase = document.getElementById("Plus");
    var Reduce = document.getElementById("Minus");
    // var fs = 6;

    // Arttir();
    // Eksilt();

    // function Arttir() {
    //     $("#Plus").click(function() {
    //         if (fs > 1) {
    //             fs--;
    //         }

    //         $("#title").removeClass('fs-' + (fs + 1)).addClass('fs-' + fs);
    //     })
    // }

    // function Eksilt() {
    //     $("#Minus").click(function() {
    //         if (fs < 6) {
    //             fs++;
    //         }

    //         $("#title").removeClass('fs-' + (fs - 1)).addClass('fs-' + fs);
    //     })
    // }

    $("#Primary").click(function() {
        text.className = "text-center text-primary "
    })
    $("#Secondary").click(function() {
        text.className = "text-center text-secondary"
    })
    $("#Success").click(function() {
        text.className = "text-center text-success"
    })
    $("#Danger").click(function() {
        text.className = "text-center text-danger"
    })
    $("#Warning").click(function() {
        text.className = "text-center text-warning"
    })
    $("#Info").click(function() {
        text.className = "text-center text-info"
    })
    $("#Light").click(function() {
        text.className = "text-center text-light"
    })
    $("#Dark").click(function() {
        text.className = "text-center text-dark"
    })

    Increase.addEventListener("click", () => {
        var currentFontSize = parseFloat(getComputedStyle(text).fontSize);
        var newFontSize = currentFontSize + 1;
        text.style.fontSize = `${newFontSize}px`;
    });

    Reduce.addEventListener("click", () => {
        var currentFontSize = parseFloat(getComputedStyle(text).fontSize);
        var newFontSize = currentFontSize - 1;
        text.style.fontSize = `${newFontSize}px`;
    });
})