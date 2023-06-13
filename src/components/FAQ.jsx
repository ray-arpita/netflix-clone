
import module from './FAQ.module.css'


import { Fade } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react';


const FAQ = () => {


const { isOpen, onToggle } = useDisclosure()

  return (
    <div className={module.component}  >
      <div>

      <div  className={module.qus} onClick={onToggle}>
      
What is Netflix?

      </div>
      <Fade in={isOpen}>
      <div className={module.ans} >
   Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br/>

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!


      </div>
      </Fade>

      <div  className={module.qus} onClick={onToggle}>
 
        How much does Netflix cost?


</div>
<Fade in={isOpen}>
<div className={module.ans}>
 
Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
  </div>
  </Fade>
  </div>
  
      <div>
<div className={module.qus} onClick={onToggle}>

What can I watch on Netflix?    
     


</div>
<Fade in={isOpen}>
<div className={module.ans}>

Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
   </div>
   </Fade>

<div  className={module.qus} onClick={onToggle}>

Is Netflix good for Kids?


</div>
<Fade in={isOpen}>
<div className={module.ans}>

The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.<br/>

Kids profiles come with PIN-protected parental controls that let you restrict the ma0turity rating of content kids can watch and block specific titles you don’t want kids to see.
  </div>
  </Fade>
  </div>


    </div>
  )
}
export default FAQ;
