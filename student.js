function addStudent() {
    var studentID = document.getElementById("studentID").value;
    var studentName = document.getElementById("studentName").value;
    var studentDOB = document.getElementById("studentDOB").value;
    var studentClass = document.getElementById("studentClass").value;
    var studentGPA = document.getElementById("studentGPA").value;

    var table = document.getElementById("studentTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = studentID;
    cell2.innerHTML = studentName;
    cell3.innerHTML = studentDOB;
    cell4.innerHTML = studentClass;
    cell5.innerHTML = studentGPA;
    cell6.innerHTML = "<button class='editButton' onclick='editRow(this)'>Chỉnh sửa</button>";
    document.getElementById("studentForm").reset();
}

function editRow(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");
    for (var i = 0; i < cells.length - 1; i++) { 
        var oldValue = cells[i].innerHTML;
        cells[i].innerHTML = "<input type='text' value='" + oldValue + "'>";
    }
    var editButton = cells[cells.length - 1].getElementsByTagName("button")[0];
    editButton.innerHTML = "Lưu";
    editButton.setAttribute("onclick", "saveRow(this)");
    editButton.classList.remove("editButton");
    editButton.classList.add("saveButton");
}

function saveRow(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");
    for (var i = 0; i < cells.length - 1; i++) { 
        var newValue = cells[i].getElementsByTagName("input")[0].value;
        cells[i].innerHTML = newValue;
    }
    var saveButton = cells[cells.length - 1].getElementsByTagName("button")[0];
    saveButton.innerHTML = "Chỉnh sửa";
    saveButton.setAttribute("onclick", "editRow(this)");
    saveButton.classList.remove("saveButton");
    saveButton.classList.add("editButton");
}