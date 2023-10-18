//appendFile
var fs=require('fs');
fs.appendFile('newfile.txt','I will write at end of the content',function(err){
    if(err) throw err;
    console.log('Saved');
}); 
//Open File   fs.open methed takes 'flag' as second argument is passed,flag is 'w' it is for writting
/* var fs=require('fs')
fs.open('myfileopen.txt','w',function(err,file){
    if(err) throw err;
    console.log("saved");
}) */
//writefile
/* var fs=require('fs');
fs.writeFile('writefile.txt','Bye Bye',function(err){
if(err) throw err;
console.log("saved");
});
 */

//Updates:- fs.appendfile(if we want to update the content it wil write the updated content at the end of the file)
//f.writefile(it will relace the content and write the new content)