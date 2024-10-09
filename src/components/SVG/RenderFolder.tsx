import ClosedFolder from "./ClosedFolder";
import FolderIcon from "./FolderIcon"

interface IProps{
   name:string
   isOpen:boolean
}
const RenderFolder = ({name,isOpen}:IProps)=>{
  return (
    <div className="flex items-center">
      {isOpen ? (
        <span className="mr-1">
          <FolderIcon />
        </span>
      ) : (
        <span className="mr-1">
          <ClosedFolder/>
        </span>
      )}

      <span>{name}</span>
    </div>
  );
}
export default RenderFolder