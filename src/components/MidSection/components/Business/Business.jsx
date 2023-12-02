import React from 'react'
import pdf from '../../../../pdf/BusinessPlan.pdf'

const Business = () => {
    return (
        <div className="pdf-container" >
            <embed className="pdf" src={pdf} type="application/pdf"style={{width: "1266px"}} />
        </div>
    )
}

export default Business