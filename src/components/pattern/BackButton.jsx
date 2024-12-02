import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const BackButton = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <button
            onClick={handleBack}
            className='text-gray-800 hover:bg-gray-100 rounded-full transition-colors'
            aria-label='뒤로 가기'
        >
            <ChevronLeft size={24} />
            <span className='blind'>이전</span>
        </button>
    );
};

export default BackButton;
