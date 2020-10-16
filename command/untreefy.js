let fs=require("fs");
let path=require("path");
let uniqid=require("uniqid");


module.exports.untreefyFn=function(){
 
   let src=arguments[0];
   let dest=arguments[1];

   let root={};

   untreefy(src,dest,root);
//    console.log(root);
     fs.writeFileSync(path.join(dest,"metadata.json"),JSON.stringify(root));

}



function checkWhetherFile(path_string){
    return fs.lstatSync(path_string).isFile();
}

function childrenReader(src){
    let children=fs.readdirSync(src);
    return children;
}



function untreefy(src,dest,obj){
    let isFile=checkWhetherFile(src);

    if(isFile==true){
        // console.log(toprint+"*");
        // copy with newname
        let oldname=path.basename(src);
        let newName=uniqid();

        obj.isFile=true;
        obj.oldname=oldname;
        obj.newName=newName;

        let despath=path.join(dest,newName);
        fs.copyFileSync(src,despath);//these help us to save the data src ==> despath
        console.log(`File ${oldname} from src copied to ${despath}`);

    }else{
    
        obj.isFile=false;
        obj.name=path.basename(src);
        obj.children=[];

        let children=childrenReader(src);

        for(let i=0;i<children.length;i++){
            let childPath=path.join(src,children[i]);
            let chobj={};
            untreefy(childPath,dest,chobj);

            obj.children.push(chobj);
        }
    }
}



