import * as React from 'react';

const CreaditCardIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#4D4D4D"
      d="M0 6a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V6Zm3-1.5A1.5 1.5 0 0 0 1.5 6v1.5h21V6A1.5 1.5 0 0 0 21 4.5H3Zm19.5 6h-21V18A1.5 1.5 0 0 0 3 19.5h18a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
    />
    <circle cx={5} cy={16} r={2} fill="#4D4D4D" />
    <circle cx={9} cy={16} r={2.5} fill="#4D4D4D" stroke="#FBFBFB" />
  </svg>
);
export default CreaditCardIcon;
