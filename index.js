const prompt = require("prompt-sync")({ sigint: true });
const filesystem = require("fs");
const path = require("path");
const folderName = path.join(__dirname,"NumberSepration");

if (!filesystem.existsSync(folderName)) {
    filesystem.mkdirSync(folderName);
   
}



const number = prompt("Enter a number to seperate even or odd :  ");

const digit = number.split('');
let EvenNumbers ='';
let OddNumbers ='';
for(let i=0;i<digit.length;i++){
    if(digit[i]%2==0){
        EvenNumbers += digit[i];
    }
    else{
        OddNumbers += digit[i];
    }
}

filesystem.writeFile(folderName+'/even.txt', 'Even Numbers : '+EvenNumbers.split('').join(','), function (err) {
    if (err) throw err;
    console.log('Even Numbers added to even.txt file');
  });

  filesystem.writeFile(folderName+'/odd.txt', 'Odd Numbers : ' + OddNumbers.split('').join(','), function (err) {
    if (err) throw err;
    console.log('Odd Numbers added to Odd.txt file');
  });
