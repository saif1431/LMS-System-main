import React from 'react'
import HomeLandingPage from '../components/HomeLandingPage'
import HomeFacilities from '../components/HomeFacilities'
import HomeCourses from '../components/HomeCourses'
import HomeFeatures from '../components/HomeFeatures'
import ReviewSection from '../components/ReviewSection'

function Home() {
  return (
    <div>
     <HomeLandingPage/>
     <HomeFacilities/>
     <HomeCourses/>
     <HomeFeatures/>
     <ReviewSection/>
    </div>
  )
}

export default Home
