var testScore = [];

function nhap() {
    var hoten = document.getElementById("header-hoten").value;
    var toan = document.getElementById("header-toan").value;
    var ly = document.getElementById("header-ly").value;
    var hoa = document.getElementById("header-hoa").value;
    var sv = {
        stt: "", 
        hoten: hoten, 
        toan: toan, 
        ly: ly, 
        hoa: hoa, 
        trungbinh: "?"
    }

    if (isNaN(toan) || isNaN(ly) || isNaN(hoa)) {
        alert("Nhập điểm là số");
    } else

    if (toan < 0 || toan > 10 || ly < 0 || ly > 10 || hoa < 0 || hoa > 10) {
        alert("Nhập điểm từ 0 đến 10");
    } else {
        testScore.push(sv);
    }

    show(sv); 
}

function show() {
    var table = document.getElementById("newDSSV");

    for (var i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }
    
    for (var i = 0; i < testScore.length; i++) {
        var obj = testScore[i];
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        cell1.innerHTML = i + 1;
        cell2.innerHTML = obj.hoten;
        cell3.innerHTML = obj.toan;
        cell4.innerHTML = obj.ly;
        cell5.innerHTML = obj.hoa;
        cell6.innerHTML = "<span class='tb'>?</span>";
    }
}

function tinh() {
    for (var i = 0; i < testScore.length; i++) {
        var obj = testScore[i];
        obj.trungbinh = (parseFloat(obj.toan) + parseFloat(obj.ly) + parseFloat(obj.hoa)) / 3;
        var tbfix = obj.trungbinh.toFixed(2);
        document.getElementsByClassName("tb")[i].innerHTML = tbfix;
    }
}

function xacdinh() {
    for (var i = 0; i < testScore.length; i++) {
        var obj = testScore[i];
        obj.trungbinh = (parseFloat(obj.toan) + parseFloat(obj.ly) + parseFloat(obj.hoa)) / 3;
        var tbfix = obj.trungbinh.toFixed(2);

        if (tbfix >= 8) {
            document.getElementsByClassName("tb")[i].parentNode.style.backgroundColor = "red";
        }
    }
}



