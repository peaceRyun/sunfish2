import React from 'react';

const IconSprite = ({ iconName, size = 50 }) => {
    // 아이콘의 위치를 매핑하는 객체
    const iconPositions = {
        register: { x: -250, y: -50 },
        shower: { x: -100, y: 0 },
        house: { x: -200, y: 0 },
        wifi: { x: -300, y: 0 },
        game: { x: -800, y: -300 },
        // 필요한 아이콘 위치를 추가할 수 있습니다
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
                    width: '400px', // 전체 이미지의 실제 너비
                    height: '400px', // 전체 이미지의 실제 높이
                    position: 'absolute',
                    backgroundImage: "url('/images/pattern/main/icons.png')",
                    backgroundSize: '400px 400px', // 실제 이미지 크기에 맞게 조절
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    backgroundRepeat: 'no-repeat',
                }}
            />
        </div>
    );
};

export default IconSprite;
