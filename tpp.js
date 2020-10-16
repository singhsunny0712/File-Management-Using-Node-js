const viewFile=require("./command/view");
const helpfile=require("./command/helpfile");
const treefyfile=require("./command/treefy");
const untreefyfile=require("./command/untreefy");
let input=process.argv.slice(2);
// console.log(input)
let cmd=input[0];

// command 

// node tpp.js view src -t
// node tpp.js view src -f
//node tpp.js untreefy "src" "dst"
//node tpp.js treefy "srcof json" "dst where folder make"  //==>node tpp.js treefy "C:\Users\SUNNY SINGH\Desktop\DEV\dev GTBIT\lecture2\raw\poc\xyz" "C:\Users\SUNNY SINGH\Desktop\DEV\dev GTBIT\lecture2\raw\poc"

switch(cmd){
    case "view":
        viewFile.view(input[1],process.argv[4]);//process.argv[4]==>input[2];
        break;
    case "untreefy":
        untreefyfile.untreefyFn(input[1],input[2]);
         break;
    case "treefy":
        treefyfile.treefy(input[1],input[2]);
        break;
    case "help":
        helpfile.help();
       break;
    default:
        console.log("wrong cmd");
        break;
}