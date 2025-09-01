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
import { Helmet } from 'react-helmet-async'

const HomePages = () => {
  return (
    <>
    <Helmet>
     <title>GradeUp – Online Test Papers & Exam Practice</title>
     </Helmet>
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
    </>
  )
}

export default HomePages
