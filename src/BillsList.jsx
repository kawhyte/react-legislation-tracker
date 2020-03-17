import React from 'react'

export default function BillsList({bill}) {
    return (
        <div>
            {bill.map((b,index) => (

              <div key={index}>{b}</div>  
            )
                
                
                
                )}
        </div>
    )
}
