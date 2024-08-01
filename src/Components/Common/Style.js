

const Style = ({ id }) => {

	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksMusicPlayer`;

	return <style dangerouslySetInnerHTML={{
		__html: `

				${blockSl} {
					
				}

	    `}} />;
}
export default Style;