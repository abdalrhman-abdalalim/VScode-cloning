import { useState } from "react";
import { IFile } from "../interfaces";
import RightArrow from "./SVG/RightArrow";
import DownArrow from "./SVG/DownArrow";
import RenderFile from "./SVG/RenderFile";
import RenderFolder from "./SVG/RenderFolder";
import {useSelector } from "react-redux";
import { RootState,useAppDispatch } from "../app/store";
import { doesFileObjExist } from "../utils";
import { setClickedFile, setOpenedFiles } from "../app/features/fileTree/fileTreeSlice";
;

interface IProps {
  file:IFile;
}
const RecursiveComponent = ({ file }: IProps) => {
  const openedFiles=useSelector((state:RootState)=>state.fileTree.openFiles);
  const dispatch = useAppDispatch();
  const [isOpen,setIsOpen]=useState<boolean>(true);
  const [isOpenFolder,setIsOpenFolder]=useState(true);
  const toggleArrow = () =>{ 
    setIsOpen(prev=>!prev);
    setIsOpenFolder(prev=>!prev);
  }
  const doesFileExist = () => {
    console.log('hello y abod')
    dispatch(setClickedFile({
      activeId:file.id,
      fileContent:file.content,
      fileName:file.name
    }))
    if(doesFileObjExist(openedFiles,file.id))return;
    dispatch(setOpenedFiles([...openedFiles, file]));
  }
  return (
    <div className="mb-1 ml-2">
      <div className="flex items-center">
        {file.isFolder ? (
          <div className="flex items-center" onClick={toggleArrow}>
            <span className="mr-1">
              {isOpen ? <DownArrow /> : <RightArrow />}
            </span>
            <RenderFolder isOpen={isOpen} name={file.name} />
          </div>
        ) : (
          <div className="flex items-center ml-1" onClick={doesFileExist}>
            <RenderFile name={file.name} />
          </div>
        )}
      </div>
      {isOpenFolder &&
        file.children?.map((file, index) => (
          <RecursiveComponent file={file} key={index} />
        ))}
    </div>
  );
};
export default RecursiveComponent;

