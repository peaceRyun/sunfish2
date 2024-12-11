import React from 'react';

const IconSpriteTwo = ({ iconName, size = 100 }) => {
    const iconPositions = {
        register: { x: -250, y: -50 },
        diary: { x: -250, y: -200 },
        encyclopedia: { x: -100, y: -200 },
        mukkit: { x: -300, y: -50 },
        meditation: { x: -100, y: -250 },
        entertain: { x: -450, y: -100 },
    };

    const position = iconPositions[iconName] || { x: 0, y: 0 };

    return (
        <div
            style={{
                width: size,
                height: size,
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <div
                style={{
                    width: '1000px', // 전체 이미지의 실제 너비
                    height: '1000px', // 전체 이미지의 실제 높이
                    position: 'absolute',
                    backgroundImage: "url('/images/pattern/main/icons2.png')",
                    backgroundSize: '1000px 1000px', // 실제 이미지 크기에 맞게 조절
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    backgroundRepeat: 'no-repeat',
                }}
            />
        </div>
    );
};

export default IconSpriteTwo;
