import { cn } from '@/lib/util';
import { Check } from 'lucide-react';
import { SvgIconProps } from '@/lib/types/common';

export const Email = ({ ...props }: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M21 4.125H3C2.70163 4.125 2.41548 4.24353 2.2045 4.4545C1.99353 4.66548 1.875 4.95163 1.875 5.25V18C1.875 18.4973 2.07254 18.9742 2.42417 19.3258C2.77581 19.6775 3.25272 19.875 3.75 19.875H20.25C20.7473 19.875 21.2242 19.6775 21.5758 19.3258C21.9275 18.9742 22.125 18.4973 22.125 18V5.25C22.125 4.95163 22.0065 4.66548 21.7955 4.4545C21.5845 4.24353 21.2984 4.125 21 4.125ZM12 11.9738L5.89219 6.375H18.1078L12 11.9738ZM8.69906 12L4.125 16.1925V7.8075L8.69906 12ZM10.3641 13.5262L11.2397 14.3297C11.4472 14.52 11.7185 14.6255 12 14.6255C12.2815 14.6255 12.5528 14.52 12.7603 14.3297L13.6359 13.5262L18.1078 17.625H5.89219L10.3641 13.5262ZM15.3009 12L19.875 7.8075V16.1925L15.3009 12Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SocialMedia = {
  github: (props: SvgIconProps) => (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.60685 0.226562C3.01591 0.226562 0.126953 3.11552 0.126953 6.70646C0.126953 9.56841 1.98992 11.9984 4.55488 12.8624C4.87888 12.9164 4.98688 12.7274 4.98688 12.5384C4.98688 12.3764 4.98688 11.9714 4.98688 11.4314C3.1779 11.8364 2.79991 10.5674 2.79991 10.5674C2.50291 9.81141 2.07092 9.62241 2.07092 9.62241C1.47693 9.21742 2.12492 9.21742 2.12492 9.21742C2.77291 9.27142 3.1239 9.89241 3.1239 9.89241C3.6909 10.8914 4.63588 10.5944 5.01387 10.4324C5.06787 10.0004 5.22987 9.73041 5.41887 9.56841C3.98789 9.40642 2.47592 8.83942 2.47592 6.35546C2.47592 5.65347 2.71891 5.05948 3.1509 4.62749C3.09691 4.46549 2.85391 3.8175 3.2049 2.89952C3.2049 2.89952 3.74489 2.73752 4.98688 3.57451C5.49987 3.43951 6.06686 3.35851 6.60685 3.35851C7.14684 3.35851 7.71383 3.43951 8.22682 3.57451C9.4688 2.73752 10.0088 2.89952 10.0088 2.89952C10.3598 3.79051 10.1438 4.43849 10.0628 4.62749C10.4678 5.08648 10.7378 5.65347 10.7378 6.35546C10.7378 8.83942 9.22581 9.37942 7.76783 9.54141C8.01083 9.73041 8.19982 10.1354 8.19982 10.7294C8.19982 11.5934 8.19982 12.2954 8.19982 12.5114C8.19982 12.6734 8.30782 12.8894 8.65882 12.8354C11.2238 11.9984 13.0867 9.56841 13.0867 6.70646C13.0867 3.11552 10.1978 0.226562 6.60685 0.226562Z"
        fill="currentColor"
      />
    </svg>
  ),
  instagram: (props: SvgIconProps) => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.00076 1.44721C8.80947 1.44721 9.02366 1.45398 9.73818 1.48656C10.1678 1.49182 10.5933 1.5707 10.9962 1.71979C11.2884 1.83248 11.5538 2.00511 11.7753 2.22656C11.9967 2.44802 12.1694 2.71339 12.282 3.00559C12.4311 3.40853 12.51 3.83406 12.5153 4.26366C12.5475 4.97817 12.5546 5.19237 12.5546 7.00108C12.5546 8.80979 12.5479 9.02398 12.5153 9.7385C12.51 10.1681 12.4311 10.5936 12.282 10.9966C12.1694 11.2888 11.9967 11.5541 11.7753 11.7756C11.5538 11.997 11.2884 12.1697 10.9962 12.2824C10.5933 12.4315 10.1678 12.5103 9.73818 12.5156C9.02398 12.5479 8.80979 12.5549 7.00076 12.5549C5.19172 12.5549 4.97753 12.5482 4.26334 12.5156C3.83373 12.5103 3.40821 12.4315 3.00527 12.2824C2.71307 12.1697 2.44769 11.997 2.22624 11.7756C2.00479 11.5541 1.83216 11.2888 1.71947 10.9966C1.57038 10.5936 1.4915 10.1681 1.48624 9.7385C1.45398 9.02398 1.44689 8.80979 1.44689 7.00108C1.44689 5.19237 1.45366 4.97817 1.48624 4.26366C1.4915 3.83406 1.57038 3.40853 1.71947 3.00559C1.83216 2.71339 2.00479 2.44802 2.22624 2.22656C2.44769 2.00511 2.71307 1.83248 3.00527 1.71979C3.40821 1.5707 3.83373 1.49182 4.26334 1.48656C4.97785 1.4543 5.19205 1.44721 7.00076 1.44721ZM7.00076 0.226562C5.16205 0.226562 4.93043 0.234304 4.20785 0.267208C3.64561 0.278391 3.08934 0.384847 2.56269 0.582046C2.11092 0.752261 1.70172 1.019 1.36366 1.36366C1.01869 1.70184 0.751722 2.11127 0.581401 2.56334C0.384201 3.08998 0.277746 3.64625 0.266563 4.2085C0.234304 4.93043 0.226562 5.16205 0.226562 7.00076C0.226562 8.83946 0.234304 9.07108 0.267208 9.79366C0.278391 10.3559 0.384847 10.9122 0.582046 11.4388C0.752178 11.8908 1.01892 12.3002 1.36366 12.6385C1.70191 12.9832 2.11133 13.25 2.56334 13.4201C3.08998 13.6173 3.64626 13.7238 4.2085 13.7349C4.93108 13.7672 5.16172 13.7756 7.0014 13.7756C8.84108 13.7756 9.07172 13.7679 9.7943 13.7349C10.3565 13.7238 10.9128 13.6173 11.4395 13.4201C11.8893 13.2457 12.2978 12.9794 12.6389 12.6381C12.98 12.2968 13.246 11.8882 13.4201 11.4382C13.6173 10.9115 13.7238 10.3553 13.735 9.79301C13.7672 9.07108 13.775 8.83946 13.775 7.00076C13.775 5.16205 13.7672 4.93043 13.7343 4.20785C13.7231 3.64561 13.6167 3.08934 13.4195 2.56269C13.2493 2.11068 12.9826 1.70126 12.6379 1.36301C12.2996 1.01828 11.8902 0.751533 11.4382 0.581401C10.9115 0.384201 10.3553 0.277746 9.79301 0.266563C9.07108 0.234304 8.83947 0.226562 7.00076 0.226562Z"
        fill="currentColor"
      />
      <path
        d="M7.00215 3.52344C6.31413 3.52344 5.64155 3.72746 5.06948 4.10971C4.49741 4.49195 4.05154 5.03525 3.78824 5.6709C3.52494 6.30655 3.45605 7.00601 3.59028 7.68081C3.72451 8.35561 4.05582 8.97546 4.54233 9.46197C5.02884 9.94847 5.64868 10.2798 6.32349 10.414C6.99829 10.5482 7.69774 10.4794 8.33339 10.2161C8.96904 9.95276 9.51234 9.50689 9.89459 8.93481C10.2768 8.36274 10.4809 7.69017 10.4809 7.00215C10.4809 6.07954 10.1144 5.19471 9.46197 4.54233C8.80958 3.88994 7.92476 3.52344 7.00215 3.52344ZM7.00215 9.26021C6.55555 9.26021 6.11897 9.12778 5.74764 8.87966C5.3763 8.63154 5.08688 8.27888 4.91597 7.86627C4.74506 7.45366 4.70034 6.99964 4.78747 6.56162C4.8746 6.1236 5.08966 5.72125 5.40546 5.40545C5.72125 5.08966 6.1236 4.8746 6.56162 4.78747C6.99964 4.70034 7.45367 4.74506 7.86627 4.91597C8.27888 5.08687 8.63154 5.3763 8.87966 5.74763C9.12778 6.11897 9.26021 6.55554 9.26021 7.00215C9.26021 7.60102 9.02231 8.17537 8.59884 8.59884C8.17537 9.02231 7.60102 9.26021 7.00215 9.26021Z"
        fill="currentColor"
      />
      <path
        d="M10.6176 4.19807C11.0665 4.19807 11.4305 3.83412 11.4305 3.38517C11.4305 2.93621 11.0665 2.57227 10.6176 2.57227C10.1686 2.57227 9.80469 2.93621 9.80469 3.38517C9.80469 3.83412 10.1686 4.19807 10.6176 4.19807Z"
        fill="currentColor"
      />
    </svg>
  ),
  facebook: (props: SvgIconProps) => (
    <svg
      width="8"
      height="13"
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.70873 12.3038V6.75026H0.839844V4.58594H2.70873V2.98981C2.70873 1.13752 3.84005 0.128906 5.49242 0.128906C6.28392 0.128906 6.96418 0.187836 7.16243 0.214175V2.14993L6.01642 2.15045C5.11776 2.15045 4.94376 2.57748 4.94376 3.20411V4.58594H7.08697L6.80791 6.75026H4.94376V12.3038H2.70873Z"
        fill="currentColor"
      />
    </svg>
  ),
  twitter: (props: SvgIconProps) => (
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.2071 1.9831C10.7881 2.16933 10.3458 2.28573 9.88023 2.35557C10.3458 2.07622 10.7183 1.63392 10.8812 1.0985C10.4389 1.35457 9.95006 1.5408 9.41465 1.6572C8.99562 1.2149 8.39037 0.935547 7.73856 0.935547C6.48149 0.935547 5.45721 1.95982 5.45721 3.21689C5.45721 3.40312 5.48049 3.56608 5.52705 3.72903C3.64145 3.63591 1.94208 2.72803 0.801411 1.33129C0.615178 1.68048 0.498783 2.05294 0.498783 2.47196C0.498783 3.26345 0.894527 3.96182 1.52306 4.38084C1.1506 4.35756 0.801411 4.26445 0.475504 4.10149V4.12477C0.475504 5.24216 1.26699 6.17333 2.31455 6.38284C2.12831 6.42939 1.9188 6.45267 1.70929 6.45267C1.56962 6.45267 1.40666 6.42939 1.26699 6.40612C1.56962 7.314 2.40766 7.98909 3.40866 7.98909C2.61717 8.59434 1.63945 8.96681 0.56862 8.96681C0.382388 8.96681 0.196156 8.96681 0.0332031 8.94353C1.05748 9.59534 2.24471 9.96781 3.54833 9.96781C7.76184 9.96781 10.0665 6.47595 10.0665 3.44968C10.0665 3.35656 10.0665 3.24017 10.0665 3.14705C10.5088 2.84443 10.9045 2.44868 11.2071 1.9831Z"
        fill="currentColor"
      />
    </svg>
  ),
};

