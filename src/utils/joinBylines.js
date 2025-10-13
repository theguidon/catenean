const joinBylines = (bylines) => {
	switch (bylines.length) {
		case 0:
			return "";
		case 1:
			return bylines[0];
		case 2:
			return bylines[0] + " and " + bylines[1];
		default:
			return (
				bylines.slice(0, -1).join(", ") + " and " + bylines[bylines.length - 1]
			);
	}
};

export default joinBylines;
