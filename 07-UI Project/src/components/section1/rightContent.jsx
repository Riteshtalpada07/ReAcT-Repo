import RightCard from './RightCard'

const rightContent = (props) => {
  return (
    <div  id='right' className='h-full  w-[65%] p-4 overflow-x-auto flex flex-nowrap gap-10'>
      {props.users.map((user,idx)=>{
        return <RightCard key={idx} id={idx} img={user.image} tag={user.tag} intro={user.intro}/>
      })}
    </div>
  )
}

export default rightContent