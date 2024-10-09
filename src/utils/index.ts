import { IExtensionFunction, IFile} from "../interfaces"
import {fileName} from "../data/fileTree"

export const getSrcExtention : IExtensionFunction = function(str){
    if(str && Object.prototype.hasOwnProperty.call(fileName,str)){
        return fileName[str];
    }
    return "public\\icons\\default.svg";
} 

export const doesFileObjExist = (arr:IFile[],id:string) => {
    return arr.some(obj=>obj.id===id);
}