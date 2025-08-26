import React from 'react'
import Banner from './Banner'
import Page from './Page'
import WhyChooseUs from './WhyChooseUs'
import Page2 from './Page2'
import Page3 from './Page3'
import LevelUpPage from './LevelUpPage'
import FirstStep from './FirstStep'
import SuccessStory from './SuccessStory'
import FAQs from './FAQs'
import NoCount from './NoCount'

const HomePages = () => {
  return (
    <div>
        <Banner/>
    <Page/>
    <NoCount/>
    <WhyChooseUs/>
    <Page2/>
    <Page3/>
    <LevelUpPage/>
    <FirstStep/>
    <FAQs/>
    <SuccessStory/>
    </div>
  )
}

export default HomePages
