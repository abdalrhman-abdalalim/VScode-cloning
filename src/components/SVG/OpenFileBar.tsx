import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../../interfaces";
import CloseIcon from "./CloseIcon";
import RenderFile from "./RenderFile";
import { RootState } from "../../app/store";
import { setClickedFile, setIdToRemove, setOpenedFiles } from "../../app/features/fileTree/fileTreeSlice";

interface IProps {
  file: IFile;
}

const OpenFileBar = ({ file }: IProps) => {
  const openedFiles=useSelector((state:RootState)=>state.fileTree.openFiles);
  const dispatch = useDispatch();
  const activeId = useSelector(
    (state: RootState) => state.fileTree.clickedFile.activeId
  );

  const onClickHandler = () => {
    console.log("clicked here");
    const { id, name, content } = file;
    dispatch(
      setClickedFile({
        activeId: id,
        fileName: name,
        fileContent: content,
      })
    );
  };
  const onClickOnRemoveIcon = (id:string) => {
    const filtered = openedFiles.filter((fil)=> fil.id!==id);
    if(!filtered.length){
      dispatch(
        setClickedFile({
          activeId: null,
          fileContent: "",
          fileName: "",
        })
      );
      dispatch(setOpenedFiles([]));
    }
    const lastFile= filtered[filtered.length-1];
    dispatch(setClickedFile({
      activeId:lastFile.id,
      fileContent:lastFile.content,
      fileName:lastFile.name
    }))
    dispatch(setOpenedFiles(filtered))
  }

  return (
    <div>
      <div
        className={`p-1 h-7 cursor-pointer flex mr-4 items-center ${
          activeId === file.id ? "border-t-2 border-red-500" : ""
        }`}
        onClick={onClickHandler}
        onContextMenu={(e)=>{
          e.preventDefault();
          dispatch(setIdToRemove(file.id));
        }}
      >
        <RenderFile name={file.name} />
        <CloseIcon
          onClick={(e) => {
            e.stopPropagation();
            onClickOnRemoveIcon(file.id);
          }}
        />
      </div>
    </div>
  );
};

export default OpenFileBar;
