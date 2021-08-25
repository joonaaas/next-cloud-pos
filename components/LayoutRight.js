import CardLandscape from './CardLandscape';
import SearchBox from './SearchBox';

const LayoutRight = () => {
	return (
		<div className='w-[70%] h-full border-[#2A2A2A] border-r pt-4 pr-8'>
			<div className='mb-4'>
				<SearchBox />
			</div>
			<div className='flex-auto overflow-y-auto'>
				<div className='grid grid-cols-3 gap-4'>
					<CardLandscape />
					<CardLandscape />
					<CardLandscape />
				</div>
				<div className='grid grid-cols-3 gap-4 mt-8'>
					<CardLandscape />
					<CardLandscape />
					<CardLandscape />
				</div>
				<div className='grid grid-cols-3 gap-4 mt-8'>
					<CardLandscape />
					<CardLandscape />
					<CardLandscape />
				</div>
				<div className='grid grid-cols-3 gap-4 mt-8'>
					<CardLandscape />
					<CardLandscape />
					<CardLandscape />
				</div>
				<div className='grid grid-cols-3 gap-4 mt-8'>
					<CardLandscape />
					<CardLandscape />
					<CardLandscape />
				</div>
				<div className='grid grid-cols-3 gap-4 mt-8'>
					<CardLandscape />
					<CardLandscape />
					<CardLandscape />
				</div>
			</div>
		</div>
	);
};

export default LayoutRight;
