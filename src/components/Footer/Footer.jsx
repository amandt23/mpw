import React, { useState } from 'react';
import './footer.css';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { BrowserRouter, Link } from 'react-router-dom';

const Footer = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="footer">
                <div className="fLeft">
                    <h3>DONT MISS OUT</h3>
                    <p>Sign up for the latest beauty news, product samples and coupons</p>
                    <div className="Btns">
                        <label htmlFor="">Email Address *</label>
                        <input placeholder='Enter you Email Address' type="text" />
                        <button className='subBtn'>SUBSCRIBE</button>
                        <div className="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="184" height="28" viewBox="0 0 184 28" fill="none">
                                <path d="M168.934 0.362305C160.951 0.362305 154.48 6.44981 154.48 13.9596C154.48 20.746 159.766 26.3712 166.676 27.391V17.8906H163.005V13.9596H166.676V10.9641C166.676 7.55663 168.832 5.67477 172.135 5.67477C173.716 5.67477 175.37 5.93992 175.37 5.93992V9.28485H173.549C171.752 9.28485 171.193 10.3332 171.193 11.4087V13.9596H175.201L174.56 17.8892H171.193V27.391C178.1 26.3712 183.386 20.746 183.386 13.9596C183.386 6.44981 176.916 0.362305 168.934 0.362305Z" fill="white" />
                                <path d="M16.6855 13.5551L13.3465 12.0894C13.0551 11.9621 12.8157 12.1048 12.8157 12.4083V15.1691C12.8157 15.4726 13.0551 15.6152 13.3465 15.4879L16.6841 14.0222C16.9769 13.8936 16.9769 13.6838 16.6855 13.5551ZM14.3024 0.362305C6.42003 0.362305 0.0302887 6.3734 0.0302887 13.7887C0.0302887 21.2039 6.42003 27.215 14.3024 27.215C22.1848 27.215 28.5745 21.2039 28.5745 13.7887C28.5745 6.3734 22.1848 0.362305 14.3024 0.362305ZM14.3024 19.2431C6.99686 19.2431 6.86901 18.6236 6.86901 13.7887C6.86901 8.95378 6.99686 8.3342 14.3024 8.3342C21.6079 8.3342 21.7358 8.95378 21.7358 13.7887C21.7358 18.6236 21.6079 19.2431 14.3024 19.2431Z" fill="white" />
                                <path d="M68.0715 1.14027C69.076 1.13664 70.0805 1.14614 71.0847 1.16875L71.3518 1.17782C71.6601 1.18818 71.9644 1.20113 72.3319 1.21667C73.7966 1.28142 74.7959 1.49898 75.6728 1.81884C76.5813 2.14776 77.3467 2.59323 78.1121 3.31324C78.8119 3.96022 79.3535 4.74283 79.6992 5.60665C80.0392 6.43156 80.2705 7.37301 80.3393 8.75087C80.3558 9.09533 80.3696 9.38282 80.3806 9.67289L80.3889 9.92412C80.4133 10.8684 80.4239 11.813 80.4205 12.7575L80.4219 13.7236V15.42C80.4253 16.365 80.4147 17.31 80.3902 18.2547L80.382 18.506C80.371 18.796 80.3572 19.0822 80.3407 19.428C80.2719 20.8058 80.0379 21.746 79.6992 22.5709C79.3546 23.4356 78.8129 24.2189 78.1121 24.8656C77.4237 25.5239 76.5914 26.0334 75.6728 26.3587C74.7959 26.6786 73.7966 26.8961 72.3319 26.9609C71.9644 26.9764 71.6601 26.9894 71.3518 26.9997L71.0847 27.0075C70.0805 27.0305 69.076 27.0405 68.0715 27.0373L67.0446 27.0386H65.2426C64.2381 27.0418 63.2336 27.0318 62.2294 27.0088L61.9623 27.001C61.6355 26.9899 61.3088 26.9769 60.9822 26.9622C59.5176 26.8974 58.5182 26.6773 57.6399 26.3587C56.7213 26.0341 55.8893 25.5245 55.2021 24.8656C54.5015 24.2185 53.9593 23.4354 53.6135 22.5709C53.2735 21.746 53.0422 20.8058 52.9734 19.428C52.9581 19.1207 52.9443 18.8134 52.9321 18.506L52.9252 18.2547C52.8999 17.31 52.8884 16.365 52.8908 15.42V12.7575C52.887 11.813 52.8971 10.8684 52.9211 9.92412L52.9307 9.67289C52.9418 9.38282 52.9555 9.09533 52.972 8.75087C53.0409 7.37171 53.2721 6.43285 53.6121 5.60665C53.9582 4.74241 54.5013 3.96001 55.2034 3.31454C55.8902 2.65507 56.7217 2.14462 57.6399 1.81884C58.5182 1.49898 59.5162 1.28142 60.9822 1.21667L61.9623 1.17782L62.2294 1.17134C63.2331 1.14748 64.2372 1.13669 65.2413 1.13897L68.0715 1.14027ZM66.6564 7.61517C65.7444 7.60303 64.839 7.76153 63.9927 8.08145C63.1464 8.40137 62.3762 8.87632 61.7267 9.47872C61.0773 10.0811 60.5615 10.7989 60.2095 11.5905C59.8575 12.382 59.6763 13.2314 59.6763 14.0894C59.6763 14.9474 59.8575 15.7969 60.2095 16.5884C60.5615 17.3799 61.0773 18.0977 61.7267 18.7001C62.3762 19.3025 63.1464 19.7775 63.9927 20.0974C64.839 20.4173 65.7444 20.5758 66.6564 20.5637C68.4818 20.5637 70.2325 19.8815 71.5232 18.6672C72.814 17.4529 73.5391 15.806 73.5391 14.0888C73.5391 12.3715 72.814 10.7246 71.5232 9.51033C70.2325 8.29605 68.4818 7.61517 66.6564 7.61517ZM66.6564 10.2051C67.2049 10.1956 67.75 10.289 68.2598 10.4799C68.7695 10.6708 69.2337 10.9554 69.6253 11.3169C70.0168 11.6785 70.3279 12.1098 70.5402 12.5857C70.7526 13.0617 70.862 13.5726 70.8621 14.0888C70.8622 14.6049 70.753 15.1159 70.5408 15.5919C70.3286 16.0679 70.0177 16.4993 69.6263 16.861C69.2348 17.2227 68.7707 17.5074 68.2611 17.6984C67.7514 17.8895 67.2063 17.9831 66.6577 17.9737C65.5625 17.9737 64.5121 17.5644 63.7376 16.8358C62.9632 16.1073 62.5281 15.1191 62.5281 14.0888C62.5281 13.0584 62.9632 12.0703 63.7376 11.3417C64.5121 10.6131 65.5625 10.2038 66.6577 10.2038L66.6564 10.2051ZM73.8833 5.6727C73.4392 5.68942 73.0192 5.86714 72.7113 6.16864C72.4034 6.47014 72.2314 6.87202 72.2314 7.29013C72.2314 7.70823 72.4034 8.11012 72.7113 8.41162C73.0192 8.71312 73.4392 8.89084 73.8833 8.90756C74.3396 8.90756 74.7773 8.73702 75.1 8.43345C75.4227 8.12988 75.604 7.71815 75.604 7.28883C75.604 6.85952 75.4227 6.44779 75.1 6.14422C74.7773 5.84065 74.3396 5.67011 73.8833 5.67011V5.6727Z" fill="white" />
                                <path d="M117.353 21.4692C112.923 21.4692 110.944 19.419 110.944 17.8805C110.944 17.088 111.562 16.5379 112.412 16.5379C114.31 16.5379 113.814 19.104 117.353 19.104C119.161 19.104 120.162 18.1768 120.162 17.2279C120.162 16.657 119.865 16.0261 118.671 15.7474L114.733 14.8202C111.561 14.0702 110.985 12.452 110.985 10.9343C110.985 7.77762 114.136 6.59245 117.096 6.59245C119.817 6.59245 123.035 8.01486 123.035 9.90656C123.035 10.7188 122.277 11.1912 121.435 11.1912C119.817 11.1912 120.115 9.08088 116.849 9.08088C115.231 9.08088 114.325 9.76878 114.325 10.7561C114.325 11.7434 115.595 12.0593 116.7 12.2966L119.604 12.9047C122.788 13.5771 123.595 15.3351 123.595 16.9906C123.595 19.5557 121.501 21.4702 117.294 21.4702M129.5 16.4125L129.468 16.5524L129.42 16.3038C129.436 16.3504 129.468 16.3804 129.485 16.4281C129.617 15.7288 129.684 15.016 129.684 14.3022C129.684 12.7595 129.361 11.2318 128.733 9.80682C128.104 8.38179 127.183 7.0874 126.022 5.99779C124.885 4.93103 123.541 4.07804 122.064 3.4845C120.612 2.83079 118.979 2.52103 117.297 2.52103C116.504 2.52103 115.707 2.59355 114.937 2.73237L115.068 2.79453L114.805 2.76034L114.936 2.73444C113.872 2.19798 112.683 1.91686 111.475 1.91602C109.505 1.91602 107.654 2.63913 106.26 3.9538C105.572 4.599 105.027 5.36595 104.656 6.21037C104.285 7.05479 104.095 7.95997 104.098 8.87369C104.098 10.0578 104.419 11.2202 105.027 12.2489L105.049 12.1205L105.094 12.3681L105.027 12.2489C104.613 14.4743 104.886 16.7648 105.812 18.8492C106.428 20.2513 107.337 21.5228 108.485 22.5881C109.619 23.6639 110.963 24.523 112.444 25.1179C113.979 25.7395 115.612 26.0482 117.294 26.0482C118.02 26.0482 118.763 25.9861 119.471 25.8628L119.34 25.7986L119.604 25.8462L119.456 25.8773C120.561 26.4697 121.811 26.7807 123.083 26.7796C124.052 26.7823 125.012 26.604 125.906 26.2548C126.801 25.9057 127.613 25.3929 128.295 24.746C128.983 24.1006 129.528 23.3336 129.898 22.4892C130.269 21.6448 130.459 20.7397 130.456 19.8261C130.452 18.6418 130.128 17.4778 129.517 16.4426" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="vertical-line1"></div>
                <div className="fRight">
                    <div className="RContents">
                        <div className="rSection">
                            <h3>Legal & Policies</h3>
                            <ul>
                                <li><Link to="/termsAndConditions">Terms and Conditions</Link></li>
                                <li><a href="#">Refund plicy</a></li>
                                <li><a href="#">Privacy policy</a></li>
                                <li><a href="#">Cookies policy</a></li>
                                <li><a href="#">Academic integrity</a></li>
                                
                            </ul>
                        </div>
                        <div class="vertical-line2"></div>
                        <div className="rSection">
                            <h3>Popular services</h3>
                            <ul>
                                <li><a href="#">Dissertation writing</a></li>
                                <li><a href="#">Research paper writing</a></li>
                                <li><a href="#">Term paper writing</a></li>
                                <li><a href="#">College essay writing</a></li>
                                <li><a href="#">Thesis writing service</a></li>
                            </ul>
                        </div>
                        <div className="rDropdown">
                            <div className="dropdown">
                                <button onClick={toggleDropdown}>
                                    {selectedOption ? selectedOption : 'Homework Services'}
                                    <IoIosArrowDropdownCircle style={{ color: '#01593A' }} />
                                </button>
                                {isOpen && (
                                    <div className="dropdown-content">
                                        <a href="#" onClick={() => handleOptionSelect('Item 1')}>Item 1</a>
                                        <a href="#" onClick={() => handleOptionSelect('Item 2')}>Item 2</a>
                                        <a href="#" onClick={() => handleOptionSelect('Item 3')}>Item 3</a>
                                    </div>
                                )}
                            </div>
                            <div className="dropdown">
                                <button onClick={toggleDropdown}>
                                    {selectedOption ? selectedOption : 'Homework Services'}
                                    <IoIosArrowDropdownCircle style={{ color: '#01593A' }} />

                                </button>
                                {isOpen && (
                                    <div className="dropdown-content">
                                        <a href="#" onClick={() => handleOptionSelect('Item 1')}>Item 1</a>
                                        <a href="#" onClick={() => handleOptionSelect('Item 2')}>Item 2</a>
                                        <a href="#" onClick={() => handleOptionSelect('Item 3')}>Item 3</a>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                    <div className="BottomLogo">
                        <img src="images/logo.png" alt="" />
                        <hr />
                    </div>

                </div>
            </div>
            <div className="footerBottomPay">
                <p>* the money back guarantee operates according to our policy</p>
                <div className="payIcons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="37" viewBox="0 0 54 37" fill="none">
                        <path d="M9.94649 36.223V33.8564C9.94649 32.949 9.30496 32.3575 8.20536 32.3575C7.65566 32.3575 7.06005 32.5153 6.64767 33.0281C6.32711 32.5942 5.86903 32.3575 5.18181 32.3575C4.72351 32.3575 4.26564 32.4758 3.89897 32.9097V32.4364H2.93689V36.223H3.89897V34.1324C3.89897 33.462 4.31134 33.1463 4.95287 33.1463C5.59397 33.1463 5.91495 33.5014 5.91495 34.1324V36.223H6.87702V34.1324C6.87702 33.462 7.3349 33.1463 7.93051 33.1463C8.57203 33.1463 8.89258 33.5014 8.89258 34.1324V36.223H9.94649ZM24.1942 32.4364H22.6367V31.2926H21.6746V32.4364H20.8042V33.1857H21.6744V34.9214C21.6744 35.7893 22.0868 36.3019 23.1864 36.3019C23.5988 36.3019 24.0567 36.1837 24.3776 36.0259L24.1026 35.3158C23.8277 35.4736 23.5072 35.5131 23.278 35.5131C22.8199 35.5131 22.6367 35.2765 22.6367 34.8819V33.1857H24.1942V32.4364ZM32.3491 32.3573C31.7994 32.3573 31.4329 32.5942 31.2038 32.9097V32.4364H30.2417V36.223H31.2038V34.0931C31.2038 33.462 31.5243 33.107 32.12 33.107C32.3032 33.107 32.5323 33.1465 32.7156 33.1859L32.9904 32.3971C32.8072 32.3575 32.5323 32.3575 32.3491 32.3575V32.3573ZM20.0253 32.7519C19.567 32.4758 18.9257 32.3575 18.2385 32.3575C17.1391 32.3575 16.4062 32.8308 16.4062 33.5803C16.4062 34.2115 16.9559 34.5664 17.9179 34.6848L18.376 34.7243C18.88 34.803 19.1549 34.9214 19.1549 35.1187C19.1549 35.3947 18.7884 35.592 18.1469 35.592C17.5056 35.592 17.0016 35.3947 16.6808 35.1976L16.2227 35.8286C16.7267 36.1441 17.414 36.3019 18.101 36.3019C19.3838 36.3019 20.117 35.7893 20.117 35.0792C20.117 34.4086 19.5213 34.0535 18.605 33.9353L18.1469 33.8958C17.7345 33.8563 17.414 33.7776 17.414 33.5409C17.414 33.2647 17.7345 33.107 18.2385 33.107C18.7884 33.107 19.3381 33.3041 19.613 33.4225L20.0253 32.7519ZM45.5892 32.3575C45.0393 32.3575 44.6729 32.5942 44.4437 32.9097V32.4364H43.4816V36.223H44.4437V34.0931C44.4437 33.462 44.7645 33.107 45.3599 33.107C45.5433 33.107 45.7725 33.1465 45.9557 33.1859L46.2306 32.3971C46.0473 32.3575 45.7725 32.3575 45.5892 32.3575ZM33.3112 34.3297C33.3112 35.4736 34.2273 36.3019 35.6477 36.3019C36.289 36.3019 36.7471 36.1837 37.2052 35.8682L36.7471 35.1976C36.3806 35.4342 36.0142 35.5525 35.6018 35.5525C34.823 35.5525 34.2733 35.0792 34.2733 34.3297C34.2733 33.6198 34.823 33.1463 35.6018 33.107C36.0142 33.107 36.3806 33.2252 36.7471 33.462L37.2052 32.7915C36.7471 32.4758 36.289 32.3575 35.6477 32.3575C34.2273 32.3575 33.3112 33.1859 33.3112 34.3297ZM42.199 34.3297V32.4364H41.2369V32.9097C40.9162 32.5548 40.4581 32.3575 39.8625 32.3575C38.6256 32.3575 37.6635 33.1859 37.6635 34.3297C37.6635 35.4736 38.6256 36.3019 39.8625 36.3019C40.5038 36.3019 40.9621 36.1048 41.2369 35.7497V36.223H42.199V34.3297ZM38.6713 34.3297C38.6713 33.6591 39.1753 33.107 39.9998 33.107C40.7786 33.107 41.3286 33.6198 41.3286 34.3297C41.3286 35.0003 40.7786 35.5525 39.9998 35.5525C39.1753 35.5129 38.6713 35.0003 38.6713 34.3297ZM27.1723 32.3575C25.8894 32.3575 24.973 33.1463 24.973 34.3297C24.973 35.5131 25.8892 36.3019 27.218 36.3019C27.8593 36.3019 28.5008 36.1441 29.0048 35.7893L28.5465 35.1976C28.18 35.4342 27.722 35.592 27.2639 35.592C26.6683 35.592 26.0726 35.3553 25.9351 34.6846H29.188V34.3692C29.2339 33.1463 28.4094 32.3575 27.1723 32.3575ZM27.1723 33.0675C27.7677 33.0675 28.1802 33.3832 28.2716 33.9748H25.981C26.0726 33.462 26.485 33.0675 27.1723 33.0675ZM51.0409 34.3297V30.9375H50.0789V32.9097C49.7581 32.5548 49.3 32.3575 48.7044 32.3575C47.4675 32.3575 46.5054 33.1859 46.5054 34.3297C46.5054 35.4736 47.4675 36.3019 48.7044 36.3019C49.3459 36.3019 49.804 36.1048 50.0789 35.7497V36.223H51.0409V34.3297ZM47.5134 34.3297C47.5134 33.6591 48.0172 33.107 48.8419 33.107C49.6208 33.107 50.1705 33.6198 50.1705 34.3297C50.1705 35.0003 49.6208 35.5525 48.8419 35.5525C48.0172 35.5129 47.5134 35.0003 47.5134 34.3297ZM15.3523 34.3297V32.4364H14.3902V32.9097C14.0694 32.5548 13.6114 32.3575 13.0157 32.3575C11.7788 32.3575 10.8167 33.1859 10.8167 34.3297C10.8167 35.4736 11.7788 36.3019 13.0157 36.3019C13.6573 36.3019 14.1153 36.1048 14.3902 35.7497V36.223H15.3523V34.3297ZM11.7788 34.3297C11.7788 33.6591 12.2828 33.107 13.1074 33.107C13.8862 33.107 14.4361 33.6198 14.4361 34.3297C14.4361 35.0003 13.8862 35.5525 13.1074 35.5525C12.2828 35.5129 11.7788 35.0003 11.7788 34.3297Z" fill="black" />
                        <path d="M19.7048 3.68164H34.1359V26.0073H19.7048V3.68164Z" fill="#FF5F00" />
                        <path d="M20.621 14.8446C20.621 10.3085 23.0949 6.28511 26.8973 3.6817C24.1028 1.78839 20.5753 0.644531 16.727 0.644531C7.6098 0.644531 0.233948 6.99503 0.233948 14.8446C0.233948 22.694 7.6098 29.0447 16.7268 29.0447C20.5751 29.0447 24.1026 27.9009 26.8973 26.0074C23.0949 23.4435 20.621 19.3807 20.621 14.8446Z" fill="#EB001B" />
                        <path d="M53.6067 14.8446C53.6067 22.694 46.2308 29.0447 37.1138 29.0447C33.2655 29.0447 29.738 27.9009 26.9434 26.0074C30.7917 23.4041 33.2198 19.3807 33.2198 14.8446C33.2198 10.3085 30.7458 6.28511 26.9434 3.6817C29.7378 1.78839 33.2655 0.644531 37.1138 0.644531C46.2308 0.644531 53.6067 7.03456 53.6067 14.8446Z" fill="#F79E1B" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="35" viewBox="0 0 50 35" fill="none">
                        <path d="M40.6823 15.4916C40.6823 15.4916 41.335 18.2871 41.481 18.8733H38.6125C38.8959 18.2044 39.9866 15.6043 39.9866 15.6043C39.9694 15.6269 40.27 14.9205 40.4418 14.4846L40.6823 15.4916ZM49.7772 4.12174V30.5738C49.7772 32.5652 47.9307 34.1809 45.6548 34.1809H4.43142C2.15555 34.1809 0.309082 32.5652 0.309082 30.5738V4.12174C0.309082 2.13033 2.15555 0.514648 4.43142 0.514648H45.6548C47.9307 0.514648 49.7772 2.13033 49.7772 4.12174ZM13.4061 22.9989L18.8339 11.3359H15.1839L11.8087 19.3016L11.4394 17.6859L10.2371 12.3204C10.0395 11.5764 9.42976 11.366 8.674 11.3359H3.11743L3.05731 11.5689C4.41425 11.8695 5.62518 12.3053 6.68153 12.8539L9.75611 22.9989H13.4061ZM21.5134 23.0139L23.6776 11.3359H20.2251L18.0695 23.0139H21.5134ZM33.5283 19.1964C33.5455 17.8663 32.6179 16.8518 30.6341 16.0176C29.4231 15.4841 28.6845 15.1234 28.6845 14.5748C28.7017 14.0788 29.3115 13.5678 30.6684 13.5678C31.7935 13.5453 32.6179 13.7782 33.2363 14.0112L33.5455 14.1389L34.0178 11.614C33.3393 11.381 32.2572 11.118 30.9261 11.118C27.5165 11.118 25.1204 12.7111 25.1032 14.9806C25.0775 16.6564 26.8209 17.5882 28.1263 18.1518C29.4575 18.723 29.9126 19.0987 29.9126 19.6022C29.8955 20.3837 28.8305 20.7444 27.8429 20.7444C26.4688 20.7444 25.7302 20.5566 24.6051 20.1207L24.15 19.9328L23.669 22.5555C24.4763 22.8786 25.9707 23.1642 27.5165 23.1792C31.1408 23.1867 33.5025 21.6162 33.5283 19.1964ZM45.6548 23.0139L42.8722 11.3359H40.2013C39.3768 11.3359 38.7499 11.5463 38.3978 12.3053L33.2706 23.0139H36.8949C36.8949 23.0139 37.4874 21.5711 37.6163 21.263H42.0478C42.1508 21.6763 42.46 23.0139 42.46 23.0139H45.6548Z" fill="black" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="122" height="19" viewBox="0 0 122 19" fill="none">
                        <path d="M64.6586 0.430664C58.9572 0.430664 54.3314 4.35678 54.3314 9.20223C54.3314 14.3541 58.7564 18.2049 64.6586 18.2049C70.4136 18.2049 74.9577 14.3029 74.9577 9.30345C74.9577 4.33352 70.444 0.430664 64.6586 0.430664Z" fill="url(#paint0_linear_118_11360)" />
                        <g filter="url(#filter0_i_118_11360)">
                            <path d="M64.6586 0.430664C58.9572 0.430664 54.3314 4.35678 54.3314 9.20223C54.3314 14.3541 58.7564 18.2049 64.6586 18.2049C70.4136 18.2049 74.9577 14.3029 74.9577 9.30345C74.9577 4.33352 70.444 0.430664 64.6586 0.430664Z" fill="black" />
                        </g>
                        <path d="M6.03104 0.750197H0.479248V17.8197H6.00203C8.93234 17.8197 11.0515 17.2078 12.9106 15.8503C15.1163 14.2377 16.4243 11.8062 16.4243 9.29313C16.4243 4.25363 12.1534 0.750197 6.03104 0.750197ZM10.4462 13.5705C9.25256 14.5198 7.71562 14.9301 5.27314 14.9301H4.2585V3.64066H5.27314C7.71562 3.64066 9.19361 4.025 10.4462 5.02208C11.7526 6.046 12.5316 7.63153 12.5316 9.26882C12.5316 10.9097 11.7526 12.5505 10.4462 13.5705ZM18.1678 17.8197H21.9411V0.750197H18.1683V17.8197H18.1678ZM31.1785 7.29791C28.9107 6.55732 28.2434 6.06884 28.2434 5.15075C28.2434 4.07487 29.4316 3.25654 31.0603 3.25654C32.1927 3.25654 33.1217 3.66581 34.1119 4.63545L36.0839 2.36109C34.4578 1.10435 32.5129 0.465404 30.3911 0.465404C26.9682 0.465404 24.3529 2.5652 24.3529 5.35235C24.3529 7.70907 25.5715 8.9109 29.1152 10.04C30.5968 10.4983 31.3499 10.8041 31.7284 11.013C32.4832 11.4483 32.8623 12.0604 32.8623 12.7764C32.8623 14.1608 31.6126 15.183 29.9261 15.183C28.1255 15.183 26.6753 14.3905 25.8038 12.9062L23.3675 14.9816C25.1063 17.2309 27.1974 18.2323 30.0749 18.2323C33.9947 18.2323 36.7514 15.9257 36.7514 12.6249C36.7514 9.91134 35.4772 8.68185 31.1785 7.29791ZM37.9415 9.29334C37.9415 14.3155 42.4147 18.2049 48.1655 18.2049C49.7913 18.2049 51.1849 17.9216 52.9 17.2076V13.2894C51.388 14.6218 50.0519 15.1579 48.3378 15.1579C44.5351 15.1579 41.8327 12.7257 41.8327 9.26882C41.8327 5.99423 44.6195 3.40868 48.1655 3.40868C49.963 3.40868 51.33 3.97135 52.9 5.32783V1.4101C51.2449 0.670354 49.8779 0.365234 48.2518 0.365234C42.5303 0.365234 37.9415 4.33326 37.9415 9.29334ZM83.5036 12.2163L78.3346 0.750197H74.2109L82.4317 18.2558H84.4626L92.8268 0.749987H88.7338L83.5036 12.2163ZM94.544 17.8199H105.257V14.9301H98.3182V10.3196H104.992V7.4293H98.3182V3.64045H105.257V0.750406H94.5437V17.8199H94.544ZM120.208 5.78782C120.208 2.59014 117.714 0.750197 113.356 0.750197H107.751V17.8197H111.53V10.9593H112.024L117.248 17.8197H121.895L115.793 10.6297C118.643 10.1159 120.208 8.4002 120.208 5.78782ZM112.629 8.60682H111.53V3.43445H112.689C115.046 3.43445 116.323 4.30727 116.323 5.96846C116.323 7.68203 115.046 8.60682 112.629 8.60682Z" fill="#0B1015" />
                        <defs>
                            <filter id="filter0_i_118_11360" x="54.3314" y="0.430664" width="23.6262" height="20.7744" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="3" dy="3" />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_118_11360" />
                            </filter>
                            <linearGradient id="paint0_linear_118_11360" x1="454.769" y1="161.519" x2="1665.31" y2="1611.96" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#F34F26" />
                                <stop offset="1" stop-color="#F69E35" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className="footer2">
                <ul>
                    <h3>Others: </h3>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Why Us</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Become an Expert</a></li>
                </ul>

            </div>
        </>
    )
}

export default Footer