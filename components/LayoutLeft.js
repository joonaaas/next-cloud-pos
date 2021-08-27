import BaseButton from './BaseButton';
import ListItem from './ListItem';

const LayoutLeft = () => {
	return (
		<aside className='w-[30%] h-full pt-4 flex flex-col'>
			<div className='grid grid-cols-2 gap-2 px-6 pb-4 border-[#2A2A2A] border-b'>
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
			<div className='px-6 overflow-y-auto'>
				<ul>
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
				</ul>
			</div>
		</aside>
	);
};

export default LayoutLeft;
