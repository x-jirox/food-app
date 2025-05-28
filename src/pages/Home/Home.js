import React from 'react'
import Layout from '../../components/Layouts/Layout'
import Section1 from './Section1'
import '../../styles/HomeStyle.css'

function Home() {
  return (
    <>
    <Layout>
      {/* Section 1 Hero Banner */}
      <Section1 />
    </Layout>
    </>
  )
}

export default Home
