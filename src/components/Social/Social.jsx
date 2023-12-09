import React from 'react'
import './social.css'
import { Link } from 'react-scroll'
const Social = () => {
    return (
        <div className="social">
            <div className="sTop">
                <h3>Connect With Us</h3>
                <p>Discover more about our services and join the community of satisfied students by following us on our social media platforms.</p>
            </div>
            <div className="cards">


                <div className="sCard">
                    <div className="icon">

                        <svg xmlns="http://www.w3.org/2000/svg" width="210" height="210" viewBox="0 0 210 210" fill="none">
                            <g filter="url(#filter0_d_103_1831)">
                                <path d="M104.893 44.6875C79.6275 44.6875 72.2384 44.7136 70.8021 44.8327C65.6173 45.2637 62.391 46.08 58.8761 47.83C56.1673 49.1751 54.031 50.7343 51.9227 52.9199C48.0829 56.9058 45.7558 61.8095 44.9134 67.6385C44.5038 70.4683 44.3846 71.0454 44.3604 85.4996C44.3511 90.3177 44.3604 96.6586 44.3604 105.164C44.3604 130.408 44.3884 137.79 44.5094 139.223C44.9283 144.269 45.7195 147.443 47.395 150.915C50.5971 157.561 56.7128 162.551 63.9176 164.412C66.4122 165.055 69.1675 165.408 72.7048 165.576C74.2034 165.641 89.4786 165.687 104.763 165.687C120.048 165.687 135.332 165.669 136.794 165.594C140.889 165.402 143.268 165.082 145.897 164.403C149.47 163.487 152.799 161.802 155.653 159.466C158.507 157.13 160.816 154.199 162.42 150.878C164.063 147.489 164.896 144.194 165.273 139.412C165.355 138.37 165.389 121.748 165.389 105.148C165.389 88.5453 165.352 71.9539 165.27 70.9113C164.888 66.0523 164.055 62.785 162.359 59.3316C160.968 56.5046 159.423 54.3935 157.179 52.2348C153.177 48.4109 148.28 46.0838 142.445 45.2423C139.618 44.8336 139.055 44.7126 124.589 44.6875H104.893Z" fill="url(#paint0_radial_103_1831)" />
                                <path d="M104.893 44.6875C79.6275 44.6875 72.2384 44.7136 70.8021 44.8327C65.6173 45.2637 62.391 46.08 58.8761 47.83C56.1673 49.1751 54.031 50.7343 51.9227 52.9199C48.0829 56.9058 45.7558 61.8095 44.9134 67.6385C44.5038 70.4683 44.3846 71.0454 44.3604 85.4996C44.3511 90.3177 44.3604 96.6586 44.3604 105.164C44.3604 130.408 44.3884 137.79 44.5094 139.223C44.9283 144.269 45.7195 147.443 47.395 150.915C50.5971 157.561 56.7128 162.551 63.9176 164.412C66.4122 165.055 69.1675 165.408 72.7048 165.576C74.2034 165.641 89.4786 165.687 104.763 165.687C120.048 165.687 135.332 165.669 136.794 165.594C140.889 165.402 143.268 165.082 145.897 164.403C149.47 163.487 152.799 161.802 155.653 159.466C158.507 157.13 160.816 154.199 162.42 150.878C164.063 147.489 164.896 144.194 165.273 139.412C165.355 138.37 165.389 121.748 165.389 105.148C165.389 88.5453 165.352 71.9539 165.27 70.9113C164.888 66.0523 164.055 62.785 162.359 59.3316C160.968 56.5046 159.423 54.3935 157.179 52.2348C153.177 48.4109 148.28 46.0838 142.445 45.2423C139.618 44.8336 139.055 44.7126 124.589 44.6875H104.893Z" fill="url(#paint1_radial_103_1831)" />
                                <path d="M104.864 60.5127C92.7297 60.5127 91.2069 60.5658 86.4409 60.7826C81.6843 61.0005 78.4375 61.7535 75.5966 62.8584C72.6579 63.9997 70.1651 65.5262 67.6816 68.0107C65.1962 70.4942 63.6696 72.987 62.5247 75.9247C61.4169 78.7666 60.663 82.0144 60.4489 86.7691C60.2366 91.5351 60.1808 93.0589 60.1808 105.193C60.1808 117.328 60.2348 118.846 60.4507 123.612C60.6695 128.369 61.4225 131.616 62.5265 134.456C63.6687 137.395 65.1953 139.888 67.6797 142.371C70.1623 144.857 72.6551 146.387 75.5919 147.528C78.4347 148.633 81.6824 149.386 86.4381 149.604C91.2041 149.821 92.726 149.874 104.86 149.874C116.995 149.874 118.513 149.821 123.279 149.604C128.036 149.386 131.286 148.633 134.129 147.528C137.067 146.387 139.556 144.857 142.039 142.371C144.524 139.888 146.051 137.395 147.196 134.457C148.294 131.616 149.048 128.368 149.271 123.613C149.485 118.847 149.541 117.328 149.541 105.193C149.541 93.0589 149.485 91.536 149.271 86.7701C149.048 82.0134 148.294 78.7666 147.196 75.9257C146.051 72.987 144.524 70.4942 142.039 68.0107C139.553 65.5253 137.068 63.9987 134.126 62.8584C131.278 61.7535 128.029 61.0005 123.273 60.7826C118.507 60.5658 116.989 60.5127 104.851 60.5127H104.864ZM100.856 68.5645C102.046 68.5627 103.373 68.5645 104.864 68.5645C116.794 68.5645 118.208 68.6073 122.919 68.8214C127.275 69.0206 129.64 69.7486 131.215 70.3601C133.3 71.17 134.786 72.1381 136.349 73.7019C137.913 75.2657 138.881 76.7551 139.693 78.8402C140.304 80.4133 141.033 82.7776 141.232 87.134C141.446 91.8441 141.492 93.259 141.492 105.183C141.492 117.107 141.446 118.522 141.232 123.232C141.032 127.589 140.304 129.953 139.693 131.526C138.883 133.611 137.913 135.096 136.349 136.659C134.785 138.223 133.301 139.191 131.215 140.001C129.642 140.615 127.275 141.341 122.919 141.54C118.209 141.754 116.794 141.801 104.864 141.801C92.9336 141.801 91.5196 141.754 86.8095 141.54C82.4532 141.339 80.0888 140.611 78.5129 140C76.4278 139.19 74.9384 138.222 73.3746 136.658C71.8108 135.094 70.8427 133.608 70.031 131.522C69.4194 129.949 68.6906 127.585 68.4923 123.229C68.2782 118.518 68.2354 117.104 68.2354 105.172C68.2354 93.2404 68.2782 91.8329 68.4923 87.1228C68.6915 82.7665 69.4194 80.4021 70.031 78.8271C70.8409 76.742 71.8108 75.2527 73.3746 73.6888C74.9384 72.125 76.4278 71.1569 78.5129 70.3452C80.0879 69.7309 82.4532 69.0048 86.8095 68.8047C90.9313 68.6185 92.5287 68.5627 100.856 68.5534V68.5645ZM128.714 75.9834C127.654 75.9834 126.617 76.2979 125.735 76.8871C124.854 77.4764 124.166 78.3138 123.761 79.2937C123.355 80.2735 123.249 81.3517 123.456 82.3918C123.663 83.4319 124.174 84.3872 124.924 85.137C125.674 85.8868 126.629 86.3973 127.67 86.604C128.71 86.8106 129.788 86.7042 130.768 86.2981C131.747 85.892 132.585 85.2045 133.173 84.3225C133.762 83.4405 134.077 82.4037 134.076 81.3432C134.076 78.3831 131.675 75.9815 128.714 75.9815V75.9834ZM104.864 82.248C92.1926 82.248 81.9189 92.5218 81.9189 105.193C81.9189 117.865 92.1926 128.134 104.864 128.134C117.536 128.134 127.807 117.865 127.807 105.193C127.807 92.5218 117.536 82.248 104.864 82.248ZM104.864 90.2998C113.089 90.2998 119.758 96.9675 119.758 105.193C119.758 113.418 113.089 120.087 104.864 120.087C96.6384 120.087 89.9707 113.418 89.9707 105.193C89.9707 96.9675 96.6384 90.2998 104.864 90.2998Z" fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_d_103_1831" x="0.658165" y="0.989357" width="208.429" height="208.396" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="21.8491" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_1831" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_1831" result="shape" />
                                </filter>
                                <radialGradient id="paint0_radial_103_1831" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76.5058 175.007) rotate(-90) scale(119.92 111.565)">
                                    <stop stop-color="#FFDD55" />
                                    <stop offset="0.1" stop-color="#FFDD55" />
                                    <stop offset="0.5" stop-color="#FF543E" />
                                    <stop offset="1" stop-color="#C837AB" />
                                </radialGradient>
                                <radialGradient id="paint1_radial_103_1831" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.0826 53.4041) rotate(78.6776) scale(53.6053 221.019)">
                                    <stop stop-color="#3771C8" />
                                    <stop offset="0.128" stop-color="#3771C8" />
                                    <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>

                    <div className="cardTop">
                        <h3>18.3K</h3>
                        <p>Followers</p>
                    </div>
                    <div className="contents">
                        <p>Uncover a treasure trove of writing tips, tricks, and exclusive discounts. Join our vibrant community today and let's embark on a journey of words together.</p>
                    </div>
                    <div className="btn">
                        <a href='https://www.instagram.com/myperfectwriting/'>
                            <button>Follow</button>
                        </a>
                    </div>

                </div>
                <div className="sCard">
                    <div className="icon">

                        <svg xmlns="http://www.w3.org/2000/svg" width="209" height="209" viewBox="0 0 209 209" fill="none">
                            <g filter="url(#filter0_d_103_1844)">
                                <path d="M164.945 158.445C164.945 162.159 161.937 165.167 158.223 165.167H50.6673C46.9533 165.167 43.9451 162.159 43.9451 158.445V50.8892C43.9451 47.1752 46.9533 44.167 50.6673 44.167H158.223C161.937 44.167 164.945 47.1752 164.945 50.8892V158.445Z" fill="url(#paint0_linear_103_1844)" />
                                <path d="M134.922 77.7779H143.778V65.1603C142.125 64.9452 138.632 64.478 132.031 64.478C118.247 64.478 110.167 71.4691 110.167 87.3974V97.9446H96.7228V111.389H110.167V148.361H126.973V111.389H140.209L142.286 97.9446H126.973V89.6595C126.973 83.3607 129.03 77.7779 134.922 77.7779Z" fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_d_103_1844" x="0.246925" y="0.468849" width="208.396" height="208.396" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="21.8491" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.41 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_1844" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_1844" result="shape" />
                                </filter>
                                <linearGradient id="paint0_linear_103_1844" x1="44.7114" y1="40.4563" x2="165.204" y2="169.98" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0D61A9" />
                                    <stop offset="1" stop-color="#16528C" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <div className="cardTop">
                        <h3>43.0K</h3>
                        <p>Followers</p>
                    </div>
                    <div className="contents">
                        <p>Embark on a literary adventure with us! Uncover writing secrets, masterful tips, and enjoy exclusive discounts. Join our thriving community now and let the storytelling begin.</p>

                    </div>
                    <div className="btn">
                        <a href='https://www.facebook.com/MyPerfectWritingUK'>
                            <button>Follow</button>
                        </a>
                    </div>

                </div>
                <div className="sCard">
                    <div className="icon">

                        <svg xmlns="http://www.w3.org/2000/svg" width="210" height="210" viewBox="0 0 210 210" fill="none">
                            <g filter="url(#filter0_d_103_1856)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M71.3431 44.6436H138.001C145.276 44.6644 152.247 47.5635 157.39 52.7074C162.534 57.8512 165.433 64.8218 165.454 72.0963V138.201C165.431 145.473 162.531 152.442 157.387 157.583C152.243 162.725 145.274 165.623 138.001 165.644H71.3431C64.0703 165.623 57.1012 162.725 51.9576 157.583C46.814 152.442 43.9138 145.473 43.8903 138.201V72.0963C43.9112 64.8218 46.8102 57.8512 51.9541 52.7074C57.098 47.5635 64.0686 44.6644 71.3431 44.6436Z" fill="#160C1A" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M120.629 59.5425C122.104 72.1361 129.652 81.02 141.83 81.8114V93.7521V83.6119C129.573 82.8304 122.559 75.3118 121.055 62.728H108.194V115.704C110.064 139.556 91.485 140.269 84.372 131.226C92.6622 136.44 106.216 133.047 104.593 112.529V59.5425H120.629ZM85.8856 147.381C82.2327 146.658 78.7655 145.199 75.6954 143.091C72.6253 140.984 70.0168 138.273 68.0289 135.124C58.5515 119.622 67.099 94.3457 94.5914 91.7439V95.4735C69.0578 99.5395 66.4955 126.913 73.569 138.31C76.4513 142.719 80.8283 145.941 85.8955 147.381H85.8856Z" fill="#26F4EE" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M124.31 63.4995C125.151 70.6719 127.792 76.9044 132.155 81.099C126.002 77.9234 122.321 71.8887 121.154 63.4995H124.31ZM141.761 86.1938C142.833 86.4263 143.921 86.5752 145.016 86.639V100.756C137.932 101.459 131.73 99.1238 124.508 94.8204L125.616 119.038C125.616 126.854 125.616 130.425 121.451 137.627C111.222 155.157 92.1185 155.147 80.801 145.165C95.5513 153.634 121.303 147.005 121.253 118.237V91.7734C128.475 96.1164 134.678 98.4412 141.761 97.7091V86.1938ZM94.5225 96.3934C96.0653 96.0759 97.624 95.8415 99.1919 95.691V110.629C93.2562 111.619 89.4573 113.439 87.6865 116.812C82.74 126.339 87.914 134.095 94.8094 136.598C86.1828 136.282 77.6353 127.427 83.571 116.07C85.3419 112.687 88.5175 110.867 94.5225 109.877V96.3934Z" fill="#FB2C53" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M121.055 62.6987C122.529 75.3122 129.553 82.811 141.761 83.5925V97.7493C134.678 98.4418 128.475 96.1169 121.253 91.8135V118.237C121.312 152.783 84.1546 155.445 73.5692 138.28C66.5155 126.894 69.0778 99.5102 94.5619 95.4541V109.828C88.6261 110.818 85.3813 112.638 83.6104 116.021C72.7283 136.915 110.796 149.351 108.165 115.685V62.6987H121.055Z" fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_d_103_1856" x="0.192177" y="0.945412" width="208.96" height="208.396" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="21.8491" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_1856" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_1856" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </div>

                    <div className="cardTop">
                        <h3>23.5K</h3>
                        <p>Followers</p>
                    </div>
                    <div className="contents">
                        <p>Dive into a world of words! Unlock writing hacks, creative tips, and exclusive deals. Join our TikTok tribe and let's turn every scroll into a storytelling journey.</p>
                    </div>
                    <div className="btn">
                        <a href='https://www.tiktok.com/@myperfectwriting.co.uk'>
                            <button>Follow</button>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Social