import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      className={cn("fill-primary", className)}
      viewBox="0 0 88 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_65_12)">
        <path d="M9.66619 10.2119V15.6693H6.06752V10.1705L0 0.248047H3.84974L8.03424 7.1111L12.2187 0.248047H15.7756L9.66619 10.2119Z" />
        <path d="M14.7715 9.75704C14.7715 6.20149 17.5751 3.63818 21.383 3.63818C25.1909 3.63818 27.9527 6.16014 27.9527 9.75704C27.9527 13.3126 25.1909 15.8759 21.383 15.8759C17.5751 15.8759 14.7715 13.3539 14.7715 9.75704ZM24.4377 9.75704C24.4377 7.68986 23.1405 6.44955 21.383 6.44955C19.6255 6.44955 18.2865 7.68986 18.2865 9.75704C18.2865 11.8242 19.6255 13.0645 21.383 13.0645C23.0986 13.0645 24.4377 11.8242 24.4377 9.75704Z" />
        <path d="M42.3878 3.84497V15.7106H39.0821V14.3049C38.1615 15.3385 36.8224 15.876 35.3579 15.876C32.345 15.876 30.2109 14.1809 30.2109 10.5427V3.84497H33.6841V10.0465C33.6841 12.031 34.5628 12.8992 36.1111 12.8992C37.7012 12.8992 38.8728 11.8656 38.8728 9.71578V3.84497H42.3878Z" />
        <path d="M44.8994 7.97933C44.8994 3.30749 48.4981 0 53.394 0C56.1139 0 58.3735 0.950895 59.8381 2.72867L57.4948 4.8372C56.4486 3.63824 55.1096 3.01808 53.5613 3.01808C50.6322 3.01808 48.5399 5.04392 48.5399 7.97933C48.5399 10.8734 50.6322 12.9406 53.5613 12.9406C55.1096 12.9406 56.4486 12.3204 57.4948 11.1214L59.8381 13.23C58.3735 15.0078 56.1139 16 53.394 16C48.4981 15.9587 44.8994 12.6512 44.8994 7.97933Z" />
        <path d="M72.5584 8.93017V15.7105H69.2945V14.2222C68.6669 15.2971 67.4115 15.8759 65.6122 15.8759C62.8086 15.8759 61.1348 14.3462 61.1348 12.279C61.1348 10.1705 62.6412 8.72345 66.2817 8.72345H69.0435C69.0435 7.23508 68.1647 6.36687 66.2817 6.36687C65.0263 6.36687 63.6873 6.7803 62.8086 7.48314L61.5532 5.08521C62.8504 4.17565 64.8171 3.63818 66.742 3.63818C70.4244 3.63818 72.5584 5.33327 72.5584 8.93017ZM69.0435 11.9483V10.7493H66.6583C65.0263 10.7493 64.5242 11.3281 64.5242 12.155C64.5242 13.0232 65.2774 13.602 66.4909 13.602C67.6626 13.5607 68.6669 13.0232 69.0435 11.9483Z" />
        <path d="M87.9998 8.88884V15.6692H84.5267V9.4263C84.5267 7.52449 83.648 6.61493 82.0997 6.61493C80.4259 6.61493 79.2124 7.64852 79.2124 9.79839V15.6692H75.7393V3.80356H79.0869V5.20924C80.0074 4.17565 81.4302 3.63818 83.0621 3.63818C85.8239 3.63818 87.9998 5.29194 87.9998 8.88884Z" />
      </g>
      <rect x="23.875" y="21" width="64.125" height="19" rx="4.75" />
      <path
        d="M35.6429 28.6721H34.3272C34.2766 28.391 34.1824 28.1436 34.0447 27.93C33.9069 27.7163 33.7382 27.535 33.5386 27.386C33.339 27.237 33.1155 27.1245 32.8681 27.0486C32.6235 26.9727 32.3635 26.9347 32.088 26.9347C31.5904 26.9347 31.1448 27.0599 30.7512 27.3101C30.3604 27.5603 30.0512 27.9271 29.8235 28.4107C29.5986 28.8942 29.4861 29.4846 29.4861 30.1818C29.4861 30.8846 29.5986 31.4778 29.8235 31.9614C30.0512 32.4449 30.3618 32.8104 30.7554 33.0578C31.149 33.3052 31.5918 33.4289 32.0838 33.4289C32.3565 33.4289 32.6151 33.3923 32.8597 33.3192C33.1071 33.2433 33.3306 33.1323 33.5302 32.9861C33.7298 32.8399 33.8985 32.6614 34.0362 32.4506C34.1768 32.2369 34.2738 31.9923 34.3272 31.7168L35.6429 31.721C35.5726 32.1455 35.4363 32.5363 35.2338 32.8933C35.0342 33.2476 34.777 33.554 34.4621 33.8126C34.1501 34.0685 33.793 34.2667 33.391 34.4072C32.989 34.5478 32.5504 34.6181 32.0753 34.6181C31.3275 34.6181 30.6612 34.441 30.0765 34.0867C29.4917 33.7297 29.0307 33.2194 28.6933 32.556C28.3588 31.8925 28.1915 31.1011 28.1915 30.1818C28.1915 29.2597 28.3602 28.4683 28.6975 27.8077C29.0349 27.1442 29.4959 26.6353 30.0807 26.2811C30.6655 25.9241 31.3303 25.7456 32.0753 25.7456C32.5336 25.7456 32.9609 25.8116 33.3573 25.9438C33.7565 26.0731 34.1149 26.2642 34.4326 26.5173C34.7503 26.7675 35.0132 27.0739 35.2212 27.4366C35.4292 27.7964 35.5698 28.2083 35.6429 28.6721ZM38.3618 30.6541V34.5H37.1009V25.8636H38.3449V29.077H38.425C38.5768 28.7284 38.8088 28.4515 39.1208 28.2462C39.4329 28.041 39.8405 27.9384 40.3438 27.9384C40.7879 27.9384 41.1759 28.0298 41.5076 28.2125C41.8422 28.3952 42.1008 28.6679 42.2836 29.0306C42.4691 29.3904 42.5619 29.8402 42.5619 30.38V34.5H41.301V30.5318C41.301 30.0567 41.1787 29.6884 40.9341 29.427C40.6896 29.1627 40.3494 29.0306 39.9136 29.0306C39.6156 29.0306 39.3486 29.0938 39.1124 29.2203C38.8791 29.3469 38.6949 29.5324 38.56 29.777C38.4278 30.0188 38.3618 30.3111 38.3618 30.6541ZM46.1295 34.6434C45.719 34.6434 45.3479 34.5675 45.0162 34.4157C44.6844 34.261 44.4216 34.0375 44.2276 33.7452C44.0364 33.4528 43.9408 33.0943 43.9408 32.6698C43.9408 32.3044 44.0111 32.0036 44.1517 31.7674C44.2923 31.5312 44.482 31.3443 44.721 31.2065C44.9599 31.0688 45.227 30.9648 45.5222 30.8945C45.8174 30.8242 46.1182 30.7708 46.4246 30.7342C46.8126 30.6893 47.1275 30.6527 47.3692 30.6246C47.611 30.5937 47.7867 30.5445 47.8964 30.477C48.006 30.4095 48.0608 30.2999 48.0608 30.1481V30.1186C48.0608 29.7503 47.9568 29.4649 47.7488 29.2625C47.5435 29.0601 47.2371 28.9589 46.8295 28.9589C46.405 28.9589 46.0704 29.0531 45.8258 29.2414C45.5841 29.427 45.4168 29.6336 45.324 29.8613L44.139 29.5914C44.2796 29.1979 44.4848 28.8802 44.7547 28.6384C45.0274 28.3938 45.3409 28.2167 45.6951 28.1071C46.0493 27.9946 46.4218 27.9384 46.8126 27.9384C47.0712 27.9384 47.3453 27.9693 47.6349 28.0312C47.9273 28.0902 48.2 28.1998 48.453 28.3601C48.7088 28.5203 48.9183 28.7495 49.0813 29.0475C49.2444 29.3426 49.3259 29.7264 49.3259 30.1987V34.5H48.0946V33.6144H48.044C47.9624 33.7775 47.8401 33.9377 47.6771 34.0952C47.514 34.2526 47.3046 34.3833 47.0488 34.4873C46.7929 34.5914 46.4865 34.6434 46.1295 34.6434ZM46.4036 33.6313C46.7522 33.6313 47.0502 33.5624 47.2976 33.4247C47.5478 33.2869 47.7375 33.107 47.8668 32.8849C47.999 32.66 48.065 32.4196 48.065 32.1638V31.3288C48.0201 31.3738 47.9329 31.416 47.8036 31.4553C47.6771 31.4919 47.5323 31.5242 47.3692 31.5523C47.2062 31.5776 47.0473 31.6015 46.8927 31.624C46.7381 31.6437 46.6088 31.6606 46.5048 31.6746C46.2602 31.7056 46.0367 31.7576 45.8343 31.8307C45.6347 31.9037 45.4744 32.0092 45.3535 32.1469C45.2355 32.2819 45.1764 32.4618 45.1764 32.6867C45.1764 32.9988 45.2917 33.2349 45.5222 33.3952C45.7527 33.5526 46.0465 33.6313 46.4036 33.6313ZM52.2662 25.8636V34.5H51.0053V25.8636H52.2662ZM55.2234 25.8636V34.5H53.9625V25.8636H55.2234ZM59.7113 34.6307C59.0731 34.6307 58.5235 34.4944 58.0624 34.2217C57.6042 33.9462 57.25 33.5596 56.9998 33.062C56.7524 32.5616 56.6287 31.9754 56.6287 31.3035C56.6287 30.6401 56.7524 30.0553 56.9998 29.5493C57.25 29.0432 57.5986 28.6482 58.0456 28.3643C58.4954 28.0804 59.0211 27.9384 59.6227 27.9384C59.9882 27.9384 60.3424 27.9988 60.6854 28.1197C61.0284 28.2406 61.3362 28.4304 61.6089 28.689C61.8816 28.9477 62.0967 29.2836 62.2541 29.6969C62.4115 30.1073 62.4903 30.6063 62.4903 31.1939V31.6409H57.3413V30.6963H61.2547C61.2547 30.3646 61.1872 30.0708 61.0523 29.8149C60.9173 29.5563 60.7276 29.3525 60.483 29.2035C60.2412 29.0545 59.9573 28.98 59.6311 28.98C59.2769 28.98 58.9677 29.0671 58.7034 29.2414C58.442 29.4129 58.2395 29.6378 58.0962 29.9161C57.9556 30.1917 57.8853 30.4911 57.8853 30.8144V31.5523C57.8853 31.9853 57.9612 32.3536 58.113 32.6572C58.2677 32.9608 58.4827 33.1927 58.7582 33.353C59.0337 33.5104 59.3556 33.5891 59.7239 33.5891C59.9629 33.5891 60.1808 33.5554 60.3776 33.4879C60.5743 33.4176 60.7444 33.3136 60.8878 33.1759C61.0312 33.0381 61.1408 32.868 61.2167 32.6656L62.4101 32.8807C62.3145 33.2321 62.1431 33.5399 61.8957 33.8042C61.6511 34.0657 61.3432 34.2695 60.9721 34.4157C60.6039 34.559 60.1836 34.6307 59.7113 34.6307ZM65.1501 30.6541V34.5H63.8892V28.0227H65.0995V29.077H65.1796C65.3286 28.734 65.562 28.4585 65.8796 28.2504C66.2001 28.0424 66.6036 27.9384 67.0899 27.9384C67.5313 27.9384 67.9179 28.0312 68.2496 28.2167C68.5813 28.3994 68.8386 28.6721 69.0213 29.0348C69.204 29.3975 69.2954 29.8459 69.2954 30.38V34.5H68.0345V30.5318C68.0345 30.0623 67.9122 29.6955 67.6676 29.4312C67.4231 29.1641 67.0871 29.0306 66.6598 29.0306C66.3674 29.0306 66.1074 29.0938 65.8796 29.2203C65.6547 29.3469 65.4762 29.5324 65.3441 29.777C65.2148 30.0188 65.1501 30.3111 65.1501 30.6541ZM73.7021 37.0639C73.1877 37.0639 72.7449 36.9964 72.3738 36.8615C72.0055 36.7266 71.7047 36.548 71.4714 36.3259C71.238 36.1039 71.0637 35.8607 70.9485 35.5964L72.0322 35.1494C72.1081 35.2731 72.2093 35.4038 72.3358 35.5416C72.4652 35.6822 72.6395 35.8016 72.8587 35.9C73.0808 35.9984 73.3662 36.0476 73.7148 36.0476C74.1927 36.0476 74.5877 35.931 74.8998 35.6976C75.2118 35.4671 75.3678 35.0988 75.3678 34.5928V33.3192H75.2877C75.2118 33.457 75.1022 33.6102 74.9588 33.7789C74.8182 33.9476 74.6242 34.0938 74.3769 34.2175C74.1295 34.3412 73.8076 34.403 73.4112 34.403C72.8995 34.403 72.4385 34.2835 72.028 34.0446C71.6204 33.8028 71.2971 33.4472 71.0581 32.9777C70.8219 32.5054 70.7039 31.9248 70.7039 31.2361C70.7039 30.5473 70.8205 29.9569 71.0539 29.4649C71.29 28.973 71.6133 28.5962 72.0238 28.3348C72.4342 28.0705 72.8995 27.9384 73.4196 27.9384C73.8216 27.9384 74.1463 28.0059 74.3937 28.1408C74.6411 28.2729 74.8337 28.4276 74.9714 28.6047C75.112 28.7818 75.2202 28.9378 75.2962 29.0728H75.3889V28.0227H76.6245V34.6434C76.6245 35.2 76.4952 35.6569 76.2365 36.0139C75.9779 36.3709 75.6279 36.6352 75.1865 36.8067C74.7479 36.9782 74.2532 37.0639 73.7021 37.0639ZM73.6895 33.3572C74.0521 33.3572 74.3586 33.2729 74.6088 33.1042C74.8618 32.9327 75.053 32.6881 75.1823 32.3704C75.3144 32.0499 75.3805 31.6662 75.3805 31.2192C75.3805 30.7834 75.3158 30.3997 75.1865 30.068C75.0572 29.7362 74.8674 29.4776 74.6172 29.292C74.367 29.1037 74.0578 29.0095 73.6895 29.0095C73.31 29.0095 72.9937 29.1079 72.7407 29.3047C72.4876 29.4987 72.2965 29.7629 72.1672 30.0975C72.0406 30.432 71.9774 30.8059 71.9774 31.2192C71.9774 31.6437 72.0421 32.0162 72.1714 32.3367C72.3007 32.6572 72.4919 32.9074 72.7449 33.0873C73.0007 33.2672 73.3156 33.3572 73.6895 33.3572ZM81.1071 34.6307C80.469 34.6307 79.9194 34.4944 79.4583 34.2217C79.0001 33.9462 78.6458 33.5596 78.3956 33.062C78.1482 32.5616 78.0245 31.9754 78.0245 31.3035C78.0245 30.6401 78.1482 30.0553 78.3956 29.5493C78.6458 29.0432 78.9944 28.6482 79.4414 28.3643C79.8913 28.0804 80.417 27.9384 81.0186 27.9384C81.3841 27.9384 81.7383 27.9988 82.0813 28.1197C82.4242 28.2406 82.7321 28.4304 83.0048 28.689C83.2775 28.9477 83.4925 29.2836 83.65 29.6969C83.8074 30.1073 83.8861 30.6063 83.8861 31.1939V31.6409H78.7372V30.6963H82.6506C82.6506 30.3646 82.5831 30.0708 82.4481 29.8149C82.3132 29.5563 82.1234 29.3525 81.8789 29.2035C81.6371 29.0545 81.3531 28.98 81.027 28.98C80.6728 28.98 80.3636 29.0671 80.0993 29.2414C79.8378 29.4129 79.6354 29.6378 79.492 29.9161C79.3515 30.1917 79.2812 30.4911 79.2812 30.8144V31.5523C79.2812 31.9853 79.3571 32.3536 79.5089 32.6572C79.6635 32.9608 79.8786 33.1927 80.1541 33.353C80.4296 33.5104 80.7515 33.5891 81.1198 33.5891C81.3588 33.5891 81.5766 33.5554 81.7734 33.4879C81.9702 33.4176 82.1403 33.3136 82.2837 33.1759C82.4271 33.0381 82.5367 32.868 82.6126 32.6656L83.806 32.8807C83.7104 33.2321 83.5389 33.5399 83.2915 33.8042C83.047 34.0657 82.7391 34.2695 82.368 34.4157C81.9997 34.559 81.5794 34.6307 81.1071 34.6307Z"
        fill="white"
      />
      <defs>
        <clipPath id="clip0_65_12">
          <rect width="88" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;