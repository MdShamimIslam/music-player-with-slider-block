

const Style = ({ id }) => {

	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksMusicPlayer`;

	return <style dangerouslySetInnerHTML={{
		__html: `

				${blockSl} p {
					color: green;
					background-color: #ccc;
					padding: 10px;
				}

	    `}} />;
}
export default Style;