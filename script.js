
//  var array = [
//     { id:1, name:"Ali", number:0123345, grade:10, education:"martic", gender:"male"},
//     { id:2, name:"usman", number:0123345, grade:11, education:"inter", gender:"female"},
//     { id:3, name:"asim", number:0123345, grade:12, education:"bachalor", gender:"custom"},
//     { id:4, name:"qasim", number:0123345, grade:13, education:"none", gender:"male"},
//     { id:5, name:"bilal", number:0123345, grade:14, education:"martic", gender:"male"},
//     { id:6, name:"ahmed", number:0123345, grade:15, education:"martic", gender:"male"},
//     { id:7, name:"jabar", number:0123345, grade:16, education:"martic", gender:"male"},
//     { id:8, name:"iftikhar", number:0123345, grade:17, education:"martic", gender:"male"},
//     { id:9, name:"Talha", number:0123345, grade:18, education:"martic", gender:"male"},
//     { id:10, name:"Rizwan", number:0123345, grade:19, education:"martic", gender:"male"},
//     { id:11, name:"TAhir", number:0123345, grade:20, education:"martic", gender:"male"},
//     { id:12, name:"sohail", number:0123345, grade:21, education:"martic", gender:"male"},
// ]

// localStorage.setItem("array",JSON.stringify(array))

var array = [];
let saveData = JSON.parse(localStorage.getItem("array"));
if (saveData != null) {
    array = saveData;
}
var user;
this.getDataFromStorage(array);
// array.splice(2, 1);
function getDataFromStorage(array) {
    if (array.length > 0) {
        for (let index = 0; index < array.length; index++) {
            this.addRow(index, array[index]);
        }
    }
}

function addRow(index, rowData) {
    let table = document.getElementById('data');
    let row = table.insertRow(index + 1);

    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);

    cell0.innerText = rowData.id;
    cell1.innerText = rowData.name;
    cell2.innerText = rowData.number;
    cell3.innerText = rowData.grade;
    cell4.innerText = rowData.education;
    cell5.innerHTML = `<i class="fas fa-pen" id="color" onclick="updateUser(${rowData.id})"></i><i class="fas fa-trash" id="color-a" onclick="deleteUser(${rowData.id})"></i>`
}
function submitData() {
    let stdName = document.getElementById('name').value;
    let stdNumber = document.getElementById('number').value;
    let stdGrade = document.getElementById('grade').value;
    let stdEducation = document.getElementById('education').value;
    let student;
    if (array.length > 0) {
        let existStudent = array.find(obj => obj.name == stdName);
        if (existStudent) {
            window.alert("User Already taken!");
            return
        }
    }
    if (array.length > 0) {
        student = { id: array[array.length - 1].id + 1, name: stdName, number: stdNumber, education: stdEducation, grade: stdGrade }
    } else {
        student = { id: 1, name: stdName, number: stdNumber, grade: stdGrade, education: stdEducation }
    }
    array.push(student);

    this.resetLocalStorage();
    this.addRow(array.length - 1, student);

    document.getElementById('name').value = "";
    document.getElementById('number').value = "";
    document.getElementById('grade').value = "";
    document.getElementById('education').value = "None";
}
function deleteUser(id) {
    let rowId = array.findIndex(obj => obj.id == id);
    array.splice(rowId, 1);
    document.getElementsByTagName("tr")[rowId + 1].remove();
    this.resetLocalStorage();
}

function updateUser(userid) {
    this.user = array.find(obj => obj.id == userid);
    console.log(this.user);

    document.getElementById('name').value = this.user.name;
    document.getElementById('number').value = this.user.number;
    document.getElementById('grade').value = this.user.grade;
    document.getElementById('education').value = this.user.education;
}
function updateUser(userid) {
    this.user = array.find(obj => obj.id == userid);
    console.log(this.user);

    document.getElementById('name').value = this.user.name;
    document.getElementById('number').value = this.user.number;
    document.getElementById('grade').value = this.user.grade;
    document.getElementById('education').value = this.user.education;
}
function edit_row() {
    let stdName = document.getElementById('name').value;
    let stdNumber = document.getElementById('number').value;
    let stdGrade = document.getElementById('grade').value;
    let stdEducation = document.getElementById('education').value;

    // let student = {id: this.user.id, name: stdName, number: stdNumber, grade: stdGrade};

    let index = array.findIndex(obj => obj.id == this.user.id);
    array[index].name = stdName;
    array[index].number = stdNumber;
    array[index].grade = stdGrade;
    array[index].education = stdEducation;
    document.getElementsByTagName("tr")[index + 1].getElementsByTagName('td')[0].innerText = this.user.id;
    document.getElementsByTagName("tr")[index + 1].getElementsByTagName('td')[1].innerText = stdName;
    document.getElementsByTagName("tr")[index + 1].getElementsByTagName('td')[2].innerText = stdNumber;
    document.getElementsByTagName("tr")[index + 1].getElementsByTagName('td')[3].innerText = stdGrade;
    document.getElementsByTagName("tr")[index + 1].getElementsByTagName('td')[4].innerText = stdEducation;

    this.resetLocalStorage();

    document.getElementById('name').value = "";
    document.getElementById('number').value = "";
    document.getElementById('grade').value = "";
    document.getElementById('education').value = "";
}
function resetLocalStorage() {
    localStorage.clear();
    localStorage.setItem('array', JSON.stringify(array))
}

// function getValue(){
var data = document.getElementsByName('gender');
//   {
    // if(data[i].checked){
    //     document.getElementById('output').innerHTML=data[i].value;
//         // localStorage.setItem("gender",data[i].value);
//         // console.log(data);
//     }
//    }

// }