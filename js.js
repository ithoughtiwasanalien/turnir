var section = document.querySelectorAll("section");
var first = document.querySelectorAll("[data-name='forma1']");
var second = document.querySelectorAll("[data-name='forma2']");
var third = document.querySelectorAll("[data-name='forma3']");
var sub = document.querySelector(".submit");
var sub2 = document.querySelector(".submit2");

sub.onclick = function() {
    section.forEach(function(item, i) {
        if (item.dataset.name === "forma2") {
            item.dataset.if = "true";
        } else {
            item.dataset.if = "false";
        }
    });

    var num1 = document.getElementById("participants");
    var num2 = document.getElementById("judges");

    var a = +num1.value;
    var b = +num2.value;

    for (var i = 0; i <= a - 2; i++) {
        function addLi() {
            var inputNode = document.createElement("INPUT"),
                listNode = document.querySelector(".participants_ul"),
                liNode = document.createElement("LI");
            liNode.classList.add("participants_li");
            listNode.appendChild(liNode);
            inputNode.classList.add("input1");
            liNode.appendChild(inputNode);
        }
        addLi();
    };




    for (var j = 0; j <= b - 2; j++) {
        function addLi() {
            var listNode = document.querySelector(".judges_ul"),
                inputNode = document.createElement("INPUT"),
                liNode = document.createElement("LI");
            liNode.classList.add("judges_li");
            listNode.appendChild(liNode);
            inputNode.classList.add("input1");
            liNode.appendChild(inputNode);
        }
        addLi();
    }
};


sub2.onclick = function() {
    section.forEach(function(item, i) {
        if (item.dataset.name === "forma3") {
            item.dataset.if = "true";
        } else {
            item.dataset.if = "false";
        }
    });
}