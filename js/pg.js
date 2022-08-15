var i=1;
var botonenviar=document.getElementById("btagregar")
var botoneditar=document.getElementById("bteditar")
botoneditar.disabled = true;
var infoForm={};



function procesar(){
    var prenda=document.getElementById("txtprenda").value
    var precio=document.getElementById("txtprecio").value
    if(prenda=="" || precio==""){
    alert("Debe ingresar la informacion en todos los campos")
 }else{
    var valor =parseFloat(prenda)*parseFloat(precio);
    alert(valor)


    infoForm["id"]= i++;
    infoForm["Prendas"]=prenda;
    infoForm["Precio"]=precio;
    infoForm["ValorTotal"]=valor;

    var tabla = document.getElementById("mitabla");
    var nuevafila =tabla.insertRow(tabla.length);

    cell1 = nuevafila.insertCell(0);
    cell1.innerHTML = infoForm.id;

    cell2 = nuevafila.insertCell(1);
    cell2.innerHTML = infoForm.Prendas;

    cell3 = nuevafila.insertCell(2);
    cell3.innerHTML = infoForm.Precio;

    cell4 = nuevafila.insertCell(3);
    cell4.innerHTML = infoForm.ValorTotal;

    cell4 = nuevafila.insertCell(4);
    cell4.innerHTML = '<a class="btn btn-warning mx-5" onClick="onEdit(this)">Edit</a> <a class="btn btn-danger" onClick="onDelete(this)">Delete </a>'; 
     
    
    document.getElementById("miForm").reset();
    divtabla.style.display="";
}
}
function onEdit(td){
    botoneditar.disabled =false;
    botonenviar.disabled =true;
    selectedRow = td.parentElement.parentElement;
    document.getElementById("txtprenda").value = selectedRow.cells[1].innerHTML;
    document.getElementById("txtprecio").value = selectedRow.cells[2].innerHTML;
}

function actualizarfila(){
    prenda=document.getElementById("txtprenda").value
    precio=document.getElementById("txtprecio").value

    if(prenda=="" || precio==""){
        alert("Debe ingresar la informacion en todos los campos")
     }else{
        var valor =parseFloat(prenda)*parseFloat(precio);
       
        infoForm["Prendas"]=prenda;
        infoForm["Precio"]=precio;
        infoForm["ValorTotal"]=valor;

        selectedRow.cells[1].innerHTML =infoForm.Prendas;
        selectedRow.cells[2].innerHTML =infoForm.Precio;
        selectedRow.cells[3].innerHTML =infoForm.ValorTotal;

        botoneditar.disabled = true;
        botonenviar.disabled = false;
        alert ("Fila creada exitosamente")
        document.getElementById("MiForm").reset();
    }
}

function onDelete(td){
    if (confirm("Estas seguro de esto? Si lo borras perderas la informacion")){
     row = td.parentElement.parentElement;
     document.getElementById("mitabla").deleteRow(row.rowIndex);   

     var num =document.getElementById("mitabla").rows.length;
     if(num==1){
        divtabla.style.display="none";
     }
    }
}