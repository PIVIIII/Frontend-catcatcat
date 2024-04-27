'use client'

import { useRef, useEffect, useState} from "react"
import PremiumMenu from './PremiumMenu'
import styles from './banner.module.css'

export default function VideoPlayer({vdoSrc, isPlaying}: {vdoSrc:string, isPlaying:boolean}) {

    const vdoRef = useRef<HTMLVideoElement>(null)
    const [vdoMuted, setVdoMuted] = useState(true);
    
    useEffect(()=>{
        if(isPlaying) {
            vdoRef.current?.play()
        }
        else {
            vdoRef.current?.pause()
        }
    }, [isPlaying])

    useEffect(() => {
        vdoRef.current!.muted = vdoMuted
    }, [vdoMuted]);

    const handleMuteToggle = () => {
        setVdoMuted(!vdoMuted)
    };

    return (
        <div className="w-full">
            {
                vdoMuted?
                <svg className="w-6 h-6 text-amber-50 dark:text-amber-50 z-10 absolute top-7 left-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" onClick={handleMuteToggle}>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 8.43A4.985 4.985 0 0 1 19 12a4.984 4.984 0 0 1-1.43 3.5M14 6.135v11.73a1 1 0 0 1-1.64.768L8 15H6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l4.36-3.633a1 1 0 0 1 1.64.768Z"/>
                </svg> :
                <svg className="w-6 h-6 text-amber-50 dark:text-amber-50 z-10 absolute top-7 left-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" onClick={handleMuteToggle}>
                    <path d="M13 6.037c0-1.724-1.978-2.665-3.28-1.562L5.638 7.933H4c-1.105 0-2 .91-2 2.034v4.066c0 1.123.895 2.034 2 2.034h1.638l4.082 3.458c1.302 1.104 3.28.162 3.28-1.562V6.037Z"/>
                    <path fill-rule="evenodd" d="M14.786 7.658a.988.988 0 0 1 1.414-.014A6.135 6.135 0 0 1 18 12c0 1.662-.655 3.17-1.715 4.27a.989.989 0 0 1-1.414.014 1.029 1.029 0 0 1-.014-1.437A4.085 4.085 0 0 0 16 12a4.085 4.085 0 0 0-1.2-2.904 1.029 1.029 0 0 1-.014-1.438Z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M17.657 4.811a.988.988 0 0 1 1.414 0A10.224 10.224 0 0 1 22 12c0 2.807-1.12 5.35-2.929 7.189a.988.988 0 0 1-1.414 0 1.029 1.029 0 0 1 0-1.438A8.173 8.173 0 0 0 20 12a8.173 8.173 0 0 0-2.343-5.751 1.029 1.029 0 0 1 0-1.438Z" clip-rule="evenodd"/>
                </svg> 
            }

            <video src={vdoSrc} ref={vdoRef} autoPlay loop muted={vdoMuted} className="w-[100%]"/>
            <div className={styles.menu}>
                <PremiumMenu/>
            </div>
        </div>
    )
}