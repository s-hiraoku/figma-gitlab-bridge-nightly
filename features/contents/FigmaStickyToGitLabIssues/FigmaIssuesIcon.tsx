import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

type Props = SvgIconProps & {
  currentColor?: boolean;
};

const FigmaIssuesIcon: React.FC<Props> = ({
  currentColor = false,
  ...props
}) => {
  return (
    <SvgIcon {...props} viewBox="0 -52 1128 1128">
      <path
        d="M473.184 356.632c-23.048-28.336-64.616-32.632-92.816-9.672-28.248 23.048-32.568 64.528-9.616 92.84l473.328 547.152c22.928 28.248 64.376 32.488 92.776 9.552 28.224-22.992 32.512-64.528 9.528-92.752l-473.2-547.12z"
        fill={currentColor ? "currentColor" : "#0092D2"}
      />
      <path
        d="M151.4 65.976l-1.056-0.472 54.912 223.104L52.68 460.32l229.128 16.664 116.12 198.2 56.8-139.376 389.6 450.344c22.224 27.4 61.792 31.984 90.072 11.32L151.4 65.976z"
        fill={currentColor ? "currentColor" : "#0085BF"}
      />
      <path
        d="M150.104 66.304L360.56 158.4 555.752 37.224l-22.52 228.6L708.8 414.016l-224.416 49.24-86.664 212.728-116.152-198.2-229.12-16.672 152.6-171.712z"
        fill={currentColor ? "currentColor" : "#F5B146"}
      />
      <path
        d="M276.192 225.08l95.368 41.712 88.424-54.888-10.2 103.576 79.568 67.144-101.704 22.312-39.28 96.368-52.616-89.816-103.808-7.52 69.144-77.816z"
        fill={currentColor ? "currentColor" : "#E5226B"}
      />
      <path
        d="M484.384 463.256l0.528-0.112L152.072 67.152l-1.208-0.528 54.856 222.92-152.48 171.624 228.328 16.616 0.064 0.08 0.648 0.064 115.68 197.464z"
        fill={currentColor ? "currentColor" : "#EF962F"}
      />
      <path
        d="M434.56 403.408L289.6 230.928l-13.408-5.848 24.896 101.072-69.144 77.816 103.808 7.52 52.616 89.816 39.28-96.368z"
        fill={currentColor ? "currentColor" : "#C9005B"}
      />
      <path d="M21 43V33H27V43H21Z" fill="currentColor" />
      <circle cx="24" cy="28" r="2" fill="currentColor" />
    </SvgIcon>
  );
};

export default FigmaIssuesIcon;