export const PaymentMethods = {
  mastercard: (props: SvgIconProps) => (
    <svg
      width="26"
      height="16"
      viewBox="0 0 26 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.2699 1.84839H9.40663V14.1819H16.2699V1.84839Z"
        fill="#FF5F00"
      />
      <path
        d="M9.84245 8.01514C9.84137 6.82733 10.1105 5.65484 10.6296 4.58644C11.1486 3.51804 11.9039 2.58173 12.8383 1.84838C11.6812 0.938865 10.2915 0.37325 8.82815 0.216185C7.36478 0.0591194 5.88674 0.316937 4.56296 0.96018C3.23919 1.60342 2.1231 2.60614 1.34226 3.8537C0.561418 5.10127 0.147339 6.54336 0.147339 8.01514C0.147339 9.48692 0.561418 10.929 1.34226 12.1766C2.1231 13.4241 3.23919 14.4269 4.56296 15.0701C5.88674 15.7133 7.36478 15.9712 8.82815 15.8141C10.2915 15.657 11.6812 15.0914 12.8383 14.1819C11.9039 13.4485 11.1486 12.5122 10.6296 11.4438C10.1105 10.3754 9.84138 9.20294 9.84245 8.01514Z"
        fill="#EB001B"
      />
      <path
        d="M25.5289 8.01514C25.5289 9.48689 25.1149 10.929 24.3341 12.1765C23.5533 13.4241 22.4372 14.4268 21.1135 15.0701C19.7897 15.7133 18.3117 15.9712 16.8484 15.8141C15.385 15.657 13.9954 15.0914 12.8383 14.1819C13.7719 13.4478 14.5266 12.5113 15.0455 11.4431C15.5645 10.3749 15.8341 9.20275 15.8341 8.01514C15.8341 6.82752 15.5645 5.6554 15.0455 4.58717C14.5266 3.51893 13.7719 2.58247 12.8383 1.84838C13.9954 0.938864 15.385 0.373246 16.8484 0.216183C18.3117 0.0591193 19.7897 0.316948 21.1135 0.960198C22.4372 1.60345 23.5533 2.60616 24.3341 3.85373C25.1149 5.1013 25.5289 6.54338 25.5289 8.01514Z"
        fill="#F79E1B"
      />
      <path
        d="M24.7805 12.8756V12.6231H24.8824V12.5716H24.6231V12.6231H24.7249V12.8756H24.7805ZM25.284 12.8756V12.5711H25.2045L25.1131 12.7805L25.0216 12.5711H24.9421V12.8756H24.9982V12.6459L25.0839 12.8439H25.1421L25.2279 12.6454V12.8756H25.284Z"
        fill="#F79E1B"
      />
    </svg>
  ),
  paypal: (props: SvgIconProps) => (
    <svg
      width="35"
      height="10"
      viewBox="0 0 35 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.42569 0.645996H1.7382C1.55429 0.645996 1.39788 0.779641 1.3692 0.961111L0.282238 7.85185C0.260634 7.98786 0.365947 8.11042 0.503883 8.11042H1.78692C1.97083 8.11042 2.12724 7.97677 2.15592 7.79494L2.44908 5.93642C2.47736 5.75441 2.63416 5.62094 2.81768 5.62094H3.66845C5.4388 5.62094 6.46045 4.76433 6.72742 3.06692C6.84762 2.32431 6.73251 1.74081 6.38462 1.33205C6.00273 0.883467 5.32514 0.645996 4.42569 0.645996ZM4.73575 3.16274C4.58881 4.127 3.85198 4.127 3.13953 4.127H2.73398L3.01849 2.32613C3.03538 2.21739 3.12969 2.13721 3.23973 2.13721H3.4256C3.91092 2.13721 4.36877 2.13721 4.60536 2.41377C4.7463 2.57888 4.78958 2.82399 4.73575 3.16274ZM12.4593 3.13183H11.1723C11.0626 3.13183 10.9679 3.21202 10.951 3.32094L10.8941 3.68079L10.804 3.55041C10.5254 3.14601 9.90422 3.01091 9.2841 3.01091C7.86182 3.01091 6.64722 4.08791 6.41063 5.59876C6.28769 6.35227 6.46246 7.07288 6.88999 7.57546C7.28225 8.0375 7.84345 8.23006 8.51104 8.23006C9.6569 8.23006 10.2925 7.49327 10.2925 7.49327L10.235 7.85094C10.2134 7.98768 10.3187 8.11023 10.4558 8.11023H11.6151C11.7995 8.11023 11.955 7.97659 11.9841 7.79475L12.6797 3.3904C12.7017 3.25493 12.5968 3.13183 12.4593 3.13183ZM10.6653 5.63639C10.5411 6.37154 9.95751 6.86504 9.21336 6.86504C8.83965 6.86504 8.54086 6.74521 8.34919 6.51811C8.15897 6.29263 8.08659 5.97152 8.14715 5.61403C8.26317 4.88507 8.85656 4.37557 9.58944 4.37557C9.95478 4.37557 10.2519 4.49685 10.4476 4.72596C10.6436 4.95743 10.7215 5.28037 10.6653 5.63639ZM18.0202 3.13165H19.3135C19.4947 3.13165 19.6003 3.33476 19.4974 3.48332L15.196 9.69145C15.1263 9.792 15.0116 9.85183 14.889 9.85183H13.5973C13.4155 9.85183 13.3093 9.64708 13.4146 9.49816L14.7539 7.60783L13.3294 3.42785C13.2802 3.28257 13.3875 3.13165 13.542 3.13165H14.8128C14.978 3.13165 15.1236 3.24002 15.1713 3.39804L15.9272 5.9226L17.711 3.29548C17.7809 3.19293 17.8969 3.13165 18.0202 3.13165Z"
        fill="#253B80"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.0427 7.85123L33.1457 0.834488C33.1626 0.72557 33.257 0.645383 33.3666 0.64502H34.6083C34.7455 0.64502 34.8507 0.767938 34.8291 0.903949L33.7414 7.79432C33.7131 7.97615 33.5567 8.1098 33.3725 8.1098H32.2635C32.1264 8.1098 32.0211 7.98725 32.0427 7.85123ZM23.5958 0.64538H20.9078C20.7243 0.64538 20.5679 0.779028 20.5392 0.960497L19.4523 7.85123C19.4306 7.98725 19.5359 8.1098 19.6732 8.1098H21.0524C21.1806 8.1098 21.2903 8.01634 21.3103 7.88905L21.6187 5.93581C21.6471 5.75379 21.8038 5.62033 21.9873 5.62033H22.8377C24.6084 5.62033 25.6298 4.76371 25.897 3.0663C26.0176 2.3237 25.9017 1.7402 25.554 1.33144C25.1723 0.882855 24.4953 0.64538 23.5958 0.64538ZM23.9059 3.16213C23.7593 4.12639 23.0224 4.12639 22.3096 4.12639H21.9044L22.1893 2.32552C22.2063 2.21678 22.2997 2.13659 22.4101 2.13659H22.596C23.081 2.13659 23.5393 2.13659 23.7757 2.41316C23.9168 2.57826 23.9597 2.82338 23.9059 3.16213ZM31.6287 3.13122H30.3426C30.232 3.13122 30.1382 3.21141 30.1216 3.32032L30.0647 3.68017L29.9743 3.5498C29.6957 3.1454 29.0749 3.0103 28.4548 3.0103C27.0325 3.0103 25.8182 4.0873 25.5817 5.59815C25.4591 6.35166 25.6331 7.07226 26.0607 7.57485C26.4536 8.03689 27.0141 8.22945 27.6817 8.22945C28.8276 8.22945 29.463 7.49266 29.463 7.49266L29.4057 7.85033C29.384 7.98707 29.4893 8.10962 29.6274 8.10962H30.7861C30.9696 8.10962 31.126 7.97597 31.1548 7.79414L31.8507 3.38979C31.872 3.25432 31.7667 3.13122 31.6287 3.13122ZM29.8349 5.63578C29.7114 6.37093 29.1271 6.86443 28.3828 6.86443C28.0098 6.86443 27.7104 6.7446 27.5186 6.51749C27.3284 6.29202 27.2569 5.9709 27.3167 5.61342C27.4333 4.88445 28.026 4.37496 28.7588 4.37496C29.1243 4.37496 29.4213 4.49624 29.6172 4.72535C29.8139 4.95682 29.8918 5.27975 29.8349 5.63578Z"
        fill="#179BD7"
      />
    </svg>
  ),
  applepay: (props: SvgIconProps) => (
    <svg
      width="28"
      height="12"
      viewBox="0 0 28 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.9199 2.08171C6.23089 1.69273 6.44193 1.17044 6.38627 0.636719C5.93102 0.659356 5.37548 0.937062 5.05385 1.32635C4.76506 1.65972 4.50945 2.20388 4.57609 2.71522C5.08713 2.75955 5.5977 2.45978 5.9199 2.08171Z"
        fill="#000008"
      />
      <path
        d="M6.38048 2.81507C5.63833 2.77086 5.00732 3.23628 4.65291 3.23628C4.2983 3.23628 3.75557 2.83734 3.16857 2.8481C2.40455 2.85932 1.69562 3.2913 1.30791 3.97836C0.510465 5.35281 1.09747 7.39161 1.87295 8.51102C2.24953 9.06483 2.70339 9.67462 3.30141 9.65271C3.86644 9.63054 4.08791 9.28685 4.77473 9.28685C5.46105 9.28685 5.66054 9.65271 6.25866 9.64163C6.87893 9.63054 7.2667 9.08754 7.64329 8.5332C8.07531 7.90188 8.25216 7.29229 8.26328 7.25883C8.25216 7.24775 7.06724 6.79318 7.05625 5.43015C7.04506 4.28887 7.98654 3.74601 8.03085 3.71234C7.49919 2.92601 6.66848 2.83734 6.38048 2.81507Z"
        fill="#000008"
      />
      <path
        d="M12.8425 1.27052C14.4556 1.27052 15.5788 2.38242 15.5788 4.00125C15.5788 5.62587 14.4325 6.74354 12.8021 6.74354H11.0161V9.58373H9.72578V1.27052L12.8425 1.27052ZM11.0161 5.66043H12.4967C13.6202 5.66043 14.2596 5.05559 14.2596 4.00703C14.2596 2.95859 13.6202 2.35941 12.5025 2.35941H11.0161V5.66043Z"
        fill="#000008"
      />
      <path
        d="M15.9159 7.8612C15.9159 6.80109 16.7283 6.15013 18.1686 6.06945L19.8277 5.97156V5.50495C19.8277 4.83088 19.3725 4.42762 18.6122 4.42762C17.8919 4.42762 17.4426 4.77321 17.3332 5.31482H16.158C16.2271 4.22015 17.1603 3.41362 18.6582 3.41362C20.1273 3.41362 21.0663 4.19137 21.0663 5.40694V9.58371H19.8737V8.58705H19.845C19.4937 9.26112 18.7274 9.68739 17.9324 9.68739C16.7456 9.68739 15.9159 8.94998 15.9159 7.8612ZM19.8277 7.31392V6.83576L18.3355 6.92788C17.5923 6.97977 17.1719 7.30814 17.1719 7.82664C17.1719 8.35658 17.6097 8.70228 18.278 8.70228C19.1478 8.70228 19.8277 8.10311 19.8277 7.31392Z"
        fill="#000008"
      />
      <path
        d="M22.1922 11.8133V10.8051C22.2842 10.8281 22.4915 10.8281 22.5953 10.8281C23.1714 10.8281 23.4825 10.5861 23.6725 9.96397C23.6725 9.95242 23.7821 9.59527 23.7821 9.58949L21.593 3.52307H22.9409L24.4735 8.45459H24.4964L26.029 3.52307H27.3425L25.0724 9.90052C24.5542 11.3697 23.955 11.8421 22.6991 11.8421C22.5953 11.8421 22.2842 11.8305 22.1922 11.8133Z"
        fill="#000008"
      />
    </svg>
  ),
  gpay: (props: SvgIconProps) => (
    <svg
      width="29"
      height="13"
      viewBox="0 0 29 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.751 9.6143H12.7025V1.45605H15.482C16.1864 1.45605 16.7871 1.69086 17.2785 2.16048C17.7809 2.6301 18.0321 3.20347 18.0321 3.88059C18.0321 4.5741 17.7809 5.14747 17.2785 5.61163C16.7925 6.07578 16.1919 6.30513 15.482 6.30513H13.751V9.6143ZM13.751 2.46082V5.30583H15.5038C15.9188 5.30583 16.2683 5.16385 16.5414 4.88536C16.8198 4.60686 16.9618 4.2683 16.9618 3.88605C16.9618 3.50926 16.8198 3.17616 16.5414 2.89767C16.2683 2.60825 15.9243 2.46628 15.5038 2.46628H13.751V2.46082Z"
        fill="#3C4043"
      />
      <path
        d="M20.7732 3.84783C21.5487 3.84783 22.1603 4.05533 22.608 4.47034C23.0558 4.88536 23.2797 5.45327 23.2797 6.17408V9.6143H22.2804V8.83888H22.2367C21.8053 9.47778 21.2265 9.7945 20.5057 9.7945C19.8886 9.7945 19.3753 9.6143 18.9603 9.24844C18.5453 8.88257 18.3378 8.42933 18.3378 7.88327C18.3378 7.30443 18.5562 6.84574 18.9931 6.50718C19.4299 6.16315 20.0142 5.99387 20.7405 5.99387C21.363 5.99387 21.8763 6.10855 22.2749 6.3379V6.09762C22.2749 5.73176 22.1329 5.42596 21.8435 5.16931C21.5541 4.91266 21.2156 4.78706 20.8279 4.78706C20.2436 4.78706 19.7794 5.03279 19.4408 5.52972L18.518 4.95088C19.0258 4.21369 19.7794 3.84783 20.7732 3.84783ZM19.419 7.89965C19.419 8.17268 19.5337 8.40203 19.7685 8.58223C19.9978 8.76243 20.2709 8.85527 20.5821 8.85527C21.0244 8.85527 21.4176 8.69145 21.7616 8.36381C22.1056 8.03616 22.2804 7.65392 22.2804 7.2116C21.9527 6.95495 21.4995 6.8239 20.9152 6.8239C20.4893 6.8239 20.1343 6.92765 19.8504 7.12969C19.561 7.34266 19.419 7.59931 19.419 7.89965Z"
        fill="#3C4043"
      />
      <path
        d="M28.9807 4.02808L25.4858 12.0662H24.4046L25.7043 9.25395L23.3999 4.02808H24.5412L26.2012 8.03622H26.223L27.8394 4.02808H28.9807Z"
        fill="#3C4043"
      />
      <path
        d="M9.58059 5.64439C9.58059 5.30256 9.55001 4.97546 9.49322 4.66093H5.09849V6.46295L7.6295 6.46349C7.52684 7.06308 7.19647 7.5742 6.69027 7.91494V9.08407H8.19686C9.07657 8.26989 9.58059 7.06635 9.58059 5.64439Z"
        fill="#4285F4"
      />
      <path
        d="M6.6908 7.915C6.27143 8.19786 5.73137 8.36332 5.09957 8.36332C3.87912 8.36332 2.84378 7.54094 2.473 6.43242H0.918898V7.63814C1.68885 9.16604 3.27135 10.2145 5.09957 10.2145C6.36316 10.2145 7.42471 9.79893 8.1974 9.08358L6.6908 7.915Z"
        fill="#34A853"
      />
      <path
        d="M2.32661 5.5379C2.32661 5.22664 2.37848 4.92576 2.47295 4.64289V3.43718H0.918851C0.600495 4.06898 0.421387 4.78214 0.421387 5.5379C0.421387 6.29366 0.601041 7.00682 0.918851 7.63862L2.47295 6.4329C2.37848 6.15004 2.32661 5.84916 2.32661 5.5379Z"
        fill="#FABB05"
      />
      <path
        d="M5.09957 2.71201C5.78925 2.71201 6.40685 2.94955 6.89448 3.41371L8.22961 2.07966C7.41871 1.32445 6.36153 0.86084 5.09957 0.86084C3.27189 0.86084 1.6888 1.90928 0.918851 3.43718L2.47295 4.64289C2.84373 3.53438 3.87912 2.71201 5.09957 2.71201Z"
        fill="#E94235"
      />
    </svg>
  ),
};

