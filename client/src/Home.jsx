import {motion, AnimatePresence } from 'framer-motion';
import {useSnapshot} from 'valtio';
import state from './store';
import { CustomButton } from './components';
import {
headContainerAnimation,
headContentAnimation,
headTextAnimation,
slideAnimation
} from'./config/motion';


import React from 'react'

const Home = () => {
  const snap = useSnapshot(state);
  return (
                
               
                
    <AnimatePresence className=''> 
          {/* component by framer motion that allows us to enable the animation of the component that has been removed from the tree */}

          {
          snap.intro && 
          (
            <motion.section  className = "home absolute" {...slideAnimation('left')}>
              <motion.header  {...slideAnimation("down")}>
                <img src="../public/threejs.png"
                 alt="logo"
                 className="w-8 h-8"
                 />
              </motion.header> 
              <motion.div className="home-content" {...headContainerAnimation}>
                <motion.div {...headTextAnimation}> 
                  <h1 className="head-text">
                    LETS'S <br className="xl:block hidden"/>DO IT.
                  </h1>

            </motion.div> 
              <motion.div {...headContentAnimation} className="flex flex-col gap-5">
                <p className='max-w-md font-serif text-gray-600 text-base'>
                  Produce your own Unique T-Shirt with 3D customization tool. <br />
                  <strong>Soar up your senses</strong> 
                </p>
                <CustomButton 
                //custombutton takes in some props as follows:-
                
                type="filled"
                title="Customize It"
                handleClick={ () => state.intro = false }
                customStyles= "w-fit px-4 py-2.5 font-bold text-sm"
                />
              </motion.div>

                </motion.div>
            </motion.section>
          )}
    </AnimatePresence>
  
  )
}

export default Home