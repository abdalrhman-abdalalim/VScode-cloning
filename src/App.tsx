import "./App.css";
import RecursiveComponent from "./components/RecursiveComponent";
import { FileTree } from "./data/fileTree";

import ResizeablePanel from "./components/SVG/ResizeablePanel";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import OpenFileBar from "./components/SVG/OpenFileBar";
import VscodeIcon from "./components/SVG/VscodeIcon";
import GetStartedFiles from "./components/SVG/GetStartedFiles";
import DropDownMenu from "./components/SVG/DropDownMenu";


function App() {
  const openedFiles=useSelector((state:RootState)=>state.fileTree.openFiles);

  return (
    <>
      <div className="flex h-screen">
        <ResizeablePanel
          showLeftPanel={true}
          lefPanel={
            <div className="w-64 min-w-64  border-black">
              <RecursiveComponent file={FileTree} />
            </div>
          }
          rightPanel={openedFiles.length ? <GetStartedFiles /> : <VscodeIcon />}
        />
      </div>
    </>
  );
}

export default App;
