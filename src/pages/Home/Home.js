import React from 'react'
import Layout from '../../components/Layouts/Layout'
import '../../styles/HomeStyle.css'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'

function Home() {
  return (
    <>
    <Layout>
      {/* Section 1 Hero Banner */}
      <Section1 />
      {/* Section 2 About */}
      <Section2 />
      {/* Section 3 menu */}
      <Section3 />
      {/* Section 4 promotion */}
      <Section4 />
    </Layout>
    </>
  )
}

export default Home
