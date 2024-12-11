import React from 'react';

const IconSprite = ({ iconName, size = 70 }) => {
    const iconPositions = {
        register: { x: -350, y: -70 },
        diary: { x: 0, y: -490 },
        encyclopedia: { x: -140, y: -140 },
        mukkit: { x: -350, y: 0 },
        meditation: { x: -350, y: -210 },
        entertain: { x: -490, y: -140 },
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
                    width: '560px', // 전체 이미지의 실제 너비
                    height: '560px', // 전체 이미지의 실제 높이
                    position: 'absolute',
                    backgroundImage: "url('/images/pattern/main/icons.png')",
                    backgroundSize: '560px 560px', // 실제 이미지 크기에 맞게 조절
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    backgroundRepeat: 'no-repeat',
                }}
            />
        </div>
    );
};

export default IconSprite;
