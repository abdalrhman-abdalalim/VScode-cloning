import { ReactNode } from "react";
import FileIcon from "../components/SVG/FileIcon";

export interface IFile {
    id:string
    name: string;
    isFolder:boolean;
    children ? : IFile[];
    content ? : string|undefined;
}
export interface IExtensionFunction {
    (str:string|undefined):string|ReactNode;
}
export interface IFileIcon {
    icon:typeof FileIcon;
}
export interface IClickedFile {
    activeId:string|null;
    fileName:string;
    fileContent:string|undefined;
}
export interface IinitialFile {
  openFiles: IFile[];
  clickedFile:IClickedFile;
  tabIdToRemove:string|null;
}