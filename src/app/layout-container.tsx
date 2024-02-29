'use client';

import { FunctionComponent, useEffect, useState } from 'react';

type Props = {
  children?: React.ReactNode;
};

export const LayoutProvider:FunctionComponent<Props> = ({ children }) => {    
    const [ navbarHeight, setNavHeight ] = useState(0);

    useEffect(() => {
        setCusomVh();
        window.addEventListener('resize', setCusomVh);
    
        return ()=>window.removeEventListener('resize', setCusomVh);
    }, []);

    /*
    * create custom '--vh' unit which based on windows.innerHeight
    * to make sure link bar on mobile devices height is also calculated
    * when a container height unit is vh
    */
    const setCusomVh = () => {
        const vh = window?window.innerHeight * 0.01:0;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        const vw = window?window.innerWidth * 0.01:0;
        document.documentElement.style.setProperty('--vw', `${vh}px`);
    }

    return (
        <>
            <div className='flex flex-col w-screen h-screen'>
                
                {children}
                
            </div>
            <style jsx>
                {
                    `
                    .minHeightFitScreen {
                        height: calc((var(--vh, 1vh) * 100) - ${navbarHeight});                        
                        overflow:auto;
                    }                    
                    `
                }
            </style>
        </>
    );
};
