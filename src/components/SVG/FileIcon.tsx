import { SVGProps } from "react";

interface IProps extends SVGProps<SVGSVGElement> {}
const FileIcon = ({}:IProps)=>{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 50 50"
      style={{fill:"#FFFFFF"}}
    >
      <path d="M 30.398438 2 L 7 2 L 7 48 L 43 48 L 43 14.601563 Z M 30 15 L 30 4.398438 L 40.601563 15 Z"></path>
    </svg>
  );
}
export default FileIcon