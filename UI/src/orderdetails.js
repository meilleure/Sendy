var selectedRow = null;
if (selectedRow == null){

  updateBtn.style.visibility = 'hidden';

}

function onFormSubmit(){
  var formData = readFormData();
  if (selectedRow == null)
  insertNewRecord(formData);
  else 
  updateRecord(formData);
  resetForm();
}


function readFormData(){
var formData = {};
formData["parcel"] = document.getElementById("parcel").value;
formData["pickup"] = document.getElementById("pickup").value;
formData["destination"] = document.getElementById("destination").value;

return formData;

}

function insertNewRecord(data){

var table = document.getElementById("display").getElementsByTagName('tbody')[0];
var newRow = table.insertRow(table.length);
cell1 = newRow.insertCell(0);
cell1.innerHTML = data.parcel;
cell2 = newRow.insertCell(1);
cell2.innerHTML = data.pickup;
cell3 = newRow.insertCell(2);
cell3.innerHTML = data.destination;
cell4 = newRow.insertCell(3);
cell4.innerHTML = `<button onClick="onEdit(this)"><a>Edit</a></button>`;
cell5 = newRow.insertCell(4);
cell5.innerHTML = `<button onClick="onDelete(this)"><a>Delete</a></button>`;
}

function resetForm(){

document.getElementById("parcel").value = "";
document.getElementById("pickup").value = "";
document.getElementById("destination").value = "";


selectedRow = null;

}

function onEdit(td) {
  
selectedRow = td.parentElement.parentElement;
document.getElementById("destination").value = selectedRow.cells[2].innerHTML;
updateBtn.style.visibility = 'visible';
placeorderBtn.style.visibility = 'hidden';

}


function updateRecord(formData){

selectedRow.cells[2].innerHTML = formData.destination;
placeordertBtn.style.visibility = 'visible';
updateBtn.style.visibility = 'hidden';
resetForm();


}

function onDelete(td){
 if(confirm('Are you sure you want to delete this record?')){
row = td.parentElement.parentElement;
document.getElementById("display").deleteRow(row.rowIndex);
resetForm();

   }
}

