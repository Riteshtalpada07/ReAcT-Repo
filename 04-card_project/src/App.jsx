import React from 'react'
import './App.css'
import Card from './components/card'

const App = () => {
  const jobs = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://static.vecteezy.com/system/resources/thumbnails/014/018/561/small_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    posted: "5 days ago",
    title: "Senior UI/UX Designer",
    type: "Part Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
  },
  {
    id: 2,
    company: "Google",
    logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
    posted: "2 days ago",
    title: "Frontend Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$100/hr",
    location: "Bangalore, India",
  },
  {
    id: 3,
    company: "Microsoft",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    posted: "1 week ago",
    title: "Backend Engineer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$140/hr",
    location: "Hyderabad, India",
  },
  {
    id: 4,
    company: "Netflix",
    logo: "https://cdn-icons-png.flaticon.com/512/5977/5977590.png",
    posted: "3 days ago",
    title: "Product Designer",
    type: "Remote",
    level: "Junior Level",
    salary: "$90/hr",
    location: "Delhi, India",
  },
];
  return (
    <div className='parent'>
     {jobs.map((elem) => (
       <Card key={elem.id} job={elem} />
      ))}
       
    </div>
  )
}

export default App