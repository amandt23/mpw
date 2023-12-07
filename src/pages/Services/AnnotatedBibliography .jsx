import React, { useState } from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
// review
import { MdPrivacyTip } from "react-icons/md";
import { FaEye } from "react-icons/fa";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '../../components/CardCrousel/Card';
import lecturersData from '../../data.json';
import Social from '../../components/Social/Social'
import PlaceOrder from '../../components/PlaceOrder/PlaceOrder'


const AnnotatedBibliography = () => {


    // cards data 
    const PriceCardData = [
        {
            'id': 1,
            'icon1': <svg xmlns="http://www.w3.org/2000/svg" width="33" height="26" viewBox="0 0 33 26" fill="none">< path d="M10.1831 20.7295H13.3831V19.167H14.9831C15.4365 19.167 15.8167 19.017 16.1239 18.717C16.4311 18.417 16.5842 18.0462 16.5831 17.6045V12.917C16.5831 12.4743 16.4295 12.1029 16.1223 11.8029C15.8151 11.5029 15.4354 11.3535 14.9831 11.3545H10.1831V9.79199H16.5831V6.66699H13.3831V5.10449H10.1831V6.66699H8.58313C8.1298 6.66699 7.74953 6.81699 7.44233 7.11699C7.13513 7.41699 6.98206 7.78783 6.98313 8.22949V12.917C6.98313 13.3597 7.13673 13.7311 7.44393 14.0311C7.75113 14.3311 8.13086 14.4805 8.58313 14.4795H13.3831V16.042H6.98313V19.167H10.1831V20.7295ZM22.9831 19.5576L26.1831 16.4326H19.7831L22.9831 19.5576ZM19.7831 9.79199H26.1831L22.9831 6.66699L19.7831 9.79199ZM3.78313 25.417C2.90313 25.417 2.14953 25.1107 1.52233 24.4982C0.895132 23.8857 0.582066 23.1503 0.583133 22.292V3.54199C0.583133 2.68262 0.896733 1.94668 1.52393 1.33418C2.15113 0.721682 2.9042 0.415953 3.78313 0.416995H29.3831C30.2631 0.416995 31.0167 0.723244 31.6439 1.33574C32.2711 1.94824 32.5842 2.68366 32.5831 3.54199V22.292C32.5831 23.1514 32.2695 23.8873 31.6423 24.4998C31.0151 25.1123 30.2621 25.418 29.3831 25.417H3.78313Z" fill="#01593A" /></svg >,
            'title': 'Transparent Fixed Pricing',
            'desc': 'Fixed rate of £6.99 per page, offering clear and predictable costs.',
            'icon2': <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <path d="M17.2787 27.2421L15.8592 25.8226L24.2748 17.4069L15.8592 8.99129L17.2787 7.57178L27.1139 17.4069L17.2787 27.2421Z" fill="#01593A" />
                <path d="M8.45726 16.3926H25.6941V18.4204H8.45726V16.3926Z" fill="#01593A" />
                <path d="M17.5831 34.6434C8.05214 34.6434 0.346237 26.9375 0.346237 17.4066C0.346237 7.87558 8.05214 0.169678 17.5831 0.169678C27.1141 0.169678 34.82 7.87558 34.82 17.4066C34.82 26.9375 27.1141 34.6434 17.5831 34.6434ZM17.5831 2.19755C9.16747 2.19755 2.37411 8.99091 2.37411 17.4066C2.37411 25.8222 9.16747 32.6156 17.5831 32.6156C25.9988 32.6156 32.7921 25.8222 32.7921 17.4066C32.7921 8.99091 25.9988 2.19755 17.5831 2.19755Z" fill="#01593A" />
            </svg>
        },
        {
            'id': 2,
            'icon1': <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                <g clip-path="url(#clip0_94_4074)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M-0.000175476 3.56382C-0.000175476 2.79469 0.305359 2.05706 0.849215 1.51321C1.39307 0.969353 2.1307 0.663818 2.89982 0.663818L26.0998 0.663818C26.8689 0.663818 27.6066 0.969353 28.1504 1.51321C28.6943 2.05706 28.9998 2.79469 28.9998 3.56382V11.2971L27.4532 10.1352C25.7778 8.87868 23.7054 8.26865 21.6164 8.4171C19.5275 8.56556 17.5622 9.46255 16.0813 10.9434C14.6005 12.4242 13.7035 14.3895 13.555 16.4785C13.4066 18.5674 14.0166 20.6398 15.2732 22.3152L15.4665 22.5743V29.6638H2.89982C2.1307 29.6638 1.39307 29.3583 0.849215 28.8144C0.305359 28.2706 -0.000175476 27.5329 -0.000175476 26.7638L-0.000175476 3.56382ZM15.4665 10.3305H5.79982V8.39715H15.4665V10.3305ZM5.79982 16.1305H11.5998V14.1971H5.79982V16.1305Z" fill="#01593A" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2333 10.3303C20.9006 10.3301 19.5976 10.7234 18.4876 11.4609C17.3777 12.1984 16.5102 13.2472 15.9939 14.4758C15.4777 15.7044 15.3358 17.0581 15.5859 18.367C15.836 19.676 16.4671 20.882 17.3999 21.8337V28.697C17.3999 28.8765 17.4499 29.0525 17.5443 29.2052C17.6387 29.3579 17.7737 29.4813 17.9343 29.5616C18.0949 29.6419 18.2746 29.6759 18.4534 29.6598C18.6322 29.6436 18.803 29.578 18.9466 29.4703L22.2333 27.0053L25.5199 29.4703C25.6636 29.578 25.8343 29.6436 26.0131 29.6598C26.1919 29.6759 26.3717 29.6419 26.5322 29.5616C26.6928 29.4813 26.8279 29.3579 26.9222 29.2052C27.0166 29.0525 27.0666 28.8765 27.0666 28.697V21.8337C27.9995 20.882 28.6305 19.676 28.8806 18.367C29.1308 17.0581 28.9888 15.7044 28.4726 14.4758C27.9564 13.2472 27.0889 12.1984 25.9789 11.4609C24.8689 10.7234 23.5659 10.3301 22.2333 10.3303ZM19.3333 26.7637V23.2121C20.2129 23.6297 21.1951 23.8637 22.2333 23.8637C23.2715 23.8637 24.2536 23.6317 25.1333 23.2121V26.7637L22.8133 25.0237C22.6459 24.8982 22.4424 24.8303 22.2333 24.8303C22.0241 24.8303 21.8206 24.8982 21.6533 25.0237L19.3333 26.7637Z" fill="#01593A" />
                </g>
                <defs>
                    <clipPath id="clip0_94_4074">
                        <rect width="29" height="29" fill="white" transform="translate(-0.000175476 0.663818)" />
                    </clipPath>
                </defs>
            </svg>,
            'title': 'Guaranteed Originality',
            'desc': 'All content is original, free from plagiarism and AI-generated material.',
            'icon2': <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <path d="M17.2787 27.2421L15.8592 25.8226L24.2748 17.4069L15.8592 8.99129L17.2787 7.57178L27.1139 17.4069L17.2787 27.2421Z" fill="#01593A" />
                <path d="M8.45726 16.3926H25.6941V18.4204H8.45726V16.3926Z" fill="#01593A" />
                <path d="M17.5831 34.6434C8.05214 34.6434 0.346237 26.9375 0.346237 17.4066C0.346237 7.87558 8.05214 0.169678 17.5831 0.169678C27.1141 0.169678 34.82 7.87558 34.82 17.4066C34.82 26.9375 27.1141 34.6434 17.5831 34.6434ZM17.5831 2.19755C9.16747 2.19755 2.37411 8.99091 2.37411 17.4066C2.37411 25.8222 9.16747 32.6156 17.5831 32.6156C25.9988 32.6156 32.7921 25.8222 32.7921 17.4066C32.7921 8.99091 25.9988 2.19755 17.5831 2.19755Z" fill="#01593A" />
            </svg>
        },
        {
            'id': 3,
            'icon1': <svg xmlns="http://www.w3.org/2000/svg" width="33" height="34" viewBox="0 0 33 34" fill="none">
                <path d="M13.7499 22.6436L6.87494 15.7686L8.81369 13.8161L13.7499 18.7523L24.1862 8.31605L26.1249 10.2686M26.1249 2.01855H6.87494C5.34869 2.01855 4.12494 3.2423 4.12494 4.76855V22.5473C4.12494 23.4961 4.60619 24.3348 5.33494 24.8298L16.4999 32.2686L27.6512 24.8298C28.3799 24.3348 28.8749 23.4961 28.8749 22.5473V4.76855C28.8749 4.03921 28.5852 3.33974 28.0695 2.82401C27.5538 2.30829 26.8543 2.01855 26.1249 2.01855Z" fill="#01593A" />
            </svg>,
            'title': 'Round-the-Clock Support',
            'desc': 'Access our 24/7 customer support service for any queries or assistance with your academic source evaluation.',
            'icon2': <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <path d="M17.2787 27.2421L15.8592 25.8226L24.2748 17.4069L15.8592 8.99129L17.2787 7.57178L27.1139 17.4069L17.2787 27.2421Z" fill="#01593A" />
                <path d="M8.45726 16.3926H25.6941V18.4204H8.45726V16.3926Z" fill="#01593A" />
                <path d="M17.5831 34.6434C8.05214 34.6434 0.346237 26.9375 0.346237 17.4066C0.346237 7.87558 8.05214 0.169678 17.5831 0.169678C27.1141 0.169678 34.82 7.87558 34.82 17.4066C34.82 26.9375 27.1141 34.6434 17.5831 34.6434ZM17.5831 2.19755C9.16747 2.19755 2.37411 8.99091 2.37411 17.4066C2.37411 25.8222 9.16747 32.6156 17.5831 32.6156C25.9988 32.6156 32.7921 25.8222 32.7921 17.4066C32.7921 8.99091 25.9988 2.19755 17.5831 2.19755Z" fill="#01593A" />
            </svg>
        },
        {
            'id': 4,
            'icon1': <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                <path d="M22.0206 14.5212V6.39624H32.5831V14.5212H22.0206ZM6.58313 19.3962V6.39624H17.1456V19.3962H6.58313ZM22.0206 32.3962V19.3962H32.5831V32.3962H22.0206ZM6.58313 32.3962V24.2712H17.1456V32.3962H6.58313Z" fill="#01593A" />
            </svg>,
            'title': 'User-Friendly Dashboard',
            'desc': 'Enjoy a seamless experience with our personalised and intuitive UI.',
            'icon2': <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <path d="M17.2787 27.2421L15.8592 25.8226L24.2748 17.4069L15.8592 8.99129L17.2787 7.57178L27.1139 17.4069L17.2787 27.2421Z" fill="#01593A" />
                <path d="M8.45726 16.3926H25.6941V18.4204H8.45726V16.3926Z" fill="#01593A" />
                <path d="M17.5831 34.6434C8.05214 34.6434 0.346237 26.9375 0.346237 17.4066C0.346237 7.87558 8.05214 0.169678 17.5831 0.169678C27.1141 0.169678 34.82 7.87558 34.82 17.4066C34.82 26.9375 27.1141 34.6434 17.5831 34.6434ZM17.5831 2.19755C9.16747 2.19755 2.37411 8.99091 2.37411 17.4066C2.37411 25.8222 9.16747 32.6156 17.5831 32.6156C25.9988 32.6156 32.7921 25.8222 32.7921 17.4066C32.7921 8.99091 25.9988 2.19755 17.5831 2.19755Z" fill="#01593A" />
            </svg>
        },
        {
            'id': 5,
            'icon1': <svg xmlns="http://www.w3.org/2000/svg" width="33" height="34" viewBox="0 0 33 34" fill="none">
                <path d="M25.5748 12.1937C26.6218 12.1935 27.6298 12.5915 28.3942 13.3069C29.1587 14.0224 29.6225 15.0017 29.6916 16.0465L29.7015 16.3171V17.5661C27.9607 16.1286 25.7466 15.3916 23.4916 15.499C21.2365 15.6063 19.1025 16.5503 17.5061 18.1467C15.9097 19.7431 14.9657 21.8771 14.8583 24.1322C14.751 26.3872 15.488 28.6013 16.9255 30.3421H15.6765C14.6292 30.3422 13.6211 29.944 12.8566 29.2283C12.0921 28.5125 11.6284 27.5327 11.5597 26.4877L11.5515 26.2171V16.3171C11.5513 15.2698 11.9495 14.2617 12.6653 13.4972C13.3811 12.7327 14.3608 12.269 15.4059 12.2003L15.6748 12.1937H25.5748ZM20.8938 6.73883L20.973 6.99953L21.9217 10.5421H14.8515C13.5889 10.542 12.374 11.0244 11.4553 11.8906C10.5367 12.7568 9.9838 13.9413 9.90973 15.2017L9.90148 15.4921V24.3163C9.05862 24.298 8.24158 24.022 7.56019 23.5256C6.87881 23.0292 6.36574 22.336 6.08998 21.5393L6.00418 21.2588L3.44173 11.6971C3.17027 10.6856 3.29372 9.60866 3.78705 8.68482C4.28037 7.76098 5.10664 7.05938 6.09823 6.72233L6.35893 6.64478L15.9207 4.08233C16.8874 3.82319 17.9153 3.92434 18.813 4.36694C19.7106 4.80954 20.4167 5.56339 20.7997 6.48803L20.8938 6.73883ZM31.3515 24.5687C31.3515 25.5438 31.1594 26.5093 30.7863 27.4102C30.4131 28.311 29.8662 29.1295 29.1767 29.819C28.4873 30.5085 27.6687 31.0554 26.7679 31.4285C25.8671 31.8017 24.9015 31.9937 23.9265 31.9937C22.9514 31.9937 21.9859 31.8017 21.0851 31.4285C20.1842 31.0554 19.3657 30.5085 18.6762 29.819C17.9867 29.1295 17.4398 28.311 17.0667 27.4102C16.6935 26.5093 16.5015 25.5438 16.5015 24.5687C16.5015 22.5995 17.2838 20.7109 18.6762 19.3185C20.0687 17.926 21.9572 17.1437 23.9265 17.1437C25.8957 17.1437 27.7843 17.926 29.1767 19.3185C30.5692 20.7109 31.3515 22.5995 31.3515 24.5687ZM24.7515 21.2687C24.7515 21.0499 24.6646 20.8401 24.5098 20.6854C24.3551 20.5306 24.1453 20.4437 23.9265 20.4437C23.7077 20.4437 23.4978 20.5306 23.3431 20.6854C23.1884 20.8401 23.1015 21.0499 23.1015 21.2687V23.7437H20.6265C20.4077 23.7437 20.1978 23.8306 20.0431 23.9854C19.8884 24.1401 19.8015 24.3499 19.8015 24.5687C19.8015 24.7875 19.8884 24.9974 20.0431 25.1521C20.1978 25.3068 20.4077 25.3937 20.6265 25.3937H23.1015V27.8687C23.1015 28.0875 23.1884 28.2974 23.3431 28.4521C23.4978 28.6068 23.7077 28.6937 23.9265 28.6937C24.1453 28.6937 24.3551 28.6068 24.5098 28.4521C24.6646 28.2974 24.7515 28.0875 24.7515 27.8687V25.3937H27.2265C27.4453 25.3937 27.6551 25.3068 27.8098 25.1521C27.9646 24.9974 28.0515 24.7875 28.0515 24.5687C28.0515 24.3499 27.9646 24.1401 27.8098 23.9854C27.6551 23.8306 27.4453 23.7437 27.2265 23.7437H24.7515V21.2687Z" fill="#01593A" />
            </svg>,
            'title': 'Complimentary Add-Ons',
            'desc': 'Benefit from our range of free add-on services, often charged at a premium by others.',
            'icon2': <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <path d="M17.2787 27.2421L15.8592 25.8226L24.2748 17.4069L15.8592 8.99129L17.2787 7.57178L27.1139 17.4069L17.2787 27.2421Z" fill="#01593A" />
                <path d="M8.45726 16.3926H25.6941V18.4204H8.45726V16.3926Z" fill="#01593A" />
                <path d="M17.5831 34.6434C8.05214 34.6434 0.346237 26.9375 0.346237 17.4066C0.346237 7.87558 8.05214 0.169678 17.5831 0.169678C27.1141 0.169678 34.82 7.87558 34.82 17.4066C34.82 26.9375 27.1141 34.6434 17.5831 34.6434ZM17.5831 2.19755C9.16747 2.19755 2.37411 8.99091 2.37411 17.4066C2.37411 25.8222 9.16747 32.6156 17.5831 32.6156C25.9988 32.6156 32.7921 25.8222 32.7921 17.4066C32.7921 8.99091 25.9988 2.19755 17.5831 2.19755Z" fill="#01593A" />
            </svg>
        },
        {
            'id': 6,
            'icon1': <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                <path d="M24.0336 12.8744C23.7725 12.2589 23.4533 11.6698 23.0803 11.115L21.0768 12.4671C21.6542 13.3255 22.0593 14.2878 22.2695 15.3007C22.4837 16.3565 22.4837 17.4446 22.2695 18.5004C22.1645 19.0103 22.0091 19.5086 21.8055 19.9878C21.6075 20.4586 21.3635 20.9087 21.0768 21.3315C20.5041 22.1761 19.7758 22.904 18.9308 23.4763C18.0733 24.0534 17.1117 24.4584 16.0997 24.6689C15.0445 24.8803 13.9577 24.8803 12.9025 24.6689C11.3837 24.3569 9.98996 23.6056 8.89442 22.5084C8.17075 21.7843 7.59314 20.9277 7.19309 19.9854C6.99123 19.5062 6.83664 19.0084 6.7315 18.4991C6.41253 16.9266 6.57334 15.2945 7.19309 13.8144C7.5916 12.8723 8.16896 12.0163 8.89321 11.2939C9.61715 10.5714 10.4728 9.99429 11.4138 9.59373C11.8911 9.39194 12.3925 9.23606 12.9 9.13214C13.0293 9.10556 13.161 9.09348 13.2915 9.07294V12.7475L19.3332 7.91414L13.2915 3.08081V6.63089C12.9978 6.66342 12.7055 6.70816 12.4155 6.76502C11.0914 7.03636 9.83368 7.56604 8.71438 8.32377C6.72605 9.66505 5.26523 11.6552 4.58157 13.9541C3.89791 16.2531 4.03384 18.7181 4.96613 20.9279C5.48516 22.1583 6.2382 23.2761 7.18342 24.2194C8.12736 25.1615 9.24356 25.9134 10.4713 26.4343C12.4014 27.2509 14.5342 27.4612 16.5867 27.0372C18.2296 26.6977 19.7655 25.9643 21.0624 24.9001C22.3594 23.836 23.3786 22.4729 24.0324 20.9279C24.2983 20.2996 24.5025 19.6459 24.6366 18.9849C24.9167 17.6094 24.9167 16.1916 24.6366 14.8161C24.4989 14.1509 24.297 13.5006 24.0336 12.8744Z" fill="#01593A" />
            </svg>,
            'title': 'Unlimited Revisions at No Extra Cost',
            'desc': 'Request unlimited revisions for free, ensuring your annotated bibliography aligns perfectly with your needs.',
            'icon2': <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <path d="M17.2787 27.2421L15.8592 25.8226L24.2748 17.4069L15.8592 8.99129L17.2787 7.57178L27.1139 17.4069L17.2787 27.2421Z" fill="#01593A" />
                <path d="M8.45726 16.3926H25.6941V18.4204H8.45726V16.3926Z" fill="#01593A" />
                <path d="M17.5831 34.6434C8.05214 34.6434 0.346237 26.9375 0.346237 17.4066C0.346237 7.87558 8.05214 0.169678 17.5831 0.169678C27.1141 0.169678 34.82 7.87558 34.82 17.4066C34.82 26.9375 27.1141 34.6434 17.5831 34.6434ZM17.5831 2.19755C9.16747 2.19755 2.37411 8.99091 2.37411 17.4066C2.37411 25.8222 9.16747 32.6156 17.5831 32.6156C25.9988 32.6156 32.7921 25.8222 32.7921 17.4066C32.7921 8.99091 25.9988 2.19755 17.5831 2.19755Z" fill="#01593A" />
            </svg>
        },
    ]

    // faqs data 
    const faqData = [
        {
            "question": "What makes your annotated bibliography service stand out?",
            "answer": "We offer custom, comprehensive bibliography solutions, with a focus on academic integrity and tailored research for UK universities."
        },
        {
            "question": "How do you ensure the originality of content?",
            "answer": "Each bibliography is meticulously crafted to be plagiarism-free, reflecting original research and critical analysis."
        },
        {
            "question": "Can you accommodate specific formatting requirements?",
            "answer": "Yes, our service includes adhering to any annotated bibliography format, whether it's a specific university template or a scholarly article summarization style."
        },
        {
            "question": "What types of sources do you use for bibliographies?",
            "answer": "We utilize a wide range of academic and scholarly sources, ensuring a detailed and insightful annotated bibliography tailored to your subject."
        },
        {
            "question": "Do you offer services for postgraduate students?",
            "answer": "Absolutely, our UK postgraduate annotated bibliography support is designed to meet the advanced needs of postgraduate research and writing."
        },
        {
            "question": "What is your approach to deadline management?",
            "answer": "Our professional writers are adept at delivering high-quality work within your specified deadline, ensuring reliable and timely service."
        },
        {
            "question": "How can I provide feedback on my order?",
            "answer": "Feedback can be shared through your personalized dashboard, allowing for seamless communication and adjustments if needed."
        }
    ];
    const faqData2 = [
        { question: 'Where can I find support for reflective essay writing?', answer: 'My Perfect Writing specialises in reflective essay writing, helping you articulate your thoughts and experiences with clarity and depth.' },
        { question: 'How is the originality of my academic work guaranteed?', answer: 'We prioritize originality, providing plagiarism-free UK essays and conducting thorough checks to ensure the integrity of your work.' },
        { question: 'What support is available for undergraduate academic writing?', answer: 'Our custom essay services UK offer extensive resources, guidance, and personalised support to help undergraduate students excel in their academic writing endeavours.' },
        { question: 'Are there writing services tailored for Masters and PhD students?', answer: 'Yes, we provide university level essay services in UK that cater to both Masters and PhD students, providing the depth and expertise required for these advanced levels of study.' },
        { question: 'How can I develop my critical analysis writing skills?', answer: 'With our British university essay assistance, develop your critical analysis skills with our expert guidance, practical strategies, and personalised feedback at My Perfect Writing.' },
        { question: 'Where can I find assistance with bibliographies and citations?', answer: 'Our team is adept at various citation styles, ensuring your academic work is accurately referenced and credible.' },
        { question: 'Is 24/7 academic writing support available?', answer: 'With our fast turnaround essay services in UK, we can provide round-the-clock academic writing support, ensuring you have access to expert assistance anytime, anywhere.' },
        { question: 'How does My Perfect Writing ensure the quality of its services?', answer: 'Quality assurance is integral to our services, with each piece of work we offer free essay editing and proofreading UK services where your work undergo rigorous checks and revisions to meet the highest standards.' },
    ];

    const [openIndex, setOpenIndex] = useState(null);
    const [openIndex2, setOpenIndex2] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const toggleFAQ2 = (index) => {
        setOpenIndex2(openIndex2 === index ? null : index);
    };

    // Crousel responsivenes 
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1350 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1350, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 620 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 700, min: 0 },
            items: 1
        }
    };

    // review section data
    const Reviews =
        [
            {
                "ServiceType": "Annotated Bibliography",
                "WordCount": 1500,
                "Citation": "Harvard",
                "OrderPrice": "£34.95",
                "CustomerID": "MPW-343533",
                "OrderRating": "5/5",
                "University": "University of Oxford",
                "Subject": "English Literature",
                "Review": "Exceptional detail and adherence to academic standards. The bibliography was spot on with insightful annotations.",
                "Tags": ["Educational Reference Analysis UK", "Professional Academic Resource Listing UK"],
                "ResponsefromMyPerfectWriting": "Thank you! We're thrilled to have supported your literary research with precision.",
                "Date": "2023-11-12",
                "image": "017.jpg"
            },
            {
                "ServiceType": "Annotated Bibliography",
                "WordCount": 1800,
                "Citation": "MLA",
                "OrderPrice": "£41.94",
                "CustomerID": "MPW-343534",
                "OrderRating": "4.8/5",
                "University": "University of Cambridge",
                "Subject": "History",
                "Review": "The bibliography perfectly matched my history assignment requirements. Appreciate the detailed analysis and format.",
                "Tags": ["British Scholarly Source Annotation", "Annotated Bibliography Services for UK Undergraduates"],
                "ResponsefromMyPerfectWriting": "Delighted to have been of help with your history project. Your feedback is invaluable!",
                "Date": "2023-11-10",
                "image": "018.jpg"
            },
            {
                "ServiceType": "Annotated Bibliography",
                "WordCount": 1200,
                "Citation": "Chicago",
                "OrderPrice": "£27.88",
                "CustomerID": "MPW-343535",
                "OrderRating": "5/5",
                "University": "Imperial College London",
                "Subject": "Physics",
                "Review": "Impressed with the quick turnaround and accuracy of citations. A reliable service for urgent academic needs.",
                "Tags": ["UK Postgraduate Annotated Bibliography Support", "Specialized Annotated Bibliography Services in England"],
                "ResponsefromMyPerfectWriting": "Thank you for choosing us for your urgent request. We're always here to assist!",
                "Date": "2023-11-08",
                "image": "019.jpg"
            },
            {
                "ServiceType": "Annotated Bibliography",
                "WordCount": 2100,
                "Citation": "APA",
                "OrderPrice": "£48.69",
                "CustomerID": "MPW-343536",
                "OrderRating": "4.9/5",
                "University": "University College London",
                "Subject": "Psychology",
                "Review": "The APA annotated bibliography was impeccable. The writers showed deep understanding and critical insight.",
                "Tags": ["Annotated Bibliography Writing Help for UK Scholars", "Educational Reference Analysis UK"],
                "ResponsefromMyPerfectWriting": "We're thrilled to hear that! Our team strives for academic excellence in every task.",
                "Date": "2023-11-06",
                "image": "020.jpg"
            },
            {
                "ServiceType": "Annotated Bibliography",
                "WordCount": 1600,
                "Citation": "Harvard",
                "OrderPrice": "£38.98",
                "CustomerID": "MPW-343537",
                "OrderRating": "5/5",
                "University": "London School of Economics",
                "Subject": "Business Studies",
                "Review": "Outstanding service! The annotations were thorough and the Harvard referencing was perfect.",
                "Tags": ["Professional Academic Resource Listing UK", "Custom Annotated Bibliography Services for British Universities"],
                "ResponsefromMyPerfectWriting": "Thank you for your feedback! We're glad to have met your expectations for your business study project.",
                "Date": "2023-11-04",
                "image": "021.jpg"
            },
            {
                "ServiceType": "Annotated Bibliography",
                "WordCount": 1400,
                "Citation": "IEEE",
                "OrderPrice": "£34.86",
                "CustomerID": "MPW-343538",
                "OrderRating": "4.8/5",
                "University": "Imperial College London",
                "Subject": "Engineering",
                "Review": "The precision and technical insight in the bibliography were impressive. Highly recommended for engineering topics.",
                "Tags": ["British Scholarly Source Annotation", "UK Postgraduate Annotated Bibliography Support"],
                "ResponsefromMyPerfectWriting": "We appreciate your recommendation! Our team is dedicated to delivering quality in technical fields.",
                "Date": "2023-11-02",
                "image": "022.jpg"
            },
            {
                "ServiceType": "Annotated Bibliography",
                "WordCount": 1700,
                "Citation": "MLA",
                "OrderPrice": "£41.93",
                "CustomerID": "MPW-343539",
                "OrderRating": "5/5",
                "University": "University of Edinburgh",
                "Subject": "Literature",
                "Review": "The depth of analysis in the annotated bibliography was outstanding. It reflected a deep understanding of literary themes.",
                "Tags": ["Annotated Bibliography Services for UK Undergraduates", "Educational Reference Analysis UK"],
                "ResponsefromMyPerfectWriting": "Delighted to contribute to your study of literature. Thank you for your kind words!",
                "Date": "2023-10-31",
                "image": "023.jpg"
            },
            {
                "ServiceType": "Annotated Bibliography",
                "WordCount": 1900,
                "Citation": "APA",
                "OrderPrice": "£44.91",
                "CustomerID": "MPW-343540",
                "OrderRating": "4.7/5",
                "University": "King's College London",
                "Subject": "Social Sciences",
                "Review": "The annotated bibliography provided a comprehensive overview of social science research. Very informative and well-structured.",
                "Tags": ["Specialized Annotated Bibliography Services in England", "Professional Academic Resource Listing UK"],
                "ResponsefromMyPerfectWriting": "We're pleased to hear that your social science research was well-supported. Our team is always ready to assist!",
                "Date": "2023-10-29",
                "image": "024.jpg"
            }

        ];

    return (
        <>
            {/* Header section */}
            <div class="header">
                <div className="upper">
                    <div class="headerTop">
                        <h3>Annotated Bibliography Service in UK - Expert Academic Support</h3>
                        <p>Tailored Bibliography Solutions for Students, Academic Professionals, and Researchers</p>
                    </div>

                    <div class="headerBottom serviceHeaderBottom">
                        <div id='serviceHeader' className="headerRight">
                            <div className="serviceHeaderRight">
                                <div className="headerRightTop serviceHeaderTop">
                                    <div className="serviceRightContents">

                                        <div className="rightContents">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                                                <g clip-path="url(#clip0_237_39013)">
                                                    <path d="M19.6256 0.194336C30.1344 0.277134 38.5536 8.41085 38.5899 19.3464C38.623 29.3706 30.4346 38.3282 19.1489 38.1084C8.85478 37.9077 0.446459 29.5225 0.676485 18.5739C0.87985 8.90393 8.76932 0.294315 19.6256 0.194336ZM15.6323 22.0205C16.3064 22.0205 16.9808 22.0219 17.6549 22.0197C17.9772 22.0187 18.1791 22.0916 18.104 22.4956C17.9387 23.3843 17.8033 24.2782 17.6581 25.17C17.3846 26.8512 17.1119 28.5326 16.8401 30.2142C16.814 30.3744 16.7303 30.5457 16.9368 30.6563C17.2881 30.8443 18.2491 30.6049 18.4478 30.2731C20.9668 26.0696 23.4846 21.8652 26.001 17.66C26.5239 16.7854 26.2495 16.3125 25.224 16.3048C24.0442 16.2965 22.8643 16.2965 21.6844 16.3048C21.318 16.307 21.069 16.2586 21.1573 15.7791C21.4205 14.3529 21.6609 12.9225 21.902 11.4923C22.0905 10.3725 22.2712 9.25144 22.444 8.12913C22.4697 7.96176 22.5716 7.7544 22.2988 7.65516C22.0147 7.57263 21.7119 7.58041 21.4324 7.67742C21.1528 7.77443 20.9103 7.95587 20.7384 8.19667C18.8006 11.4238 16.8643 14.6519 14.9295 17.8809C14.3456 18.8551 13.7441 19.819 13.1878 20.8089C12.7709 21.5502 13.0446 22.0094 13.8629 22.0182C14.4526 22.0246 15.0427 22.0196 15.6326 22.0208L15.6323 22.0205Z" fill="#305F63" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_237_39013">
                                                        <rect width="37.9181" height="37.9181" fill="white" transform="translate(0.673828 0.194336)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <p className='fixedP'>Fixed £6.99/Page Pricing</p>
                                        </div>
                                        <div className="rightContents">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="31" viewBox="0 0 37 31" fill="none">
                                                <g clip-path="url(#clip0_237_39015)">
                                                    <path d="M36.0786 11.8758C32.1948 4.55029 -2.48117 -2.93487 1.27296 1.90681C5.02708 6.74835 21.6593 13.392 22.645 13.5155C17.5421 15.1177 3.92196 17.9921 6.83737 20.4132C9.75291 22.8343 23.601 20.1303 23.5782 20.1734C19.7434 23.0631 14.9688 31.7869 19.766 29.923C27.3348 26.9821 38.3417 16.1443 36.0786 11.8758Z" fill="#16CEC6" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_237_39015">
                                                        <rect width="35.3902" height="29.8605" fill="white" transform="translate(0.989258 0.368164)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <p className='noAdd'>No Additional Charges for Add-On</p>
                                        </div>
                                        <div className="rightContents">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                                <g clip-path="url(#clip0_237_39017)">
                                                    <path d="M29.6664 29.3502C30.3795 28.6645 30.8458 27.7594 30.9555 26.772C30.9555 26.3606 30.8458 26.0863 30.5989 25.5652C30.3522 25.0441 27.3077 19.778 26.4026 18.3245C25.8815 17.4742 25.6072 16.4594 25.6072 15.4721C25.6072 14.4572 25.8815 13.4698 26.4026 12.6196C27.3077 11.1659 30.352 5.87254 30.599 5.35141C30.8458 4.83027 30.9555 4.58357 30.9555 4.17204C30.8458 3.18463 30.4069 2.27957 29.6939 1.62134C29.0082 0.908241 28.1031 0.441969 27.1431 0.359615C26.7318 0.359615 26.4575 0.469339 25.9637 0.71628C25.4701 0.963104 20.0944 3.9251 18.6408 4.83027C18.531 4.88513 18.4214 4.96737 18.2841 5.02223L11.0983 9.27344C11.2628 7.90211 11.8662 6.58564 12.8536 5.62572C13.0455 5.43376 13.2375 5.26905 13.4571 5.10459C13.2924 5.02235 13.1004 4.93988 12.9359 4.83027C11.4822 3.92521 6.18888 0.880869 5.66775 0.633928C5.14661 0.387106 4.89979 0.27738 4.46089 0.27738C3.47348 0.387106 2.56842 0.826008 1.91019 1.53898C1.19697 2.22471 0.730819 3.12976 0.621094 4.11717C0.648466 4.52859 0.758191 4.94 0.97776 5.29655C1.22446 5.81768 4.26893 11.111 5.17398 12.5647C5.69512 13.415 5.96943 14.4023 5.96943 15.4171C5.96943 16.432 5.69512 17.4194 5.17398 18.2696C4.26893 19.778 1.19709 25.0715 0.977642 25.5927C0.758191 25.9493 0.648466 26.3606 0.621094 26.772C0.730819 27.7594 1.16972 28.6645 1.8827 29.3502C2.56842 30.0632 3.47348 30.5021 4.46089 30.6118C4.8723 30.5844 5.28371 30.4747 5.66775 30.2551C6.10653 30.0632 9.97382 27.8142 12.0309 26.6074L12.497 26.3331C12.6616 26.2235 12.7987 26.1412 12.9084 26.0863L13.1279 25.9492L20.4508 21.6158C20.2863 23.2614 19.4361 24.7698 18.1196 25.7846C18.2843 25.8668 18.4762 25.9493 18.6407 26.0589C20.0944 26.964 25.3877 30.0358 25.9089 30.2553C26.2655 30.4747 26.6768 30.5844 27.1157 30.6118C28.0869 30.501 28.989 30.0548 29.6664 29.3502ZM16.1723 13.4973L17.7356 15.0607C17.9551 15.28 17.9551 15.6092 17.7356 15.8285L16.1722 17.3919C15.9529 17.6114 15.6237 17.6114 15.4044 17.3919L13.841 15.8285C13.6215 15.6092 13.6215 15.28 13.841 15.0607L15.4044 13.4973C15.5964 13.3053 15.953 13.3053 16.1723 13.4973Z" fill="#FF694A" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_237_39017">
                                                        <rect width="30.3344" height="30.3344" fill="white" transform="matrix(1 0 0 -1 0.621094 30.6118)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <p>Complimentary Plagiarism Reports</p>
                                        </div>
                                    </div>

                                    <button className='rightBTN pulse-button'>Get Started Today!</button>

                                </div>
                                <div className="RightContentBottom">
                                    <p><strong>Benefits of Our Annotated Bibliography Service: </strong>Maximize your academic potential with our streamlined, cost-effective bibliography services, ensuring accuracy and academic integrity at every step.</p>
                                    <p><strong>Our Commitment to Quality: </strong>Delivering excellence in every annotated bibliography, with a focus on detailed research, precise formatting, and rigorous quality checks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="headerLeft ServiceHeaderLeft">
                    <img src="./images/headerImg.png" alt="annotated-image" />
                </div>
            </div>


            {/* writers section */}
            <div className="myteam">
                <div className="topSection">
                    <h3>Meet Our Expert Bibliography Writers</h3>
                    <p>Experienced, Qualified, and Trusted by Students Across the UK for Top-Notch Bibliography Assistance</p>
                </div>
                <div className="CrouselSection">
                    <div className="crousel">
                        <Carousel autoPlay={true} showDots={true} responsive={responsive} >
                            {lecturersData.PeerBiblography.map((lecturer, index) => (
                                <Card key={index} lecturer={lecturer} />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>


            {/* cards pricing section  */}
            <div className="price " id="pricing-section">
                <div className="pricTop">
                    <h3>Why Choose Our Annotated Bibliography Services</h3>
                    <p>Elevate Your Academic Work with Trusted, Expert-Driven Bibliography Services Tailored to Your Research Needs in the UK.</p>
                </div>

                <div className="priceBottom">
                    <div className="priceLeft">
                        {PriceCardData.map(card => (

                            <div className="priceCard" key={card.id}>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="33" height="26" viewBox="0 0 33 26" fill="none">
                                <path d="M10.1831 20.7295H13.3831V19.167H14.9831C15.4365 19.167 15.8167 19.017 16.1239 18.717C16.4311 18.417 16.5842 18.0462 16.5831 17.6045V12.917C16.5831 12.4743 16.4295 12.1029 16.1223 11.8029C15.8151 11.5029 15.4354 11.3535 14.9831 11.3545H10.1831V9.79199H16.5831V6.66699H13.3831V5.10449H10.1831V6.66699H8.58313C8.1298 6.66699 7.74953 6.81699 7.44233 7.11699C7.13513 7.41699 6.98206 7.78783 6.98313 8.22949V12.917C6.98313 13.3597 7.13673 13.7311 7.44393 14.0311C7.75113 14.3311 8.13086 14.4805 8.58313 14.4795H13.3831V16.042H6.98313V19.167H10.1831V20.7295ZM22.9831 19.5576L26.1831 16.4326H19.7831L22.9831 19.5576ZM19.7831 9.79199H26.1831L22.9831 6.66699L19.7831 9.79199ZM3.78313 25.417C2.90313 25.417 2.14953 25.1107 1.52233 24.4982C0.895132 23.8857 0.582066 23.1503 0.583133 22.292V3.54199C0.583133 2.68262 0.896733 1.94668 1.52393 1.33418C2.15113 0.721682 2.9042 0.415953 3.78313 0.416995H29.3831C30.2631 0.416995 31.0167 0.723244 31.6439 1.33574C32.2711 1.94824 32.5842 2.68366 32.5831 3.54199V22.292C32.5831 23.1514 32.2695 23.8873 31.6423 24.4998C31.0151 25.1123 30.2621 25.418 29.3831 25.417H3.78313Z" fill="#01593A" />
                            </svg> */}
                                {card.icon1}
                                <h4>{card.title}</h4>
                                <p>{card.desc}</p>
                                {card.icon2}
                            </div>
                        ))}
                    </div>

                    <div className="priceRightCard">
                        {/* <div className="card"> */}
                        <h3>Essay Writing Service in <span className='priceRightCard-price'>£6.99/Page</span> - Including</h3>
                        <div className="cardContents">
                            <div className="cardOneSect">
                                <div className="cardOneLeft">
                                    <FaRegCheckCircle className='BigCardICon' style={{ color: '#004E5F', fontSize: '50px' }} />
                                    <p>Content + AI Plagiarism Reports</p>
                                </div>
                                <div className="cardOneRight">
                                    <p>15.99</p>
                                    <h2>FREE</h2>
                                </div>
                            </div>
                            <hr />
                            <div className="cardOneSect">
                                <div className="cardOneLeft">
                                    <FaRegCheckCircle className='BigCardICon' style={{ color: '#004E5F', fontSize: '50px' }} />
                                    <p>Title Page</p>
                                </div>
                                <div className="cardOneRight">
                                    <p>15.99</p>
                                    <h2>FREE</h2>
                                </div>
                            </div>
                            <hr />
                            <div className="cardOneSect">
                                <div className="cardOneLeft">
                                    <FaRegCheckCircle className='BigCardICon' style={{ color: '#004E5F', fontSize: '50px' }} />
                                    <p>Academic Formatting</p>
                                </div>
                                <div className="cardOneRight">
                                    <p>15.99</p>
                                    <h2>FREE</h2>
                                </div>
                            </div>
                            <hr />
                            <div className="cardOneSect">
                                <div className="cardOneLeft">
                                    <FaRegCheckCircle className='BigCardICon' style={{ color: '#004E5F', fontSize: '50px' }} />
                                    <p>Unlimited Revisions</p>
                                </div>
                                <div className="cardOneRight">
                                    <p>15.99</p>
                                    <h2>FREE</h2>
                                </div>
                            </div>
                            <hr />
                            <div className="cardOneSect">
                                <div className="cardOneLeft">
                                    <FaRegCheckCircle className='BigCardICon' style={{ color: '#004E5F', fontSize: '50px' }} />
                                    <p>Academic Referencing </p>
                                </div>
                                <div className="cardOneRight">
                                    <p>15.99</p>
                                    <h2>FREE</h2>
                                </div>
                            </div>
                            <hr />
                            <div className="cardOneSect">
                                <div className="cardOneLeft">
                                    <FaRegCheckCircle className='BigCardICon' style={{ color: '#004E5F', fontSize: '50px' }} />
                                    <p>1-Page Basic Outline</p>
                                </div>
                                <div className="cardOneRight">
                                    <p>15.99</p>
                                    <h2>FREE</h2>
                                </div>
                            </div>
                            <hr />
                            <div className="allFeatures">
                                <h4>Get all these feaures of</h4>
                                <p>15.99</p>
                                <h2>FREE</h2>
                            </div>
                            <div className="doBtn">
                                <button>Do my Paper</button>
                            </div>

                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>


            {/* Faqs sectin  */}
            <div className="faqs">
                <div className="faqTop">
                    <h3>Frequently Asked Questions About Our Annotated Bibliography Services</h3>
                    <p>Discover expert answers to your annotated bibliography queries, reflecting our commitment to quality and academic excellence.</p>
                </div>

                <div className="faqBottom">
                    <div className="faqLeft">
                        <h3>What's covered?</h3>
                        <hr />
                        <div className="faq-container">
                            {faqData.map((item, index) => (
                                <div key={index} className="faq-item">
                                    <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                        <div className="faq-q-right">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                                <g clip-path="url(#clip0_94_4372)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.803711 13.1436C0.803711 9.82835 2.12067 6.64892 4.46488 4.30472C6.80908 1.96052 9.9885 0.643555 13.3037 0.643555C16.6189 0.643555 19.7983 1.96052 22.1425 4.30472C24.4867 6.64892 25.8037 9.82835 25.8037 13.1436C25.8037 16.4588 24.4867 19.6382 22.1425 21.9824C19.7983 24.3266 16.6189 25.6436 13.3037 25.6436C9.9885 25.6436 6.80908 24.3266 4.46488 21.9824C2.12067 19.6382 0.803711 16.4588 0.803711 13.1436ZM12.5904 18.4936L19.787 9.49689L18.487 8.45689L12.3504 16.1252L8.00371 12.5036L6.93704 13.7836L12.5904 18.4952V18.4936Z" fill="#01593A" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_94_4372">
                                                        <rect width="25" height="25" fill="white" transform="translate(0.803711 0.643555)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            {item.question}
                                        </div>

                                        {/* <div className="arrowDwon"> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                            <path d="M2.04503 7.25954C2.27944 7.0252 2.59732 6.89355 2.92878 6.89355C3.26023 6.89355 3.57812 7.0252 3.81253 7.25954L10 13.447L16.1875 7.25954C16.4233 7.03184 16.739 6.90585 17.0668 6.90869C17.3945 6.91154 17.708 7.043 17.9398 7.27476C18.1716 7.50652 18.303 7.82004 18.3059 8.14779C18.3087 8.47553 18.1827 8.79128 17.955 9.02704L10.8838 16.0983C10.6494 16.3326 10.3315 16.4643 10 16.4643C9.66857 16.4643 9.35069 16.3326 9.11628 16.0983L2.04503 9.02704C1.81069 8.79263 1.67905 8.47474 1.67905 8.14329C1.67905 7.81183 1.81069 7.49395 2.04503 7.25954Z" fill="black" />
                                        </svg>
                                        {/* </div> */}
                                    </div>
                                    {openIndex === index && (
                                        <div className="faq-answer ">
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="faqLeft">
                        <h3>What's not covered?</h3>
                        <hr />
                        <div className="faq-container">
                            {faqData2.map((item, index) => (
                                <div key={index} className="faq-item">
                                    <div className="faq-question" onClick={() => toggleFAQ2(index)}>
                                        <div className="faq-q-right">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                                <g clip-path="url(#clip0_94_4372)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.803711 13.1436C0.803711 9.82835 2.12067 6.64892 4.46488 4.30472C6.80908 1.96052 9.9885 0.643555 13.3037 0.643555C16.6189 0.643555 19.7983 1.96052 22.1425 4.30472C24.4867 6.64892 25.8037 9.82835 25.8037 13.1436C25.8037 16.4588 24.4867 19.6382 22.1425 21.9824C19.7983 24.3266 16.6189 25.6436 13.3037 25.6436C9.9885 25.6436 6.80908 24.3266 4.46488 21.9824C2.12067 19.6382 0.803711 16.4588 0.803711 13.1436ZM12.5904 18.4936L19.787 9.49689L18.487 8.45689L12.3504 16.1252L8.00371 12.5036L6.93704 13.7836L12.5904 18.4952V18.4936Z" fill="#01593A" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_94_4372">
                                                        <rect width="25" height="25" fill="white" transform="translate(0.803711 0.643555)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            {item.question}
                                        </div>

                                        {/* <div className="arrowDwon"> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                            <path d="M2.04503 7.25954C2.27944 7.0252 2.59732 6.89355 2.92878 6.89355C3.26023 6.89355 3.57812 7.0252 3.81253 7.25954L10 13.447L16.1875 7.25954C16.4233 7.03184 16.739 6.90585 17.0668 6.90869C17.3945 6.91154 17.708 7.043 17.9398 7.27476C18.1716 7.50652 18.303 7.82004 18.3059 8.14779C18.3087 8.47553 18.1827 8.79128 17.955 9.02704L10.8838 16.0983C10.6494 16.3326 10.3315 16.4643 10 16.4643C9.66857 16.4643 9.35069 16.3326 9.11628 16.0983L2.04503 9.02704C1.81069 8.79263 1.67905 8.47474 1.67905 8.14329C1.67905 7.81183 1.81069 7.49395 2.04503 7.25954Z" fill="black" />
                                        </svg>
                                        {/* </div> */}
                                    </div>
                                    {openIndex2 === index && (
                                        <div className="faq-answer">
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* social section  */}
            <Social />


            {/* review section  */}
            <div className="review">
                <div className="reviewTop">
                    <h3>What Our Clients Say About Our Annotated Bibliography Services</h3>
                    <p>Real Feedback from Students and Academics Across the UK and Beyond, Reflecting Our Dedication to Excellence in Bibliography Writing</p>
                </div>

                <div className="privacy-cards">
                    <div className="privacy-card">
                        <div className="pcardTop">
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                <path d="M13.3978 35.0356C11.0335 34.2475 8.66915 35.2506 8.09598 37.2567C7.52281 39.1911 8.88409 41.4122 11.2484 42.2003C13.6128 42.9884 15.9771 41.9853 16.5503 39.9792C17.1234 37.9731 15.7621 35.7521 13.3978 35.0356ZM4.80024 41.4122C4.01213 42.057 3.94049 43.275 4.5853 44.2064C5.30177 45.1378 6.44811 45.3527 7.30787 44.7795C8.09598 44.1347 8.16763 42.9167 7.52281 41.9853C6.87799 41.0539 5.58835 40.839 4.80024 41.4122ZM44.4207 16.9807C44.4207 15.0463 43.4893 13.3267 42.128 12.2521V11.8222C42.128 8.81302 39.7637 6.3054 36.8262 6.3054H36.253C35.1067 4.37094 33.1006 3.00966 30.7363 3.00966C29.3033 3.00966 28.0137 3.43954 27.0106 4.22765C25.6494 3.00966 23.7866 2.1499 21.7805 2.1499C18.4847 2.1499 15.6905 4.37094 14.7591 7.45174C13.6844 6.66363 12.3231 6.23375 10.8902 6.23375C7.09293 6.23375 4.01213 9.38619 4.01213 13.2551C4.01213 14.4014 4.29872 15.4761 4.7286 16.4792C2.7225 17.9121 1.43286 20.2765 1.43286 22.999C1.43286 27.4411 4.94354 31.0234 9.24232 31.0234C10.8185 31.0234 12.3231 30.5219 13.5411 29.7338C14.1859 33.1012 17.1234 35.6804 20.6341 35.6804C23.2134 35.6804 25.5061 34.2475 26.7957 32.1698C27.6555 33.0295 28.8734 33.6027 30.2347 33.6027C32.7424 33.6027 34.8201 31.5966 35.035 29.089C35.6082 29.3039 36.253 29.4472 36.8979 29.4472C39.9786 29.4472 42.4863 26.8679 42.4863 23.7155C42.4863 23.0707 42.343 22.4258 42.1997 21.8527C43.4893 20.6347 44.4207 18.9152 44.4207 16.9807Z" fill="#00A12D" />
                            </svg>
                            <h3>Thoughts ?</h3>
                        </div>
                        <p>Would you be willing to disclose your real name and photo to post a review on essay writing or reviewing websites?</p>
                    </div>
                    <div className="privacy-card">
                        <div className="pcardTop">
                            <FaEye style={{ color: "green", fontSize: "40px" }} />
                            <h3>Reality ?</h3>
                        </div>
                        <p>Essay writing clients are naturally cautious about revealing their identity, which makes them reluctant to leave reviews. </p>
                    </div>
                    <div className="privacy-card">
                        <div className="pcardTop">
                            <MdPrivacyTip style={{ color: "green", fontSize: "40px" }} />
                            <h3>Privacy ?</h3>
                        </div>
                        <p>Would you be willing to disclose your real name and photo to post a review on essay writing or reviewing websites?</p>
                    </div>
                </div>

                <div className="reviewSect">
                    <div className="reviewSectDivScroll">

                        {Reviews.map((item, index) => (
                            <div className="reviewCard" key={index}>
                                <div className="sec1">
                                    <div className="sec1Top">
                                        <h3>Service Type:</h3>
                                        <p>{item.ServiceType}</p>
                                    </div>
                                    <div className="sec1Mid">
                                        <h3>Word Count:</h3>
                                        <p>{item.WordCount}</p>
                                    </div>
                                    <div className="sec1Bottom">
                                        <div className="BottLeft">
                                            <h3>Citation:</h3>
                                            <p>{item.Citation}</p>
                                        </div>
                                        <div className="BottRight">
                                            <h3>Price:</h3>
                                            <p>{item.OrderPrice}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="sect2">
                                    <img src={`./images/Animal avatars/${item.image}`} alt="annotated-image" />
                                    <h3>{item.CustomerID}</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="10" viewBox="0 0 58 10" fill="none">
                                        <path d="M2.45668 9.89245L3.26518 6.579L0.576904 4.35133L4.11803 4.05821L5.50487 0.933105L6.89172 4.05759L10.4322 4.3507L7.74456 6.57838L8.55306 9.89183L5.50487 8.13314L2.45668 9.89245Z" fill="#00A22D" />
                                        <path d="M14.1038 9.89245L14.9123 6.579L12.2241 4.35133L15.7652 4.05821L17.152 0.933105L18.5389 4.05759L22.0793 4.3507L19.3917 6.57838L20.2002 9.89183L17.152 8.13314L14.1038 9.89245Z" fill="#00A22D" />
                                        <path d="M25.751 9.89245L26.5595 6.579L23.8712 4.35133L27.4123 4.05821L28.7992 0.933105L30.186 4.05759L33.7265 4.3507L31.0388 6.57838L31.8473 9.89183L28.7992 8.13314L25.751 9.89245Z" fill="#00A22D" />
                                        <path d="M38.3996 8.5566L38.8442 6.73459L38.9415 6.33565L38.6254 6.07364L37.1761 4.87268L39.1136 4.7123L39.5015 4.68019L39.6593 4.32444L40.4463 2.55102L41.2332 4.32386L41.3911 4.67957L41.779 4.71168L43.7161 4.87205L42.2671 6.07307L41.951 6.33508L42.0483 6.73396L42.493 8.55629L40.7743 7.56465L40.4462 7.37537L40.1182 7.5647L38.3996 8.5566Z" fill="black" fill-opacity="0.01" stroke="black" stroke-width="1.31265" />
                                        <path d="M50.0465 8.5566L50.4911 6.73459L50.5884 6.33565L50.2723 6.07364L48.823 4.87268L50.7605 4.7123L51.1483 4.68019L51.3062 4.32444L52.0932 2.55102L52.8801 4.32386L53.038 4.67957L53.4259 4.71168L55.363 4.87205L53.914 6.07307L53.5979 6.33508L53.6952 6.73396L54.1399 8.55629L52.4212 7.56465L52.0931 7.37537L51.7651 7.5647L50.0465 8.5566Z" fill="black" fill-opacity="0.01" stroke="black" stroke-width="1.31265" />
                                    </svg>
                                    <p>{item.NameofUniversity}</p>
                                </div>

                                <div className="sect3">
                                    <div className="sect3Top">
                                        <div className="input">
                                            <h3>Subject: {item.Subject} </h3>
                                            <hr />
                                            <p>{item.Review}</p>
                                        </div>
                                    </div>
                                    <div className="sect3Tags">
                                        <h3>Tags</h3>
                                        {item.Tags && item.Tags.length > 0 ? (
                                            item.Tags.map((tag, tagIndex) => (
                                                <button key={tagIndex}>{tag}</button>
                                            ))
                                        ) : null}


                                    </div>
                                </div>

                                <div className="sect4">
                                    <div className="sect4Top">
                                        <div className="input">
                                            <h3>Responce from MyPerfectWriting</h3>
                                            <hr />
                                            <p>{item.ResponsefromMyPerfectWriting}</p>
                                        </div>
                                    </div>
                                    <div className="sect4Bott">
                                        <p>{item.Date}</p>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>

                </div>
            </div>

            {/* place order section  */}
            <PlaceOrder />

            {/* Discussion section  */}
            <div className='writing'>
                <div className="paperBtn pulse-button">
                    <button>Get your Custom Paper Now</button>
                </div>
                <div className="wTop">
                    <h3>My Perfect Writing- Top Essay Writing Service in UK</h3>
                    <p>Join the big family of our writing service on Instagram to get lots of handy tips and tricks and be the first to learn about our discounts!</p>
                </div>

                <div className="wPdf">
                    <div className="leftText">
                        <h2>Understanding Annotated Bibliographies</h2>
                        <p>An annotated bibliography is more than just a list of citations; it is a critical tool in academic research that provides a comprehensive overview of sources relevant to a specific topic or area of study. Each entry in an annotated bibliography typically consists of a citation in a standard format (like APA, MLA, Chicago, or Harvard) followed by a concise annotation. These annotations serve to summarise, evaluate, and reflect on the source's content and its relevance to the research question or subject area.</p>

                        <p>The purpose of an annotated bibliography extends beyond mere citation. It plays a pivotal role in academic writing by enabling researchers, students, and academics to critically engage with each source, offering insights into its validity and reliability. This process not only aids in developing a deeper understanding of the subject but also helps in identifying gaps in existing research and potential areas for further study.</p>

                        <p>Creating an annotated bibliography requires a blend of skills: meticulous research, critical analysis, and clear, concise writing. Each annotation must provide a succinct summary of the source, an evaluation of its relevance and quality, and a reflection on its contribution to the topic at hand. This makes it an invaluable component in the preparation of academic essays, theses, dissertations, and research projects, contributing significantly to the structure and depth of the final work.</p>

                        <h2>Introduction to Annotated Bibliography Services in the UK</h2>

                        <p>Our Annotated Bibliography Service in the UK is designed to offer expert, tailored support for students and academics navigating the complexities of academic writing. At the core of our service is the commitment to providing custom annotated references that align precisely with your research needs. Utilising our extensive knowledge in various citation formats, including APA, MLA, and Chicago, we ensure that each bibliography entry is not only accurate but also provides insightful analysis and critical evaluation of each source.</p>

                        <p>Understanding the importance of originality in academic work, our professional annotated bibliography writers in the UK focus on delivering plagiarism-free content. This is achieved through meticulous research and applying a thorough understanding of the subject matter. Whether it's for an essay, thesis, dissertation, or any academic assignment, our team is equipped to provide comprehensive and affordable annotated bibliography writing services across the UK.</p>

                        <p>Our online annotated bibliography assistance extends beyond just writing; it includes offering guidance on structuring your bibliography, understanding the nuances of different citation styles, and even providing annotated bibliography examples to help you grasp the format and content requirements. Our goal is to ensure that every student or academic seeking our help leaves with a deep understanding of how to create effective annotated bibliographies that enhance their research work and contribute to achieving higher grades.</p>

                        <h2>Introduction to Annotated Bibliography Services in the UK</h2>

                        <p>Embarking on scholarly pursuits in the UK, whether at undergraduate or postgraduate levels, necessitates a deep understanding of academic practices. Among these, creating a well-structured annotated bibliography is pivotal. Annotated Bibliography Service in the UK, a specialised sector in academic support, provides comprehensive assistance to students and researchers grappling with this crucial aspect of academic writing.</p>

                        <p>Our tailored services encompass a wide spectrum, from providing foundational annotated bibliography help to offering in-depth guidance on complex research topics. Recognising the diverse needs of the UK’s academic community, we cater to a range of requirements – be it adhering to specific citation styles like APA, MLA, or crafting bibliographies for unique research areas. Each annotated bibliography we create is an amalgamation of thorough research, meticulous sourcing, and insightful summarisation, ensuring every piece is tailored to the client’s academic objectives.</p>

                        <p>In the realm of academic writing, where the authenticity of sources and the precision of citations are paramount, our service stands out by offering plagiarism-free, original content. We extend our support to not just writing but also editing, proofreading, and formatting annotated bibliographies, ensuring they meet the rigorous academic standards of UK colleges and universities. By providing this level of specialised service, we empower students and scholars to focus on their research, secure in the knowledge that their bibliographic needs are expertly handled.</p>

                        <h2>Why Annotated Bibliographies Are Crucial for Academic Success</h2>

                        <p>Annotated bibliographies are more than just a formal requirement in academic research; they are fundamental in shaping a scholar's analytical and evaluative skills. In UK academia, where rigorous research standards are upheld, annotated bibliographies serve as a cornerstone for scholarly work, allowing students and researchers to demonstrate their depth of understanding and engagement with various sources.</p>

                        <p>Each annotated bibliography entry provides not only a citation but a critical assessment of the source. This process of evaluation is key in developing a nuanced understanding of the topic, helping scholars to distinguish between the plethora of information available and identify what is truly relevant and credible. By synthesizing information from different sources, annotated bibliographies encourage a comprehensive and multi-faceted approach to research.</p>

                        <p>Moreover, in the UK’s diverse academic landscape, where multiple citation styles like APA 7 or MLA are used, mastering the art of creating annotated bibliographies equips students with the necessary skill set to navigate through various disciplines. Our annotated bibliography service in the UK, therefore, focuses on providing tailored assistance, from offering bibliography templates to giving individualized feedback, ensuring that each student's unique academic journey is supported with expertise and precision.</p>

                        <h2>Our Expertise in Crafting Annotated Bibliographies</h2>

                        <p>In the realm of academic writing, the creation of annotated bibliographies stands as a testament to scholarly rigour and analytical depth. Our service in the UK prides itself on a team of experienced professionals adept in crafting annotated bibliographies that not only adhere to academic standards but also elevate the research narrative. Each bibliography we produce is a reflection of our commitment to providing detailed, insightful, and original content.</p>

                        <p>Our experts are well-versed in various citation styles, including the latest APA 7 format, ensuring each annotated bibliography is accurately formatted and tailored to specific academic requirements. Whether it's an APA 7 annotated bibliography template or a custom mini annotated bibliography, our approach is always meticulous and focused on delivering quality. We understand the nuances involved in selecting and evaluating sources, crafting annotations that offer a clear, concise, and critical overview of each source.</p>

                        <p>Additionally, we leverage modern tools and resources to ensure that our annotated bibliographies are not only informative but also plagiarism-free. This adherence to academic integrity is crucial in maintaining the trust and confidence of our clients. By choosing our service, students and researchers in the UK can be assured of receiving expert assistance in creating annotated bibliographies that contribute significantly to the success of their academic endeavours.</p>

                        <h2>Detailed Service Offering: What We Provide</h2>

                        <p>At the heart of our Annotated Bibliography Service in the UK lies a diverse range of offerings designed to meet the varied needs of our academic clients. Our services extend beyond just writing; they encompass a comprehensive suite of solutions to support your scholarly endeavours.</p>

                        <p>From crafting a critical preface annotated bibliography to providing a detailed summary annotated bibliography, our team of professionals is equipped to handle diverse requirements. Whether you need a standard annotated bibliography APA format example or a more complex APA 7 annotated bibliography example, our service ensures precision and adherence to academic standards. We specialize in creating annotated bibliographies that include thoughtful and critical evaluations of sources, tailored to your specific research context.</p>

                        <p>Understanding the time constraints and challenges faced by students and researchers, we also offer tools and resources to make the process easier. This includes the easiest way to write an annotated bibliography, with access to an annotated bibliography template APA 7, and the ability to create an annotated bibliography online. Our goal is to provide not just a service, but a learning experience that enhances your academic skills and knowledge. Each bibliography is a blend of thorough research, critical analysis, and professional presentation, ensuring your academic work stands out.</p>

                        <h2>The Process: How We Deliver Comprehensive Annotated Bibliographies</h2>

                        <p>Our approach to delivering comprehensive annotated bibliographies is rooted in a meticulous process that combines academic rigour with a personalised touch. Each project begins with an in-depth consultation to understand the specific needs of your research, whether it's for a psychology assignment, a business research proposal, or any other academic endeavour.</p>

                        <p>Once the scope is defined, our team utilises their expertise in various citation styles – from APA to MLA – to commence the research process. This involves not just sourcing relevant literature but also critically evaluating each source. Our evaluative annotation goes beyond mere summarisation; it delves into the relevance, credibility, and contribution of each source to your research topic.</p>

                        <p>Utilising tools like the APA style annotated bibliography template or creating custom templates, we ensure that each bibliography is not only informative but also adheres to academic standards. The final product is a detailed, insightful annotated bibliography that encapsulates the essence of your research, with each entry carefully crafted to offer a critical perspective and aid in your academic journey. This process, tailored to your specific requirements, ensures a final product that is both comprehensive and academically robust.</p>

                        <h2>Customization: Tailoring to Your Academic Requirements</h2>

                        <p>Recognizing that each academic journey is unique, our Annotated Bibliography Service in the UK is dedicated to providing customized assistance that aligns precisely with your individual requirements. From undergraduate essays to postgraduate theses, we adapt our services to meet the specific demands of your academic work.</p>

                        <p>Our process begins with an in-depth understanding of your assignment's scope, subject, and required citation style. Whether it's APA, MLA, or any other format, our team of expert writers and educators is skilled in creating bibliographies that adhere to the highest academic standards. This meticulous attention to detail ensures that every annotated bibliography we deliver is not only accurate but also enhances the overall quality of your research.</p>

                        <p>Beyond basic formatting, we offer tailored guidance on structuring your annotated bibliography to best support your argument or thesis. Our service extends to providing insightful feedback on your sources, helping you to develop a critical and analytical perspective. This bespoke approach ensures that you receive an annotated bibliography that is not just a list of references, but a valuable asset to your academic work, contributing to a deeper understanding of your topic and aiding in achieving higher grades.</p>

                        <h2>Adding Value Beyond the Basics</h2>

                        <p>Our Annotated Bibliography Service in the UK transcends the conventional boundaries of academic support by adding layers of value that elevate your research and writing. We understand that creating an annotated bibliography is not just about listing sources; it's about enriching your academic work with depth, perspective, and critical insights.</p>

                        <p>Our service includes detailed analysis of each source, offering more than just a summary. We delve into the nuances of the subject matter, providing evaluative comments that help you understand the relevance and credibility of each reference. This approach not only aids in your current research but also equips you with the skills to assess sources critically in future academic pursuits.</p>

                        <p>Beyond the annotations, we also offer guidance on how to integrate this information into your broader research strategy. Our team of experts provides advice on structure, argument development, and how to use your annotated bibliography to build a strong foundation for your thesis, dissertation, or research paper. With our support, your annotated bibliography becomes a comprehensive tool that enhances your academic performance and contributes to your overall educational journey.</p>

                        <h2>Ethical Considerations in Academic Assistance</h2>

                        <p>In providing Annotated Bibliography Services in the UK, we hold ethical considerations at the forefront of our practice. Our commitment to academic integrity underpins every aspect of our service, ensuring that we not only assist but also educate and empower our clients.</p>

                        <p>We strictly adhere to ethical guidelines to avoid any form of plagiarism. Each annotated bibliography is crafted with original insights and critical analyses, ensuring that the work is authentic and adds genuine value to your academic research. Our professional team encourages students to engage with and understand their sources, fostering a deeper appreciation for academic research and ethical writing practices.</p>

                        <p>Moreover, our service includes comprehensive guidance on proper citation and referencing techniques. This not only helps in creating accurate bibliographies but also educates students on how to acknowledge the intellectual property of others respectfully. By instilling these values, we aim to contribute to the development of responsible, ethical scholars who value the importance of academic honesty in their educational journey.</p>

                        <h2>Feedback, Improvement, and Client Engagement</h2>

                        <p>At our Annotated Bibliography Service in the UK, we place immense value on the feedback and engagement of our clients. We believe that continuous improvement and active client participation are essential for delivering services that not only meet but exceed academic expectations.</p>

                        <p>Our process includes a robust feedback mechanism where clients can share their thoughts on the work delivered. This feedback is integral to our service improvement strategy, allowing us to fine-tune our approach and outputs. Whether it’s suggestions on editing, structuring, or the depth of analysis, we take every comment into consideration to enhance our service quality continuously.</p>

                        <p>Beyond just implementing feedback, we encourage ongoing engagement with our clients to understand their evolving academic needs better. This approach ensures that our service remains relevant, tailored, and beneficial to our clients' educational journey. Our goal is to create a collaborative environment where students and academics feel supported, heard, and valued, leading to bibliographies that are not only academically rigorous but also aligned with individual learning objectives.</p>

                        <h2>Empowering Your Research with Expert Annotated Bibliographies</h2>

                        <p>Our Annotated Bibliography Service in the UK is more than just a resource for academic assistance; it's a partnership that empowers your research journey. We understand that each annotated bibliography is a vital component of your academic work, shaping the foundation of your research and enhancing the depth of your study.</p>

                        <p>Our commitment to quality, originality, and ethical standards ensures that each bibliography we craft not only meets but exceeds academic expectations. With our expert guidance, tailored solutions, and comprehensive support, we aim to elevate your research, providing you with the tools and insights necessary for academic success. </p>

                        <p>As you continue on your academic journey, let our service be the cornerstone that supports and enriches your research. With our annotated bibliographies, you're not just completing an assignment; you're building a solid foundation for scholarly excellence.</p>

                    </div>
                </div>

                <div className="notice">
                    <div className="noticeContent">
                        <h3>Notice Regarding Al-Generated Content</h3>
                        <p>We want to be transparent with our readers: certain portions of our content are generated using advanced artificial intelligence. However, please rest assured that all Al-generated content is thoroughly reviewed and refined by our experienced and professional proofreaders and editors to ensure accuracy, relevance, and quality.</p>
                        <p>Our commitment to providing high-quality and trustworthy content remains our top priority. If you have any questions or need further clarification, please learn more here or contact our support team.</p>
                    </div>
                </div>
                <div className="disclimar">
                    {/* <div className="h3">
                    <h3>Disclaimer:</h3>
                </div> */}
                    <p> <span className="h3">Disclaimer:  </span>Our expert's notes are NOT intended to be forwarded as finalized projects, as it is only strictly meant to be used for research and study purposes.
                        We do not endorse or condone any type of plagiarism.</p>

                </div>
            </div >
        </>
    )
}

export default AnnotatedBibliography;