export const ClothingIcons = {
  shirts: (props: SvgIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="currentColor">
        <path d="M21.48 20.41s0 .02-.02.03l-2.07.79v-1.09l2.03-.76.06 1.04ZM4.62 20.14v1.09l-2.08-.79s-.02-.01-.02-.03l.06-1.04 2.03.76ZM15.66 1.36l-1.68 2.69-.02.01h-.02L12.6 2.99 15.21.7l.44.66ZM14.27.5 12 2.48 9.73.5M11.4 2.98l-1.34 1.07h-.02c-.01 0-.02 0-.02-.01L8.34 1.35l.44-.66 2.61 2.29Z" />
        <path d="M10.54 4.65c-.14.11-.32.18-.5.18-.04 0-.09 0-.13-.01-.22-.04-.42-.17-.54-.36L7.72 1.82 3.84 3.2c-.8.29-1.36 1.05-1.38 1.91L2.1 18.35s0 .02.02.02l2.5.94V7.11c0-.21.17-.39.39-.39s.39.17.39.39v14.91s0 .02.02.02l5.44 1.45.76-5.71V3.8l-1.07.86Zm-.22 5.34c0 .67-.54 1.21-1.21 1.21H7.46c-.67 0-1.21-.54-1.21-1.21V7.11c0-.21.17-.39.39-.39h3.29c.21 0 .39.17.39.39v2.88ZM21.54 5.11c-.02-.85-.58-1.62-1.38-1.91l-3.88-1.38-1.65 2.64c-.12.19-.32.32-.54.36-.04 0-.09.01-.13.01-.18 0-.36-.06-.5-.18l-1.07-.86v13.99l.76 5.71 5.45-1.45s.02-.01.02-.02V7.11c.01-.21.19-.39.4-.39.21 0 .39.17.39.39v12.2l2.48-.93c.01 0 .02-.01.02-.03l-.36-13.24Zm-7.89 4.86c-.21 0-.39-.17-.39-.39s.17-.39.38-.39.39.17.39.39-.17.39-.39.39Zm.39 2.5c0 .21-.17.39-.39.39s-.39-.17-.39-.39.17-.39.38-.39.39.17.39.39Zm-.39-6.15c.21 0 .39.17.39.39s-.17.39-.39.39-.39-.17-.39-.39.17-.39.39-.39Zm0 8.64c.21 0 .39.17.39.39s-.17.39-.39.39-.39-.17-.39-.39.17-.39.38-.39Zm0 3.65c-.21 0-.39-.17-.39-.39s.17-.39.38-.39.39.17.39.39-.17.39-.39.39Z" />
        <path d="M9.56 9.06v.93c0 .24-.2.44-.44.44H7.47c-.24 0-.44-.2-.44-.44v-.93c.14.05.28.08.44.08h1.65c.15 0 .3-.03.44-.08ZM9.56 7.5v.44c0 .24-.2.44-.44.44H7.47c-.24 0-.44-.2-.44-.44V7.5h2.52Z" />
      </g>
    </svg>
  ),
  tshirts: (props: SvgIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5.83 22.63h12.35v.87H5.83zM22.22 9.71l-3.28 1.31v-.81l3.16-1.26.12.76zM15.64 1.35l-1.67 2.68-.02.01h-.02L12.6 2.98 15.2.7l.44.66ZM14.26.5 12 2.47 9.74.5h4.52zM11.4 2.97l-1.33 1.06h-.02c-.01 0-.02 0-.02-.01L8.36 1.34 8.8.68l2.6 2.28ZM12.44 3.82v3.67s-.01.03-.03.03h-.82s-.03-.01-.03-.03V3.82l.44-.35.44.35ZM5.06 10.21v.81L1.78 9.71l.12-.76 3.16 1.26z"
      />
      <path
        fill="currentColor"
        d="M18.94 9.38v-2.3c0-.21-.17-.38-.38-.38s-.38.17-.38.38v14.78H5.83V7.08c0-.21-.17-.38-.38-.38s-.38.17-.38.38v2.3L2.04 8.17l.7-4.18c.11-.67.61-1.2 1.27-1.35l3.73-.86L9.4 4.44c.12.19.32.32.54.36.04 0 .09.01.13.01.18 0 .35-.06.5-.17l.25-.2v3.05c0 .44.36.79.79.79h.82c.44 0 .79-.36.79-.79V4.44l.25.2c.14.11.32.17.5.17.04 0 .09 0 .13-.01.22-.04.42-.17.54-.36l1.66-2.66 3.73.86c.66.15 1.16.68 1.27 1.35l.7 4.18-3.03 1.21Z"
      />
    </svg>
  ),
  shorts: (props: SvgIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <g fill="currentColor">
        <path d="m20.68 22.63-.03.87H13.6l-.03-.87h7.11zM10.43 22.63l-.03.87H3.35l-.03-.87h7.11zM21.22 8.69l-.51 13.17h-7.17l-.32-8.68c-.02-.65-.55-1.16-1.2-1.16h-.03c-.15 0-.29.03-.42.08v-1.77h.44c.66 0 1.2-.54 1.2-1.2V2.96h4.56v2.07c0 1.95 1.53 3.55 3.45 3.66Z" />
        <path d="m21.43 2.99-.19 4.94c-1.51-.09-2.71-1.35-2.71-2.89V2.97h2.9v.02ZM17.71.5h3.33v1.69h-3.33zM11.15.5v1.69h5.79V.5h-5.79ZM12 1.73c-.21 0-.39-.17-.39-.38s.17-.38.38-.38.38.17.38.38-.17.38-.38.38ZM12.44 2.96v6.17c0 .24-.2.44-.44.44h-.44V2.96h.87ZM7.06.5h3.33v1.69H7.06zM2.96.5h3.33v1.69H2.96zM10.8 2.96v10.09s-.01.09-.01.14l-.32 8.68H3.29L2.78 8.7c1.92-.11 3.45-1.71 3.45-3.66V2.97h4.56Z" />
        <path d="M3.83 5.44v2.2c-.33.16-.69.26-1.07.28l-.1-2.5h1.15s.03.01.03.03Z" />
        <path d="M5.47 2.96v2.07c0 .81-.33 1.54-.87 2.07V5.44c0-.44-.36-.79-.79-.79H2.64l-.06-1.66v-.02h2.9Z" />
      </g>
    </svg>
  ),
  jeans: (props: SvgIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <g fill="currentColor">
        <path d="m18.65 3.33-.08 2.23c-1.2-.05-2.16-1.04-2.16-2.25v-.59h1.66c.16 0 .31.06.42.18.11.12.17.27.16.43ZM18.13.5v1.18h-2.85V.5h2.84ZM9.75.5h4.5v1.18h-4.5zM8.71.5v1.18H5.86V.5H8.7ZM7.6 2.72v.59c0 1.21-.96 2.2-2.16 2.25l-.08-2.23c0-.16.05-.31.16-.43s.26-.18.42-.18H7.6Z" />
        <path d="M11.48 2.72v5.7c-.64.22-1.11.83-1.11 1.54V23.5H6.4L5.47 6.6c1.76-.07 3.16-1.52 3.16-3.29v-.59h2.84ZM18.52 6.6l-.93 16.9h-3.97V9.96c0-.72-.46-1.33-1.11-1.54v-5.7h2.84v.59c0 1.77 1.41 3.22 3.16 3.29Z" />
      </g>
    </svg>
  ),
  hoodies: (props: SvgIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="currentColor">
        <path d="m17.23 2.05-.18-.07c-.36-.15-.78-.12-1.11.1L12.45 4.3c-.24.16-.55.17-.81.05L16.4.69s.01.02.02.03l.81 1.34ZM11.48 3.49l-.54.41-2.89-1.84c-.33-.21-.75-.25-1.11-.1l-.18.07.81-1.34s.02-.02.03-.04l3.88 2.82ZM15.38.5l-3.26 2.51L8.67.5h6.71zM17.76 22.63v.85s-.01.03-.03.03H6.26s-.03-.01-.03-.03v-.85h11.53ZM21.12 20.91s0 .02-.01.02l-1.81.8c.03-.11.04-.22.04-.34l-.03-.92 1.76-.73.06 1.17ZM4.71 21.73l-1.81-.8s-.02-.01-.01-.02l.06-1.17 1.76.73-.03.92c0 .11 0 .23.04.34Z" />
        <path d="M21.1 5.81c-.03-.81-.53-1.53-1.28-1.85l-3.06-1.28c-.13-.06-.28-.04-.4.03l-3.15 2v5.64c0 .21-.17.38-.38.38s-.38-.17-.38-.38V5.12c-.28.08-.59.08-.87 0v5.23c0 .21-.17.38-.38.38s-.38-.17-.38-.38V4.71l-3.15-2c-.12-.08-.27-.09-.4-.03L4.21 3.96C3.46 4.27 2.96 5 2.93 5.81L2.49 18.7s0 .02.02.02l2.24.93.34-11.35c0-.21.18-.38.4-.37.21 0 .38.18.37.4l-.39 13.09c0 .12.04.23.12.31.08.08.19.13.31.13h12.25c.12 0 .23-.05.31-.13.08-.08.13-.2.12-.32l-.39-13.09c0-.21.16-.39.37-.4.21 0 .39.16.4.37l.34 11.35 2.24-.93s.02-.01.02-.02L21.12 5.8Zm-4.25 14.17c-.07.12-.2.2-.33.2H7.49c-.14 0-.27-.07-.33-.2-.07-.12-.07-.27 0-.39.01-.02 1.2-2.02 1.59-4.77.03-.19.19-.33.38-.33h5.74c.19 0 .35.14.38.33.39 2.76 1.58 4.75 1.59 4.77.07.12.07.27 0 .39Z" />
        <path d="M15.87 19.4H8.13c.38-.78 1.02-2.27 1.33-4.15h5.08c.31 1.88.95 3.37 1.33 4.15Z" />
      </g>
    </svg>
  ),
};

