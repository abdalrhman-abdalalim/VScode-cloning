import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import OpenFileBar from "./OpenFileBar";
import HighLightText from "./HighLightText";
import VscodeIcon from "./VscodeIcon";
import { useState } from "react";
import DropDownMenu from "./DropDownMenu";

const GetStartedFiles = ()=>{
    const [openDropDown, setOpenDropDown] = useState(false);
    const [positionMenu, setPositionMenu] = useState<{ x: number; y: number }>({
      x: 0,
      y: 0,
    });
  const openedFiles = useSelector(
    (state: RootState) => state.fileTree.openFiles
  );
  const clickedFilesContent = useSelector((state:RootState)=>state.fileTree.clickedFile.fileContent);
  return (
    <div className="w-[1100px] min-w-20 ">
      {openedFiles.length ? (
        <>
          <div
            className="flex list-none"
            onContextMenu={(e) => {
              e.preventDefault();
              console.log(e.clientX, e.clientY);
              setPositionMenu({ x: e.clientX, y: e.clientY });
              setOpenDropDown(true);
            }}
          >
            {openedFiles.map((file) => (
              <OpenFileBar file={file} key={file.id} />
            ))}
          </div>
          <div className="mt-[-20px]">
            <HighLightText content={clickedFilesContent} />
          </div>
        </>
      ) : (
        <VscodeIcon />
      )}
      {openDropDown && (
        <DropDownMenu
          position={positionMenu}
          setOpenDropDown={setOpenDropDown}
        />
      )}
    </div>
  );
}
export default GetStartedFiles