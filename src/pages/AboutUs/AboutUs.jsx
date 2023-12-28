import React from 'react'
import './about.css'
import { Helmet } from 'react-helmet'

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>About Us | My Perfect Writing's Vision & Team</title>
                <meta name="description" content="Discover My Perfect Writing's journey to academic excellence. Meet our team and explore our commitment to quality essay writing service in UK." />

                <meta name="keywords" content="My Perfect Writing About Us, Academic Writing Experts UK, Essay Service Team UK, My Perfect Writing Vision"></meta>


                <script type="application/ld+json">
                    {`
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "Home",
      "item": "https://myperfectwriting.co.uk/"  
    },{
      "@type": "ListItem", 
      "position": 2, 
      "name": "About Us",
      "item": "https://myperfectwriting.co.uk/about-our-service"  
    }]
  }`}
                </script>
            </Helmet>
            <div className="aboutUsContainer">
                <h1 className='aboutUsHeading'>About Us</h1>

                <section class="welcomSec">
                    <div class="welcomContainer">
                        <div class="welcomeWrapper  welcomflex">
                            <div class="welcomtextLeft">
                                <h2>Welcome to Myperfectwriting.co.uk</h2>
                                <span>Welcome to My Perfect Writing, the cradle of academic excellence and your ultimate pit stop for a roller coaster ride through the world of learning and creativity! We’re not just an Essay Writing Service in UK; we're your academic allies, transforming your caffeinated cram sessions into a carnival of insights, ideas, and top-notch grades.</span>
                            </div>
                            <div class="welcomrightImage">
                                <img src="./images/about4.png" alt='about-us-image' />
                            </div>
                        </div>

                    </div>
                </section>

                {/* our story section  */}

                <section class="ourStory">
                    <div class="OurStorycontainer">
                        <div class="ourStoryWrapper">
                            <div class="ourwelcomeWrapper  flex-r">
                                <div class="ourstorytextLeft">
                                    <h2>Our Founding Story</h2>
                                    <span>Born out of a blend of ambition and innovation in 2020, My Perfect Writing burst onto the UK academic scene, ready to shake things up! 💥 We were the new kids on the block in the bustling world of essay and dissertation services, but what we lacked in years, we made up for with our pioneering fixed-pricing system, ensuring affordability and transparency in every pixel of our service. Our mission was crystal clear: to sprinkle a touch of academic magic on every student's journey, ensuring quality doesn’t have to break the bank!</span>
                                </div>
                                <div class="welcomrightImage">
                                    <img src="./images/about1.png" alt="Our Story" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* our mission section  */}

                <section class="welcomSec ourMission">
                    <div class="Missioncontainer">
                        <div class="welcomeWrapper ourMissionWrapper Missionflex">
                            <div class="textLeft">
                                <h2>Igniting Academic Excellence: Our Heartbeat!</h2>
                                <span>At <strong>My Perfect Writing</strong>, we're on a relentless quest to transform essay writing services in the UK into a symphony of success and support, crafting a world where every student’s academic potential is recognised and nurtured to flourish.</span>
                            </div>
                            <div class="rightImage">
                                <img src="./images/about2.png" alt="Welcome to Myperfectwords.com" />
                            </div>
                        </div>

                    </div>
                </section>


                {/* our team section  */}

                <section class="ourTeam">
                    <div class="OurTeamcontainer">
                        <div class="ourTeamWrapper">
                            <h2>Meet the Brains Behind the Brilliance!</h2>
                            <div class="membersWrapper">
                                <div class="singleMember">
                                    <img src="./images/team/img1.jpg" alt="Benjamin" />
                                    <p>Olivia Turner</p>
                                    <span>Chief Academic Officer (PhD in English Literature, University of Oxford)</span>
                                </div>
                                <div class="singleMember">
                                    <img src="./images/team/img2.jpg" alt="Lillith" />
                                    <p>Ethan Davis</p>
                                    <span>Senior Essay Specialist (MA in Creative Writing, University of Cambridge)</span>
                                </div>
                                <div class="singleMember">
                                    <img src="./images/team/img3.jpg" alt="Bryan" />
                                    <p>Charlotte Johnson</p>
                                    <span>Head of Research and Development (PhD in Educational Psychology, Imperial College London)</span>
                                </div>
                                <div class="singleMember">
                                    <img src="./images/team/img4.jpg" alt="Dustin" />
                                    <p>Dustin</p>
                                    <span>Customer Support Representative</span>
                                </div>
                                <div class="singleMember">
                                    <img src="./images/team/img5.jpg" alt="Nova" />
                                    <p>Noah Wilson</p>
                                    <span>Lead Thesis and Dissertation Expert (PhD in History, London School of Economics)</span>
                                </div>
                                <div class="singleMember">
                                    <img src="./images/team/img6.jpeg" alt="Scarlett" />
                                    <p>Isabella White</p>
                                    <span>Assignment Maestro (MSc in Academic Practice, University College London)</span>
                                </div>

                            </div>
                            <div class="editorial-section">
                                <h2>Our Editorial Board Members</h2>
                                <div class="editorialWrapper">
                                    <div class="editorial-writer">
                                        <div class="editorial-content">
                                            <img src="./images/team/board/img1.jpg" alt="Rylee Willow" />
                                            <a href="#" class="editorial-name">Prof. Amelia Brown</a>
                                            <p class="editorial-level">DPhil in Modern Languages</p>
                                            <span>, University of Oxford</span>
                                        </div>
                                        <div class="editorial-content">
                                            <img src="./images/team/board/img2.jpg" alt="Chris Henry" />
                                            <a href="#" class="editorial-name">Dr. Oliver Smith</a>
                                            <p class="editorial-level">PhD in Comparative Literature</p>
                                            <span>King’s College London</span>
                                        </div>
                                        <div class="editorial-content">
                                            <img src="./images/team/board/img3.jpg" alt="Melisa Cronin" />
                                            <a href="#" class="editorial-name">Dr. Emily Taylor</a>
                                            <p class="editorial-level">EdD in Higher Education Management</p>
                                            <span>University of Bath</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="editorial-section">
                                <h2>Your Go-To Help Hub</h2>
                                <div class="editorialWrapper">
                                    <div class="editorial-writer">
                                        <div class="editorial-content">
                                            <img src="./images/team/helphub/img1.jpg" alt="Rylee Willow" />
                                            <a href="#" class="editorial-name">Kate Sharmin</a>
                                            <p class="editorial-level">Senior Support Specialist </p>
                                            <span>Customer Relationship Management</span>
                                        </div>
                                        <div class="editorial-content">
                                            <img src="./images/team/helphub/img2.jpg" alt="Chris Henry" />
                                            <a href="#" class="editorial-name">Grace Mitchell</a>
                                            <p class="editorial-level">Chief Quality Officer </p>
                                            <span>Academic Quality Control & Assurance</span>
                                        </div>
                                        <div class="editorial-content">
                                            <img src="./images/team/helphub/img3.jpg" alt="Melisa Cronin" />
                                            <a href="#" class="editorial-name">Emma Taylor</a>
                                            <p class="editorial-level">Head of Sales</p>
                                            <span>Strategic Sales & Market Expansion</span>
                                        </div>
                                        <div class="editorial-content">
                                            <img src="./images/team/helphub/img4.jpg" alt="Melisa Cronin" />
                                            <a href="#" class="editorial-name">Jack White</a>
                                            <p class="editorial-level">Dispute Resolution Specialist</p>
                                            <span>Conflict Management & Resolution</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* hiring section  */}

                <section class="hiringExperts">
                    <div class="Hiringcontainer">
                        <div class="hiringHead">
                            <h2>The Craftsmanship Behind Our Essay Writing Service: Selecting the UK’s Finest</h2>
                            <p>At My Perfect Writing, we are incredibly picky about who joins our league of academic wizards! Here’s a peek behind the curtain at our meticulous hiring process:</p>
                        </div>
                        <div class="hiringExpertsWrapper">
                            <div class="hiringExpertsLeft">
                                <img src="./images/about3.png" alt="writing Experts" />
                            </div>
                            <div class="hiringSteps">
                                <ul>
                                    <li>
                                        <b>Proof of Identity</b>
                                        <br />
                                        No secret agents here! We ensure every potential writer is who they say they are.
                                    </li>
                                    <li>
                                        <b>Verification of Qualifications</b>
                                        <br />
                                        We scrutinise educational credentials, leaving no room for imposters. Only the genuine and the qualified make the cut.
                                    </li>
                                    <li>
                                        <b>Assessment of Writing Samples</b>
                                        <br />
                                        A showcase of skills and adaptability is a must. Our Quality Assurance team dives deep into the writing samples, looking for that spark of brilliance.
                                    </li>
                                    <li>
                                        <b>Essay Writing Trial</b>
                                        <br />
                                        Think of it as a writer's audition on steroids. We set challenging tasks to truly gauge their prowess and passion for academic writing.
                                    </li>
                                    <li>
                                        <b>One Month on Probation</b>
                                        <br />
                                        The final hurdle! A month-long trial to prove they’re the right fit for providing unparalleled assignment support and essay writing help in the UK.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* our writing process  */}
                <section class="writingProcess">
                    <div class="writingcontainer">
                        <div class="writingProcessWrapper">
                            <div class="writingProcessHead">
                                <div class="writingProcessText">
                                    <h2>From Quill to Quality: Our Exquisite Essay Journey</h2>
                                    <span>Embark on a literary adventure with My Perfect Writing, where each step is a stride towards excellence in essay assistance!</span>
                                </div>
                                <div class="writingProcessImage">
                                    <img src="./images/about5.png" alt="Our Writing Process" />
                                </div>
                            </div>
                            <div class="writingProcessSteps">
                                <div class="singleStep">
                                    <div class="stepIcon">
                                        <img width="39" height="27" src="https://myperfectwords.com/new-land/images/writing-step-1.svg" alt="Check Your Requirements" />
                                    </div>
                                    <div class="stepDescription">
                                        <p><span>Step 1:</span>Decoding Your Needs</p>
                                        <span>We don’t just read; we listen to what you need, ensuring each requirement is a stepping stone to perfection.</span>
                                    </div>
                                </div>
                                <div class="singleStep">
                                    <div class="stepIcon">
                                        <img width="39" height="39" src="https://myperfectwords.com/new-land/images/writing-step-2.svg" alt="Discuss Them With You" />
                                    </div>
                                    <div class="stepDescription">
                                        <p><span>Step 2:</span>A Tête-à-Tête with Your Writer</p>
                                        <span>Your assigned maestro of words will delve into understanding your style and expectations, ensuring a tailor-made essay.</span>
                                    </div>
                                </div>
                                <div class="singleStep">
                                    <div class="stepIcon">
                                        <img width="39" height="39" src="https://myperfectwords.com/new-land/images/writing-step-3.svg" alt="Conduct Relevant Research" />
                                    </div>
                                    <div class="stepDescription">
                                        <p><span>Step 3:</span>Diving Deep into Research</p>
                                        <span>Armed with intellect and insight, we plunge into the sea of knowledge, fishing out the most relevant gems for your essay.</span>
                                    </div>
                                </div>
                                <div class="singleStep">
                                    <div class="stepIcon">
                                        <img width="39" height="39" src="https://myperfectwords.com/new-land/images/writing-step-4.svg" alt="Outline &amp; Write Your Essay" />
                                    </div>
                                    <div class="stepDescription">
                                        <p><span>Step 4:</span>Crafting and Structuring</p>
                                        <span>Watch as your essay takes shape, from a robust introduction to a compelling body, all the way to a satisfying conclusion.</span>
                                    </div>
                                </div>
                                <div class="singleStep">
                                    <div class="stepIcon">
                                        <img width="39" height="39" src="https://myperfectwords.com/new-land/images/writing-step-5.svg" alt="Quality Assurance Check" />
                                    </div>
                                    <div class="stepDescription">
                                        <p><span>Step 5:</span>Quality Assurance Waltz</p>
                                        <span>Our vigilant Quality Assurance team steps in, ensuring your essay is free from plagiarism and brimming with quality.</span>
                                    </div>
                                </div>
                                <div class="singleStep">
                                    <div class="stepIcon">
                                        <img width="39" height="39" src="https://myperfectwords.com/new-land/images/writing-step-6.svg" alt="Submit and Revise Your Essay" />
                                    </div>
                                    <div class="stepDescription">
                                        <p><span>Step 6:</span>The Grand Finale and Revisions</p>
                                        <span>Your masterpiece awaits! And remember, if there’s anything you’d like to tweak, our unlimited revisions are at your service.</span>
                                    </div>
                                </div>
                            </div>

                            {/* quality section  */}
                            <div class="qualityEthics">
                                <div class="qualityEthicsWrapper">
                                    <div class="qualityEthicsLeft">
                                        <img src="./images/about7.png" alt="Commitment to Quality &amp; Ethics" />
                                    </div>
                                    <div class="qualityEthicsText">
                                        <h2>Commitment to Quality and Ethics</h2>
                                        <span>At My Perfect Writing, we’re not just about words; we’re about action! We stand firmly on the grounds of academic integrity, ensuring every piece of work is a beacon of originality with our strict no-plagiarism policy. Your trust is our treasure, and we protect it with free revisions and a commitment to perfection, because in the world of academic writing in the UK, we believe in giving you nothing but the best!</span>
                                    </div>
                                </div>
                            </div>
                            <div class="communityOutreach">
                                <div class="communityOutreachWrapper">
                                    <div class="communityOutreachText">
                                        <h3>Elevating the Essay Writing Service in the UK to New Heights</h3>
                                        <span>At My Perfect Writing, our eyes are set on the horizon, dreaming big and aiming high to revolutionise academic support across the UK and beyond. We’re on a thrilling journey, steadfast in our mission to empower every student with top-notch writing assistance and unwavering support. The future is bright, and we're just getting started!</span>
                                    </div>
                                    <div class="communityOutreachImage">
                                        <img src="./images/about6.png" alt="Commitment to Quality &amp; Ethics" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default AboutUs