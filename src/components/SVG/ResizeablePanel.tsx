import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps {
  defaultLayout?: number[] | undefined;
  lefPanel: ReactNode;
  rightPanel: ReactNode;
  showLeftPanel:boolean
}
const ResizeablePanel = ({showLeftPanel,defaultLayout = [15,85],lefPanel,rightPanel}: IProps) => {
    const onLayout = (sizes: number[]) => {
      document.cookie = `react-resizable-panels:layout=${JSON.stringify(
        sizes
      )}`;
    };
  return (
    <div>
      <PanelGroup direction="horizontal" onLayout={onLayout} autoSaveId="condition">
        {showLeftPanel && (
          <>
            <Panel defaultSize={defaultLayout[0]} collapsible>{lefPanel}</Panel>
            <PanelResizeHandle className="border-[#ffffff1f] border-r" />
          </>
        )}

        <Panel className="w-[1100px]" defaultSize={defaultLayout[1]}>{rightPanel}</Panel>
      </PanelGroup>
    </div>
  );
};
export default ResizeablePanel;
