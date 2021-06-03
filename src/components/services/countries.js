import { Base_Url } from "./config";

export const getAllCountries = () => {
	return fetch(`${Base_Url}/all`).then((r) => r.json());
};
