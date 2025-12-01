import React from 'react'
import {Button} from '@/components/ui/button'
const App = () => {
  return (
    <div className='min-h-screen justify-center items-center w-full bg-stone-950 p-2'>
        <header className='flex items-center justify-center p-10 border-b border-stone-800 '>
          <div className='text-red-800'>⚠️ DOSSIER CONFIDENTIEL • NE PAS PARTAGER</div>
         
        </header>
        <main className='text-white  my-10 justify-center items-center w-1/2 flex'>
          <div>
            <div className='text-2xl'>
              Vous ne devinerez jamais ce que je vien de faire en pleine réunion  du comité de direction ...
           
            </div>
            <div className='mt-10 border-l border-yellow-600 pl-5'>
              Je suis une stagiaire de 20 ans, mariée à un homme terriblement ennuyeux. Il est tellement obsédé par son boulot qu'il n'a plus le temps pour les histoires de lit, et il ne me demande même jamais si j'ai envie de sexe. Ça paraît dingue que j'aie choisi de l'épouser, non ? C'est juste que je ne pensais pas qu'il préférerait son travail au cul.

              
            </div>
            <img src="1.png" alt=""  className='w-100'/>
          </div>
          
          </main>

    </div>
  )
}

export default App