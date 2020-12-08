var lines=7;
var hashtag="#"
for (var i=0; i<lines; i++){
  document.write(hashtag);
  document.write('<br/>');
  hashtag+="#";
 }
for (var i=0; i<lines; i++){
  for (var j=0; j<lines-i-1; j++){
  document.write("#");
  }
  document.write('<br/>');
}