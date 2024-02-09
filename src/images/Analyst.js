import React from "react";

const Analyst = ({ firstColor, secondColor }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M39.989 8.88643C39.989 12.5675 37.0052 15.5514 33.324 15.5514C29.6429 15.5514 26.659 12.5675 26.659 8.88643C26.659 5.20531 29.6429 2.22143 33.324 2.22143C37.0052 2.22143 39.989 5.20531 39.989 8.88643Z"
        fill={secondColor}
      />
      <path
        d="M20.5103 1.8303L20.0595 2.21675L19.4797 1.70134C17.8693 0.348668 15.8082 -0.231125 13.6823 0.0909525C10.3328 0.735107 7.88494 3.6338 7.75611 7.11224V7.75639H7.11196C4.08454 7.82076 1.37898 9.75322 0.348335 12.6519C-0.360181 14.8421 0.0262581 17.2254 1.37893 19.029C1.50767 19.2224 1.63663 19.3511 1.76538 19.5445L2.15183 19.9953L1.76538 20.4461C1.63663 20.6394 1.50767 20.7682 1.37893 20.9615C0.0262581 22.8296 -0.360181 25.2129 0.348335 27.3386C1.37893 30.2373 4.01991 32.1698 7.11196 32.2342H7.75611V32.8783C7.82049 36.2924 10.2684 39.2554 13.6823 39.8996C15.7435 40.2217 17.8693 39.6419 19.4797 38.2892L20.0595 37.7738L20.5103 38.1603C20.7037 38.289 20.8324 38.418 21.0257 38.6111C22.8939 39.9637 25.2771 40.3502 27.4029 39.6417C30.3016 38.6111 32.234 35.9701 32.2984 32.878V32.2339H32.9426C35.97 32.1695 38.6755 30.2371 39.7062 27.3384C39.9639 26.5655 40.0926 25.728 40.0283 24.8905C39.8349 22.5072 38.6112 18.4489 32.234 18.0624L30.3659 18.0626C29.2709 18.0626 28.4334 18.9002 28.4334 19.9951C28.4334 21.0901 29.2709 21.9276 30.3659 21.9276H32.9425C33.9731 21.9276 34.9393 22.3784 35.5191 23.2159C36.1633 24.0534 36.292 25.1483 35.9699 26.1789C35.4545 27.5316 34.1018 28.4335 32.6204 28.3691C30.3015 28.3691 28.3691 30.2372 28.3691 32.6205C28.4335 34.1021 27.5316 35.3905 26.1789 35.97C25.277 36.2923 24.1177 36.0989 23.2802 35.4548C22.4427 34.875 21.9919 33.9088 21.9919 32.8782V7.11198C21.9919 6.08139 22.4427 5.11515 23.2802 4.53536C24.1177 3.89121 25.2127 3.76248 26.2433 4.08454C27.5316 4.53536 28.3691 5.75929 28.4334 7.0476C28.5622 8.01383 29.3353 9.04442 30.3659 9.04442C31.4609 9.04442 32.2984 8.20691 32.2984 7.11196C32.105 3.95555 30.1082 1.18574 27.4028 0.348335C25.2127 -0.360181 22.8294 0.0262581 21.0257 1.37893C20.8324 1.57226 20.6393 1.70101 20.5103 1.82996L20.5103 1.8303ZM18.1271 32.7497C18.1271 33.5872 17.805 34.4245 17.2896 35.0686C16.7098 35.7128 15.8079 36.0992 14.9063 36.0992C13.1026 36.0992 11.6855 34.6822 11.6855 32.8784V32.6207C11.6855 30.3018 9.81743 28.3694 7.43417 28.3694C5.9525 28.4337 4.66419 27.5319 4.08467 26.1792C3.76238 25.213 3.95571 24.0536 4.59987 23.2161C5.17966 22.3786 6.14589 21.9278 7.17649 21.9278H9.7531C10.8481 21.9278 11.6856 21.0903 11.6856 19.9954C11.6856 18.9004 10.8481 18.0629 9.7531 18.0629H7.17649C6.14589 18.0629 5.17966 17.6121 4.59987 16.7746C3.95571 15.9371 3.82699 14.8421 4.14905 13.8115C4.66446 12.4589 6.01715 11.557 7.43418 11.6214C9.75308 11.6214 11.6855 9.75325 11.6855 7.36999C11.6212 5.7596 12.7805 4.27794 14.3265 3.8915C15.4215 3.69816 16.5167 4.08483 17.2252 4.85773C17.805 5.50188 18.1271 6.27476 18.0627 7.11227V32.7496L18.1271 32.7497Z"
        fill={firstColor}
      />
    </svg>
  );
};

export default Analyst;
