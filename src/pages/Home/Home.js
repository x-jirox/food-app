import React from 'react'
import Layout from '../../components/Layouts/Layout'
import Section1 from './Section1'
import '../../styles/HomeStyle.css'
import Section2 from './Section2'

function Home() {
  return (
    <>
    <Layout>
      {/* Section 1 Hero Banner */}
      <Section1 />
      {/* Section 2 About */}
      <Section2 />
    </Layout>
    </>
  )
}

export default Home
