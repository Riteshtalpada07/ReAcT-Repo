import React from 'react'
import LeftContent from './leftContent'
import RightContent from './rightContent'

const Page1Content = (props) => {
  return (
    <div>
        <div className="h-[90vh] pb-15 pt-3 px-10 flex items-center justify-between">
           <LeftContent />
           <RightContent users={props.users} />
        </div>
    </div>
  )
}

export default Page1Content