import CardContent from './CardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-[30%] shrink-0 overflow-hidden relative rounded-3xl'>

     <img className='h-full w-full object-cover rounded-4xl' src={props.img} alt="" />
     
     <CardContent id={props.id} tag={props.tag} intro={props.intro}/>
    </div>
  )
}

export default RightCard