// Your solution goes here 
const isStrongPassword = (password) => {
	password = password.toString();
	if (/^[a-zA-Z0-9]{8,}$/.test(password)) {
		if (!password.toLowerCase().includes("password")) {
			if (/[A-Z]/.test(password)) {
				return true;
			}
		}
	}
	return false;
};