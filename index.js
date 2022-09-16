const filesystem = require("fs");
const prompt = require("prompt-sync")({ sigint: true });
const path = require("path");

const filename = path.join(__dirname,"/newfile.txt");


insert = () => {
    if (!filesystem.existsSync(filename)) {
        filesystem.writeFile(filename, '', (err) => {
            if (err) return callback(err);
            console.log("data inserted successfully!")
        });  
    }
    const data = prompt("Enter Data to Insert : ");
    filesystem.writeFile(filename, data, (err) => {
        if (err) return callback(err);
        console.log("data inserted successfully!")
    });
}


read = () => {
    const data = filesystem.readFileSync('newfile.txt', "utf8");
    console.log(data);
}

update = () => {
    const updatedata = prompt("Enter Data to Update file : ");
    filesystem.writeFile(filename,updatedata , (err) => {
        if (err) return callback(err);
        
        console.log("data updated successfully!");
        console.log("File Data"+data);
    }); 
}

del = () => {
    filesystem.unlinkSync(filename);
    console.log("file deleted Successfully");    
}

const choice = +prompt("Choose Operation to perform \n1.Insert \n2.Read \n3.Update\n4.Delete \n");

switch(choice){
    case 1:
        insert();
        break;
    case 2:
        read();
        break;
    case 3:
        update();
        break;
    case 4:
        del();
        break;
    default:
        console.log('default case')
}

