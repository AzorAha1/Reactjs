import { useState, useEffect } from 'react'


function UseEffectHook() {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
    useEffect(() => {
        document.title = `Width: ${width} Height: ${height}`

    }, [width, height])
    return (
        <div>
            <h1>Windows Width: {width}</h1>
            <h1>Windows Height {height}</h1>
        </div>
    )
}
export default UseEffectHook