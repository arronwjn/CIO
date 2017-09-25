import { env,developer } from '../config/apiConfig';

const domain = env.domain

// const ROOT_URL = `${domain}`;
const ROOT_URL = `${domain}/`;


export const API_URL = {
	GETFACADELIST : {
		domain : ROOT_URL,
		apiUrl : 'wap.php/car/getFacadeList',
		author : '王超',
		fetchUrl : ROOT_URL+'wap.php/car/getFacadeList',
		remark : '汽车列表',
		method : 'POST',
		// tableName : 'ez_store',
	}
}
