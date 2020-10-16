let fs=require("fs");
let path=require("path");

// src -t
// src -f
module.exports.view=function(){
    // console.log(arguments);
    let src=arguments[0];
    let mode=arguments[1];

    if(mode=="-t"){
        viewAsTree(src,"");
    }else{
        viewAsFlatFile(src,path.basename(src));
    }

}



// how to check wheather a pth is file ?? => google
function checkWhetherFile(path_string){
    return fs.lstatSync(path_string).isFile();
}

// content read directory ?? => google
function childrenReader(src){
    let children=fs.readdirSync(src);
    return children;
}



function viewAsFlatFile(src,toprint){
    let isFile=checkWhetherFile(src);

    if(isFile==true){
        console.log(toprint+"*");
    }else{
        console.log(toprint);
        let children=childrenReader(src);
        // console.log(children);
        for(let i=0;i<children.length;i++){
            let childPath=path.join(src,children[i]);
            let ctoprint=path.join(toprint,children[i]);
            viewAsFlatFile(childPath,ctoprint);
        }
    }
}

function viewAsTree(src,indent){
    let isFile=checkWhetherFile(src);

    if(isFile==true){
        console.log(indent+path.basename(src)+"*");
    }else{
        console.log(indent+path.basename(src));
        let children=childrenReader(src);
        // console.log(children);
        for(let i=0;i<children.length;i++){
            let childPath=path.join(src,children[i]);
            viewAsTree(childPath,indent+"--");
        }
    }
}



