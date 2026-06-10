import React from 'react'
import Card from './components/card'
const App = () => {
  return (
    <div className='parent'>
    <Card user='Ritesh' img='https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6557420216a456cfaef685c0_6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1-p-1080.jpg' />
    <Card user='Jay' img='https://scalar.usc.edu/works/adobe/media/ADO_Webjpg_Photoshop.jpg'/>
    <Card user='Vashu' img='https://www.qualtrics.com/sites/default/files/styles/max_650x650/public/migrations/articles_main_image/mathilda-khoo-HLA3TAFQuQs-unsplash-scaled.webp?itok=jgzJgEhN'/>
    
    </div>
    
    
  )
}

export default App