const AUTH = "AUTH";

export const signin = (formData, history) => async (dispatch) => {
	try {
		history.push(`/`);
	} catch (error) {
		console.log(`error: ${error}`);
	}
};

export const signup = (formData, history) => async (dispatch) => {
	try {
		history.push(`/`);
	} catch (error) {
		console.log(`error: ${error}`);
	}
};
