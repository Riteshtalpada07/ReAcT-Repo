import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
const App = () => {
  const users = [
     {
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0",
    intro:
      "Customer segmentation became much easier with this platform. The insights helped us target the right audience effectively.",
    tag: "Satisfied",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "The analytics dashboard provided clear and actionable data, helping us improve engagement and conversions.",
    tag: "Trusted",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "Accurate customer insights and seamless reporting made decision-making faster and more effective.",
    tag: "Recommended",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "Accurate customer insights and seamless reporting made decision-making faster and more effective.",
    tag: "Recommended",
  },
  ]
  return (
    <div>
      <Section1 users = {users}/>
      <Section2 /> 
      
      

    </div>
  )
}

export default App