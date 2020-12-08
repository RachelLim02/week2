var lines = 10;

for (var i=0; i<lines; i++){
for (var j=0; j<lines; j++){
   if (i % 2 == 0 && j % 2 == 0 || i % 2 !== 0 && j % 2 !== 0){
     document.write("#");
   }else
      document.write("0");
   }document.write("<br>");
 }
