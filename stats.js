const fs = require("fs");

const inputFile = "10000-common-passwords.csv";
const outputFile = "statistics.csv";
const delimiter = ",";

function deleteExistingOutputFile() {
  if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
  }
}

function processData() {  
  deleteExistingOutputFile();
  const data = fs.readFileSync(inputFile, "utf-8");
  const lines = data.split(/\n/);
  let lengths = new Array(25).fill(0);
  for (let line of lines) {     
    let password = line.split(delimiter)[1];    
    lengths[password.length]++;
  }
  lengths.forEach( (length,index) => {
    //console.log(`Chars: ${index}, Count: ${length}`);  
    let outline = `Chars: ${index}, Count: ${length}\n`
    fs.appendFileSync(outputFile,outline,"utf-8")
  });  
}

// Main execution
//deleteExistingOutputFile(); 
processData();
