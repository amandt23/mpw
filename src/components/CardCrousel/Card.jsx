import React from 'react'
import './card.css'
import { CiStar } from "react-icons/ci";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { faStar } from '@fortawesome/free-solid-svg-icons';

const Card = ({ lecturer }) => {

    // let gradientColor;
    // let thumbColor;

    // if (lecturer.english > 80) {
    //     gradientColor = '#12D83F';
    //     thumbColor = '#AAFEBB';
    // } else if (lecturer.english <= 80 && lecturer.english >= 50) {
    //     gradientColor = '#EBC807';
    //     thumbColor = '#EFDD7D';

    // } else {
    //     gradientColor = '#F50E0A';
    //     thumbColor = '#FF9290'
    // }
    // const gradientStyle = {
    //     background: `linear-gradient(90deg, ${gradientColor} ${lecturer.english}%, #e0e0e0 0%)`,
    // };
    // const thumbStyle = {
    //     background: thumbColor,
    // };

    return (
        <div className='card'>
            <div className="top">
                <div className="left">
                    <img src={`./images/${lecturer.image}`} alt="" />
                </div>
                <div className="right">
                    <div className="right-top">
                        <h2>{lecturer.name}</h2>
                        <p>{lecturer.university}</p>
                    </div>
                    <div className="right-stars">
                        <svg xmlns="http://www.w3.org/2000/svg" width="63" height="11" viewBox="0 0 63 11" fill="none">
                            <path d="M2.09811 10.6436L3.00053 6.9453L0 4.45887L3.95243 4.13171L5.50036 0.643616L7.0483 4.13102L11 4.45818L8.0002 6.9446L8.90261 10.6429L5.50036 8.67995L2.09811 10.6436Z" fill="#00A22D" />
                            <path d="M15.0981 10.6436L16.0005 6.9453L13 4.45887L16.9524 4.13171L18.5004 0.643616L20.0483 4.13102L24 4.45818L21.0002 6.9446L21.9026 10.6429L18.5004 8.67995L15.0981 10.6436Z" fill="#00A22D" />
                            <path d="M28.0981 10.6436L29.0005 6.9453L26 4.45887L29.9524 4.13171L31.5004 0.643616L33.0483 4.13102L37 4.45818L34.0002 6.9446L34.9026 10.6429L31.5004 8.67995L28.0981 10.6436Z" fill="#00A22D" />
                            <path d="M41.8611 9.62594L42.4863 7.06383L42.5604 6.75991L42.3196 6.56031L40.2629 4.85605L42.9937 4.63001L43.2892 4.60555L43.4095 4.33453L44.5004 1.87617L45.5913 4.33386L45.7116 4.60485L46.007 4.62931L48.7373 4.85535L46.6811 6.55965L46.4403 6.75926L46.5145 7.06313L47.1397 9.62548L44.7502 8.24687L44.5003 8.10267L44.2504 8.2469L41.8611 9.62594Z" fill="black" fill-opacity="0.01" stroke="black" />
                            <path d="M54.8611 9.62594L55.4863 7.06383L55.5604 6.75991L55.3196 6.56031L53.2629 4.85605L55.9937 4.63001L56.2892 4.60555L56.4095 4.33453L57.5004 1.87617L58.5913 4.33386L58.7116 4.60485L59.007 4.62931L61.7373 4.85535L59.6811 6.55965L59.4403 6.75926L59.5145 7.06313L60.1397 9.62548L57.7502 8.24687L57.5003 8.10267L57.2504 8.2469L54.8611 9.62594Z" fill="black" fill-opacity="0.01" stroke="black" />
                        </svg>
                        {/* <FontAwesomeIcon icon={faStar} /> */}
                        {/* <CiStar /> */}
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="mid-section">
                <div className="mid-contents">
                    <div className="content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <g clip-path="url(#clip0_581_709)">
                                <path d="M10.0419 12.9727C7.92457 11.4097 4.40606 8.7454 0.0296478 8.16416L1.90036 6.33455C7.27009 8.40814 10.0419 12.9727 10.0419 12.9727ZM0.253079 10.0454L1.71276 8.87714C5.97271 9.92474 9.58556 12.9769 9.58556 12.9769C8.06422 12.1179 3.74841 10.0048 0.253079 10.0454ZM1.59314 5.80759L6.46753 1.4707L7.51723 2.07829L5.15381 4.76157C7.69904 6.86046 10.5235 9.09319 10.2706 12.7329C7.76438 9.18225 4.80918 6.64282 1.59314 5.80759ZM5.75982 4.68464L9.50388 0.329834C11.5016 1.96341 12.6182 4.49967 12.6182 5.86977C12.4554 7.62034 10.7433 11.8508 10.5852 12.3177C10.4666 11.2601 11.3409 9.38776 5.75982 4.68464Z" fill="#238E05" />
                            </g>
                            <defs>
                                <clipPath id="clip0_581_709">
                                    <rect width="12.6471" height="12.6471" fill="white" transform="translate(0 0.329895)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>{lecturer.role}</p>
                    </div>
                    <div className="content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.51075 2.14828C6.38285 2.11138 6.24712 2.11138 6.11922 2.14828C5.84573 2.22628 5.57013 2.29794 5.29295 2.37014C4.05828 2.69264 2.69819 3.04833 1.53519 3.99686L0.987152 4.44478C0.549774 4.80153 0.549774 5.50028 0.987152 5.85703L1.52676 6.29652C1.9082 6.60563 2.32431 6.8693 2.7667 7.08222V9.52152C2.76671 9.81329 2.8548 10.0983 3.01943 10.3391C3.18406 10.58 3.41757 10.7656 3.68941 10.8716L5.79725 11.6937C6.13579 11.8257 6.51157 11.8257 6.85012 11.6937L8.95796 10.8716C9.2298 10.7656 9.46331 10.58 9.62794 10.3391C9.79257 10.0983 9.88066 9.81329 9.88067 9.52152V7.08696C10.3201 6.87489 10.7334 6.61246 11.1122 6.30495L11.1981 6.23487V8.83963C11.1981 8.94445 11.2397 9.04498 11.3138 9.1191C11.3879 9.19321 11.4885 9.23485 11.5933 9.23485C11.6981 9.23485 11.7986 9.19321 11.8728 9.1191C11.9469 9.04498 11.9885 8.94445 11.9885 8.83963V5.15091C11.9885 4.88743 11.8789 4.62289 11.6602 4.44478L11.1206 4.00529C9.94865 3.0515 8.53165 2.68157 7.33492 2.36961C7.05879 2.29741 6.78372 2.22575 6.51075 2.14828ZM4.37393 7.15968C4.32632 7.13899 4.2751 7.12788 4.22319 7.12698C4.17129 7.12609 4.11972 7.13542 4.07142 7.15446C4.02312 7.17349 3.97905 7.20185 3.94171 7.23792C3.90438 7.27399 3.87451 7.31706 3.85382 7.36467C3.83313 7.41228 3.82202 7.4635 3.82112 7.5154C3.82022 7.56731 3.82956 7.61888 3.84859 7.66718C3.86763 7.71548 3.89599 7.75955 3.93206 7.79689C3.96813 7.83422 4.0112 7.86409 4.05881 7.88478C4.73226 8.17724 5.4289 8.41701 6.14346 8.60039C6.26783 8.63201 6.39851 8.63201 6.52288 8.60039C7.23378 8.41738 7.92894 8.1779 8.60174 7.88425C8.69456 7.84027 8.76662 7.76188 8.80264 7.66569C8.83866 7.5695 8.83582 7.46306 8.79471 7.36893C8.75361 7.27479 8.67747 7.20036 8.58243 7.1614C8.48739 7.12244 8.38091 7.12201 8.28556 7.16021C7.65479 7.43528 7.00241 7.66082 6.33317 7.83314C5.66331 7.66079 5.00818 7.4356 4.37393 7.15968Z" fill="#238E05" />
                        </svg>
                        <p>{lecturer.education}</p>
                    </div>
                    <div className="content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                            <path d="M11.0662 5.75634H10.0123V2.59457H10.5392V1.54065H2.10785V2.59457H2.63481V5.75634H1.58089C1.44113 5.75634 1.30709 5.81185 1.20827 5.91068C1.10944 6.0095 1.05392 6.14354 1.05392 6.2833V11.0259H11.5931V6.2833C11.5931 6.14354 11.5376 6.0095 11.4388 5.91068C11.34 5.81185 11.2059 5.75634 11.0662 5.75634ZM7.37745 9.97202V7.86418H5.26961V9.97202H3.68873V2.59457H8.95834V9.97202H7.37745Z" fill="#238E05" />
                            <path d="M4.74265 3.6485H5.79657V4.70242H4.74265V3.6485ZM6.85049 3.6485H7.90441V4.70242H6.85049V3.6485ZM4.74265 5.75634H5.79657V6.81026H4.74265V5.75634ZM6.85049 5.75634H7.90441V6.81026H6.85049V5.75634Z" fill="#238E05" />
                        </svg>
                        <p>{lecturer.university}</p>
                    </div>
                </div>
                <div className="orders">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                        <path d="M12.4404 28.3624H4.00293V4.92487H23.6904V18.9874M17.1279 25.5499L19.9404 28.3624L25.5654 23.6749M9.62793 16.1749H18.0654M9.62793 21.7999H12.4404M9.62793 10.5499H18.0654" stroke="black" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div className="orders-values">
                        <h3>{lecturer.totalOrders}</h3>
                        <p>Total Orders</p>
                    </div>
                </div>
            </div>

            <hr className='hr-bott'></hr>

            <div className="bottom-section">
                <div className="slider">
                    <label>English -{lecturer.english}%</label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={lecturer.english}
                        style={{ background: `linear-gradient(90deg, #12D83F ${lecturer.english}% ,#e0e0e0 0%)` }}
                        // style={gradientStyle}
                        // style={{background: `linear-gradient(90deg, ${gradientColor} ${lecturer.english}%, #e0e0e0 0%)`,}}
                        className="range range1"
                    />
                    {/* <style>
                        {`.range1::-webkit-slider-thumb {
                      background: ${thumbStyle.background};}`}
                    </style> */}
                </div>
                <div className="slider">
                    <label>Poetry -{lecturer.poetry}%</label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={lecturer.poetry}
                        style={{ background: `linear-gradient(90deg, #F50E0A ${lecturer.poetry}% ,#e0e0e0 0%)` }}
                        className="range range2"
                    />

                </div>
                <div className="slider">
                    <label>Classics -{lecturer.classics}%</label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={lecturer.classics}
                        style={{ background: `linear-gradient(90deg, #EBC807 ${lecturer.classics}% ,#e0e0e0 0%)` }}
                        className="range range3"
                    />
                </div>
            </div>
        </div>
    )
}

export default Card