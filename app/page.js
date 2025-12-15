import AboutMe from '@/components/AboutMe'
import Intro from '@/components/Intro'
import MyProject from '@/components/MyProject'
import ResumeSection from '@/components/ResumeSection'

const page = () => {
  return (
    <div >
      <Intro/>
      <AboutMe/>
      <MyProject/>
      <ResumeSection/>
    </div>
  )
}

export default page