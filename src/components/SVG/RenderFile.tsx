import { getSrcExtention } from "../../utils";

interface IProps{
    name:string
}
const RenderFile = ({name}:IProps)=>{
    const extention = name.split('.').pop();
    const src = getSrcExtention(extention);
  return (
    <div className="flex items-center">
        {typeof(src)==="string" ? <img src={src} className="w-5 h-5 mr-1"/>:
        (<div className="mb-2">
          {src}
        </div>)}
        <div>
          {name}
        </div>
    </div>
  );
}
export default RenderFile