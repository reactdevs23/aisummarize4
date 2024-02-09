import React from "react";

const Charts = ({ firstColor, secondColor, thirdColor }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 45 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.4844 1.17188C9.60938 1.17188 0 10.7812 0 22.6562C0 34.5312 9.60938 44.1406 21.4844 44.1406C27.2656 44.1406 32.5 41.875 36.3672 38.1641C36.9922 37.5781 33.6328 33.0469 34.1797 32.3828C34.8828 31.5234 39.4531 34.4922 40.0391 33.5156C41.9141 30.3125 42.9688 26.6016 42.9688 22.6562C42.9688 10.7812 33.3594 1.17188 21.4844 1.17188ZM21.4844 34.375C15 34.375 9.76562 29.1406 9.76562 22.6562C9.76562 16.1719 15 10.9375 21.4844 10.9375C27.9688 10.9375 33.2031 16.1719 33.2031 22.6562C33.2031 29.1406 27.9688 34.375 21.4844 34.375Z"
        fill={thirdColor}
      />
      <path
        d="M42.9688 22.6562C42.9688 10.7812 33.3594 1.17188 21.4844 1.17188V10.9375C27.9688 10.9375 33.2031 16.1719 33.2031 22.6562C33.2031 24.8047 32.6172 26.7969 31.6016 28.5547L31.7578 28.7109L31.5625 28.5937C29.5703 32.0312 25.7813 34.375 21.4844 34.375C17.1094 34.375 13.3203 31.9922 11.2891 28.4766L2.8125 33.2812C6.52344 39.7656 13.4766 44.1406 21.4844 44.1406C29.375 44.1406 36.2891 39.8828 40 33.5156L39.6875 33.3203L40.0391 33.4375C41.9141 30.2734 42.9688 26.6016 42.9688 22.6562Z"
        fill={secondColor}
      />
      <path
        d="M35.3516 37.5C31.5625 41.0156 26.6406 42.9688 21.4844 42.9688C14.6094 42.9688 8.20312 39.4531 4.45312 33.7109L10.8984 30.0391C13.3203 33.4766 17.2656 35.5469 21.4844 35.5469C22.1484 35.5469 22.6562 35.0391 22.6562 34.375C22.6562 33.7109 22.1484 33.2031 21.4844 33.2031C17.6953 33.2031 14.2187 31.1719 12.3047 27.8906C11.9922 27.3438 11.25 27.1484 10.7031 27.4609L2.22656 32.2656C1.95312 32.4219 1.75781 32.6563 1.67969 32.9688C1.60156 33.2813 1.64063 33.5937 1.79688 33.8672C5.82031 40.9375 13.3594 45.3125 21.4844 45.3125C27.2656 45.3125 32.7344 43.1641 36.9531 39.2188C37.4219 38.7891 37.4609 38.0469 36.9922 37.5781C36.5625 37.0703 35.8203 37.0703 35.3516 37.5Z"
        fill={firstColor}
      />
      <path
        d="M40.0391 34.6094C39.8438 34.6094 39.6484 34.5703 39.4531 34.4531L31.0156 29.5703C30.7422 29.4141 30.5469 29.1406 30.4688 28.8672C30.3906 28.5547 30.4297 28.2422 30.5859 27.9687C31.5234 26.3672 32.0312 24.5312 32.0312 22.6562C32.0312 16.8359 27.3047 12.1094 21.4844 12.1094C20.8203 12.1094 20.3125 11.6016 20.3125 10.9375V1.17187C20.3125 0.507812 20.8203 0 21.4844 0C33.9844 0 44.1406 10.1562 44.1406 22.6562C44.1406 26.6406 43.0859 30.5859 41.0547 34.0234C40.8594 34.4141 40.4688 34.6094 40.0391 34.6094ZM33.1641 28.0859L39.6094 31.8359C41.0547 28.9844 41.7969 25.8594 41.7969 22.6562C41.7969 11.8359 33.3203 2.96875 22.6562 2.38281V9.80469C29.2188 10.4297 34.375 15.9375 34.375 22.6562C34.375 24.5312 33.9453 26.4062 33.1641 28.0859Z"
        fill={firstColor}
      />
      <path
        d="M28.125 33.5938C28.7722 33.5938 29.2969 33.0691 29.2969 32.4219C29.2969 31.7747 28.7722 31.25 28.125 31.25C27.4778 31.25 26.9531 31.7747 26.9531 32.4219C26.9531 33.0691 27.4778 33.5938 28.125 33.5938Z"
        fill={firstColor}
      />
    </svg>
  );
};

export default Charts;
