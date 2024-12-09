import React from 'react';
import Square from './Square';

const Display = () => {
    return (
        <>
            <div className='container1 font-custom3'>
                <div className='under-container bubble' style={{ height: '100vh' }}>
                    <div className='line1'>
                        <Square>S</Square>
                        <Square>T</Square>
                        <Square>R</Square>
                        <Square>E</Square>
                        <Square>S</Square>
                        <Square>S</Square>
                        <Square>E</Square>
                        <Square>D</Square>
                    </div>
                    <div className='line1'>
                        <Square>O</Square>
                        <Square>U</Square>
                        <Square>T</Square>
                        <Square>?</Square>
                    </div>
                    <div className='line1'>
                        <Square>Use</Square>
                        <Square>this</Square>
                        <Square>App</Square>
                    </div>
                    <div className='line1'>
                        <Square>Right</Square>
                        <Square>Now</Square>
                        <Square>!!!</Square>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Display;
