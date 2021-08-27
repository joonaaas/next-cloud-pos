import Head from 'next/head';
import Image from 'next/image';

import LayoutRight from '../components/LayoutRight';
import LayoutLeft from '../components/LayoutLeft';

export default function Home() {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-[#181818] text-white overflow-hidden'>
			<Head>
				<title>Cloudbase Point of Sale System</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link
					href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
					rel='stylesheet'
				/>
			</Head>

			<main className='flex flex-1 w-full h-[90%] fixed top-0'>
				<LayoutRight />
				<LayoutLeft />
			</main>

			<footer className='flex items-center justify-between px-6 border-[#2A2A2A] border-t fixed bottom-0 right-0 left-0 bg-[#181818] h-[10%] w-screen'>
				<button className='flex items-center justify-center space-x-4'>
					<Image src='/svg/icon-hamburger.svg' height='30' width='40' />
					<div>Home</div>
				</button>
				<div>
					<p>John Doe</p>
				</div>
				<div className='flex items-center justify-center space-x-4'>
					<p>Connected</p>
					<span>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<circle cx='8' cy='8' r='8' fill='#10B981' />
						</svg>
					</span>
				</div>
			</footer>
		</div>
	);
}
