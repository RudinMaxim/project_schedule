import { useEffect, useState } from "react"

export const useKeyPress = (keyTarget) => {
    const [isKeyPresses, setIsKeyPresses] = useState(false);

    const downHandler = ({key}) => {
        if (key === keyTarget) setIsKeyPresses(true);
    }

    useEffect(()=>{
        window.addEventListener('keydown', downHandler)
        return () =>{
            window.addEventListener('keydown', downHandler)
        }
    }, [])
    return isKeyPresses
}