import '@/styles/globals.scss';
import { Providers } from '@/components/providers';
import SkipNav from '@/components/layout/header/SkipNav';
import { metadata } from './metadata';

export default function RootLayout({ children }) {
    return (
        <html lang='ko'>
            <head>
                <link
                    rel='stylesheet'
                    href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css'
                />
            </head>
            <body>
                <Providers>
                    <SkipNav />
                    <div id='wrap' className='relative mx-auto max-w-[390px] min-h-svh flex flex-col'>
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    );
}