export const Search = ({ ...props }: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M21.7959 20.2041L17.3437 15.75C18.6787 14.0104 19.3019 11.8282 19.087 9.64607C18.8722 7.4639 17.8353 5.44516 16.1867 3.99937C14.5382 2.55357 12.4014 1.78899 10.2098 1.86071C8.01829 1.93244 5.93607 2.8351 4.38558 4.38559C2.83509 5.93608 1.93243 8.0183 1.8607 10.2098C1.78898 12.4014 2.55356 14.5382 3.99936 16.1867C5.44515 17.8353 7.46389 18.8722 9.64606 19.087C11.8282 19.3019 14.0104 18.6787 15.75 17.3438L20.2059 21.8006C20.3106 21.9053 20.4348 21.9883 20.5715 22.0449C20.7083 22.1016 20.8548 22.1307 21.0028 22.1307C21.1508 22.1307 21.2973 22.1016 21.4341 22.0449C21.5708 21.9883 21.695 21.9053 21.7997 21.8006C21.9043 21.696 21.9873 21.5717 22.044 21.435C22.1006 21.2983 22.1298 21.1517 22.1298 21.0037C22.1298 20.8558 22.1006 20.7092 22.044 20.5725C21.9873 20.4358 21.9043 20.3115 21.7997 20.2069L21.7959 20.2041ZM4.12499 10.5C4.12499 9.23915 4.49888 8.0066 5.19938 6.95824C5.89987 5.90988 6.89551 5.09278 8.06039 4.61027C9.22527 4.12776 10.5071 4.00151 11.7437 4.2475C12.9803 4.49348 14.1162 5.10064 15.0078 5.9922C15.8994 6.88376 16.5065 8.01967 16.7525 9.2563C16.9985 10.4929 16.8722 11.7747 16.3897 12.9396C15.9072 14.1045 15.0901 15.1001 14.0418 15.8006C12.9934 16.5011 11.7608 16.875 10.5 16.875C8.80977 16.8733 7.18927 16.2011 5.99411 15.0059C4.79894 13.8107 4.12673 12.1902 4.12499 10.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const CheckMini = ({ className, ...props }: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const CheckIcon = ({ className, ...props }: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn('h-6 w-6', className)}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
};

export const Verified = ({
  checkSize,
  checkClassName,
  wrapperClassName,
}: {
  checkSize?: number;
  checkClassName?: string;
  wrapperClassName?: string;
}) => {
  return (
    <span
      className={cn(
        'flex h-4 w-4 items-center justify-center rounded-full bg-green-500',
        wrapperClassName,
      )}
    >
      <Check
        size={checkSize || 12}
        className={cn('text-white', checkClassName)}
      />
    </span>
  );
};

export const StarIcon = ({ ...props }: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      width={24}
      height={24}
      className={cn('h-6 w-6', props.className)}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
};

export const UserIcon = ({ ...props }: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
};

export const BagCartIcon = ({ className, ...props }: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn('h-6 w-6', className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const BagCartIconMini = ({ className, ...props }: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={cn('h-5 w-5', className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const CartIcon = ({ ...props }: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M22 18H6a2 2 0 01-2-2V7a2 2 0 00-2-2"></path>
    <path d="M17 14V4a2 2 0 00-2-2h-1a2 2 0 00-2 2v10"></path>
    <rect width="13" height="8" x="8" y="6" rx="1"></rect>
    <circle cx="18" cy="20" r="2"></circle>
    <circle cx="9" cy="20" r="2"></circle>
  </svg>
);

export const GoogleIcon = ({ className, ...props }: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 89.97 91.8"
      className={cn('h-6 w-6', className)}
      {...props}
    >
      <g>
        <g>
          <path
            d="m89.97,47c0-3.1-.3-6.3-.8-9.3h-43.3v17.7h24.8c-1,5.7-4.3,10.7-9.2,13.9l14.8,11.5c8.7-8.1,13.7-19.9,13.7-33.8h0Z"
            fill="#4280ef"
            strokeWidth="0"
          />
          <path
            d="m45.88,91.8c12.4,0,22.8-4.1,30.4-11.1l-14.8-11.4c-4.1,2.8-9.4,4.4-15.6,4.4-12,0-22.1-8.1-25.8-18.9l-15.2,11.7c7.8,15.5,23.6,25.3,41,25.3Z"
            fill="#34a353"
            strokeWidth="0"
          />
          <path
            d="m20.07,54.7c-1.9-5.7-1.9-11.9,0-17.6l-15.2-11.8c-6.5,13-6.5,28.3,0,41.2l15.2-11.8Z"
            fill="#f6b704"
            strokeWidth="0"
          />
          <path
            d="m45.88,18.2c6.5-.1,12.9,2.4,17.6,6.9l13.1-13.2C68.28,4.1,57.28-.1,45.88,0,28.47,0,12.67,9.8,4.88,25.3l15.2,11.8c3.7-10.9,13.8-18.9,25.8-18.9Z"
            fill="#e54335"
            strokeWidth="0"
          />
        </g>
      </g>
    </svg>
  );
};

export const FacebookIcon = ({ className, ...props }: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      className={cn('h-6 w-6', className)}
      {...props}
    >
      <linearGradient
        id="a"
        x1="-277.375"
        x2="-277.375"
        y1="406.6018"
        y2="407.5726"
        gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#0062e0" />
        <stop offset="1" stopColor="#19afff" />
      </linearGradient>
      <path
        fill="url(#a)"
        d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z"
      />
      <path
        fill="#fff"
        d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"
      />
    </svg>
  );
};

export const AddressIcon = ({ className, ...props }: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="16"
    width="16"
    viewBox="0 0 512 512"
    className={cn('h-5 w-5', className)}
    {...props}
    stroke="currentColor"
    strokeWidth={0}
  >
    <path d="M384 48c8.8 0 16 7.2 16 16V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H384zM96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM240 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H208zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z" />
  </svg>
);
