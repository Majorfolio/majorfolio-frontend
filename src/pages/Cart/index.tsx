import React from 'react'

import PaymentSelectAllBar from '../../components/home/PaymentSelectAllBar'
import PaymentPostCard from '../../components/home/PaymentPostCard'
import PaymentCouponSection from '../../components/home/PaymentCouponSection'
import PaymentAmountDetailSection from '../../components/home/PaymentAmountDetailSection'
import AllDivider from '../../components/common/AllDivider'

const Cart = () => {
  return (
    <>
      <PaymentSelectAllBar />
      <PaymentPostCard />
      <AllDivider />
      <PaymentCouponSection />
      <AllDivider />
      <PaymentAmountDetailSection />
    </>
  )
}

export default Cart