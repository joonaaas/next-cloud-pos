import BaseButton from './BaseButton';

const LayoutLeft = () => {
	return (
		<aside className='w-[30%] h-full pl-8 pt-4 '>
			<div className='grid grid-cols-2 gap-2'>
				<BaseButton
					textContent='Remove'
					bgColor='#181818'
					borColor='#FCA5A5'
					textColor='#FCA5A5'
				/>
				<BaseButton
					textContent='More Actions'
					bgColor='#323232'
					borColor='#323232'
					textColor='#FFFFFF'
				/>
			</div>
		</aside>
	);
};

export default LayoutLeft;
