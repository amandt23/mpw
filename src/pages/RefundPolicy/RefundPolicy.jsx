import React from 'react'
import '../TermAndConditions/termcondition.css';
import Navbar from '../../components/Navbar/Navbar';
import { Helmet } from 'react-helmet';

const RefundPolicy = () => {
    return (
        <>
            <Helmet>

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
    }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Refunds and Cancellations",
        "item": "https://myperfectwriting.co.uk/refund-policy"
    }]
}`}
                </script>
            </Helmet>
            <div className="termsMain">
                <div className="termsContents">

                    <div className="termTop">
                        <h3>Refunds And Cancellations</h3>
                        <p>This document elucidates the comprehensive Refunds and Cancellations Policy of My Perfect Writing, accessible via myperfectwriting.co.uk. By engaging with our services, you implicitly agree to the terms and conditions outlined herein. These policies are crafted with due diligence to ensure clarity and fairness in our transactions, and we encourage our clients to peruse this document thoroughly to understand the stipulations associated with order cancellations, late deliveries, quality disputes, and refunds.</p>
                    </div>
                    <hr />

                    <div className="termSection">
                        <h3>Order Cancellation</h3>
                        <p><b>No Writer Assigned Yet:</b> In instances where a cancellation request is submitted prior to the allocation of a writer, the client is eligible for full compensation. The reimbursement may be processed either through crediting the amount to the client's account on our website or a direct bank transfer, as per the client’s preference.</p>
                        <p><b>Writer Assigned:</b> Post the assignment of a writer to an order, cancellation requests will render the client ineligible for a refund. The invested funds will instead be credited to the client’s account balance on our website, and these funds are strictly non-refundable.</p>

                    </div>
                    <div className="termSection">
                        <h3>Late Delivery</h3>
                        <p><b>Claiming Compensation:</b> In the unfortunate event of a delay in delivery, clients reserve the right to claim Time Delivery Difference Compensation, calculated based on the initial deadline, the extent of the delay, and other pertinent factors.</p>
                        <p><b>Exemptions:</b> Compensation for late delivery will not be entertained under the following circumstances:</p>
                        <p>Delays attributed to actions or inactions of the client, including but not limited to payment delays, tardiness in submitting requisite materials, or delayed responses to our communications.<br />
                            Situations where the client encounters technical issues on their end, such as internet connectivity issues, browser problems, or system failures.</p>
                    </div>
                    <div className="termSection">
                        <h3>Quality Concerns</h3>
                        <p><b>Compensation for Quality Issues:</b> Clients dissatisfied with the quality of the delivered work are encouraged to contact our Quality Assurance Team. The team will conduct a thorough investigation, and compensation, if deemed appropriate, will be calculated as a percentage correlating to the identified errors in the work.</p>
                        <p><b>Conditions and Exclusions:</b> Compensation requests will be considered invalid under the following conditions:</p>
                        <p>Dissatisfaction stemming from a poor grade or academic performance.<br />
                            Instances where the client has used the provided drafts for purposes other than referencing.<br />
                            Plagiarism claims require a valid Turnitin report for verification. No other plagiarism reports will be accepted, and failure to provide this specific report will render the compensation claim invalid.</p>
                    </div>
                    <div className="termSection">
                        <h3>Processing Of Refunds</h3>
                        <p>Upon confirmation of a refund, My Perfect Writing will initiate the refund process within seven days. It is crucial to note that the company bears no responsibility for any fees associated with bank transfers, transfer issues, or delays due to banking service irregularities. All refunds will be processed through the Original Mode of Payment only.</p>
                    </div>
                    <div className="termSection">
                        <h3>Subscription And Recurring Payments</h3>
                        <p>My Perfect Writing operates on a non-subscription basis. We do not provide or require recurring payments, and there are no subscription packages or periodic payment plans associated with our services. Clients are billed per transaction, ensuring transparency and simplicity in our financial interactions.</p>
                    </div>
                    <div className="termSection">
                        <h3>30 Days Money Back Guarantee</h3>
                        <p>Our commitment to client satisfaction is underscored by our 30 Days Money Back Guarantee. Clients are entitled to a full refund in the following scenarios:<br />
                            Inability of My Perfect Writing to deliver the work within the stipulated timeline or according to the specified requirements.<br />
                            Failure of our services to meet the client's expectations or requirements.<br />
                            Clients wishing to initiate a refund request under this guarantee should contact our support team via phone or live chat to discuss and formalize their request.</p>
                    </div>
                    <div className="termSection">
                        <h3>Contact And Inquiries</h3>
                        <p>For any inquiries or further clarification regarding our Refunds and Cancellations Policy, please do not hesitate to contact our customer support. We are committed to providing transparency and assistance to ensure your experience with My Perfect Writing is nothing short of exemplary.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RefundPolicy