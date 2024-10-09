import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../app/store";
import { setClickedFile, setOpenedFiles } from "../../app/features/fileTree/fileTreeSlice";

interface IProps {
  setOpenDropDown: (val: boolean) => void;
  position: {
    x: number;
    y: number;
  };
}
const DropDownMenu = ({ setOpenDropDown, position: { x, y } }: IProps) => {
  const dispatch = useAppDispatch();
  const openedFiles = useSelector(
    (state: RootState) => state.fileTree.openFiles
  );
  const idRemove = useSelector(
    (state: RootState) => state.fileTree.tabIdToRemove
  );
  const Ref = useRef<HTMLDivElement>(null);

  const onCloseAll = () => {
    dispatch(setOpenedFiles([]));
    dispatch(
      setClickedFile({
        activeId: "",
        fileContent: "",
        fileName: "",
      })
    );
  }
  const onClose = () => {
    const filterd = openedFiles.filter(file=>file.id!==idRemove)
    dispatch(setOpenedFiles(filterd));
  }

  useEffect(() => {
    const handleClickOutSide = (event:MouseEvent) => {
        if(Ref.current && Ref.current.contains(event?.target as Node)){
            setOpenDropDown(false);
        }
    };
    window.addEventListener("click", handleClickOutSide);
    return () => {
      window.removeEventListener("click", handleClickOutSide);
    };
  }, [setOpenDropDown]);
  return (
    <div ref={Ref}>
      <ul
        className="bg-white text-black w-fit rounded-sm "
        style={{
          position: "absolute",
          top: y,
          left: x,
        }}
      >
        <li
          className="cursor-pointer hover:bg-slate-200 px-2"
          onClick={onClose}
        >
          close
        </li>
        <li
          onClick={onCloseAll}
          className="cursor-pointer hover:bg-slate-200 px-2"
        >
          close All
        </li>
      </ul>
    </div>
  );
};
export default DropDownMenu