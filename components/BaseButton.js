const BaseButton = ({ textContent, bgColor, borColor, textColor }) => {
	return (
		<button
			className='w-full py-4 border rounded'
			style={{
				color: textColor,
				backgroundColor: bgColor,
				borderColor: borColor,
			}}>
			{textContent}
		</button>
	);
};

export default BaseButton;
