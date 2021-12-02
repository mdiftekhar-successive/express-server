const validationHandler = (config) => (req, res, next) => {
	const errMsg = [];
	let flag = false;
	for (const key in config) {
		const dataPlace = config[key].in;
		const input = req[dataPlace][key];
    for (const keyProperty in config[key]) {
			switch (keyProperty) {
				case 'required':
					if(key == 'skip') {
						if(typeof req[dataPlace].skip != 'undefined' ) {
							const NUMREGEX =/^[0-9]+$/.test(req[dataPlace].skip);
							if(NUMREGEX == true) {
								console.log('Skip server value is:-',req[dataPlace].skip);
								break;
							}
							else {
								errMsg.push('skip is required in integer only..');
								flag = true;
								break;
							}
						}
						else {
							req[dataPlace].skip = 0;
							console.log('Skip default value is:-',req[dataPlace].skip);
						}
					}
					else if(key == 'limit') {
						if(typeof req[dataPlace].limit != 'undefined' ) {
							const NUMREGEX =/^[0-9]+$/.test(req[dataPlace].limit);
							if(NUMREGEX == true) {
								console.log('Limit server value is:-',req[dataPlace].limit);
								break;
							}
							else {
								errMsg.push('Limit is required in integer only..');
								flag = true;
								break;
							}
						}
						else {
							req[dataPlace].limit = 10;
							console.log('Limit default value is:-',req[dataPlace].limit);
						}

					}

					else {
					     if ((key in req[dataPlace]) && input !== null) {
						break;
					}
					    else {
						errMsg.push(`${key} is required`);
						flag = true;
					}
				
				}
					break;
				case 'string':
					const value = input;
					if(typeof value != 'undefined') {
						if((key in req[dataPlace] && typeof value === 'string')) {
							break;	
						}
					else {
						errMsg.push(`${key} should be in string`);
						flag = true;
						break;	  
					}
				}
				case 'regex':
					
					if(typeof input != 'undefined') {
						const REGEX = /^[a-zA-Z ]+$/.test(input);
						if(REGEX == true) {
							break;
						}
						else {
						errMsg.push(`${key} is not appropriate..`);
						flag = true;
						break;
						}
					}
				case 'custom':
					if(input!="") {
						break;
					}
					else {
						errMsg.push(`${key} should not null string..`)
						flag = true;
						break;
					}	
				case 'isObject':
					if(typeof input !== 'object'){
                       errMsg.push(`${key} should not in proper object format..`);
						flag = true;
						break;
					}
					break;
			}
		}
	}
	if(flag == true){
		res.json(`Error Message:${errMsg}`);
	}
	else{
		next();
	}
}
export default validationHandler;
