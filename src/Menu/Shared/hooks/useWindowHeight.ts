import React, { useState, useEffect } from 'react'

export default (indexContainerHeight:number) => {
    const [height, setHeight] = useState(window.innerHeight)
    const updateHeight = () => {        
        setHeight(window.innerHeight)
    }
    
	useEffect(() => {
        window.addEventListener('resize',updateHeight)
		return () => {
			window.removeEventListener('resize', updateHeight)
		}
	})
	return height
}