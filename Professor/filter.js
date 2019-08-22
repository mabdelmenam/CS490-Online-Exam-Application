function formTable(selector){
  var wrapper = document.querySelector(selector);
 // var form = wrapper.getElementsByTagName("form")[0];
 var form = document.getElementById("filter");
  var table = wrapper.getElementsByTagName("table")[0];
  
  form.onkeyup = function(ev){
    
    var 
     name = form.elements[0].value,
     age  = form.elements[1].value;
     keyword = form.elements[2].value;
   

   for (var i = 1; i < table.rows.length; i++){  
     table.rows[i].className = "";
     
     if( 
       table.rows[i].cells[0].innerHTML.indexOf(name) == -1 ||
       table.rows[i].cells[1].innerHTML.indexOf(age) == -1  ||
       table.rows[i].cells[2].innerHTML.indexOf(keyword) == -1
     ){
       table.rows[i].className = "hide";
     }

   }    

  }  
}
formTable(".wrapper");