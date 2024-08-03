import { useState } from 'react'

function Counter(props) {
    const [count, UseCount] = useState(0)
    const IncrementCount = () => {
        UseCount(c => c + 1)
    } 
    const DecrementCount = () => {
        UseCount(c => c - 1)
    }
    const ResetCount = () => {
        UseCount(0)
    }
    return (
        <>
            <div className='counter'>
                {count}
            </div>
            <div className='button-container'>
                <button className='button' onClick={() => IncrementCount()}>press me</button>
                <button className='button' onClick={() => ResetCount()}>press me</button>
                <button className='button' onClick={() => DecrementCount()}>press me</button>
            </div>
            
        </>
    );
}
export default Counter;
