import { SVGProps } from "react";
import { svgStyle } from "../../styles";

interface IProps extends SVGProps<SVGSVGElement> {}
const FolderIcon = ({ ...rest }: IProps) => {
  return (
    <svg viewBox="0 0 1000 1000" fill="currentColor" {...svgStyle} {...rest}>
      <path d="M954 350c21.333 0 34.667 4 40 12 5.333 8 7.333 20 6 36l-42 452c-1.333 16-5.333 28.333-12 37-6.667 8.667-20.667 13-42 13H98c-34.667 0-53.333-16.667-56-50L0 398c-1.333-16 .667-28 6-36s18.667-12 40-12h908m-34-110l10 40H84l14-132c2.667-13.333 9.333-24.667 20-34 10.667-9.333 22.667-14 36-14h164c34.667 0 63.333 11.333 86 34l30 30c21.333 24 50 36 86 36h340c13.333 0 26 4 38 12s19.333 17.333 22 28" />
    </svg>
  );
};
export default FolderIcon;
