import axios from 'axios'
// import cookie from "react-cookies";

// var hosturl = 'http://localhost:8081';

class Api{
    async GET_ (urlC) {
        console.log("Get url: "+urlC)
        const config = {
            method: 'get',
            url: urlC,
            // data: formData,
            // data: params,
            // timeout: 500000,
            // params: params,
            // params: { firstName: params.firstname, lastName: params.lastname, age: params.age, height: params.height, weight: params.weight, race: params.race, bloodType: params.bloodType, allergies: params.allergies, chronicIllnessStatus: params.chronicIllnessStatus, medicalCondition: params.medicalCondition, status: params.status, treatmentDate: params.treatmentDate }
            headers: {
                // 'X-CSRFTOKEN': $('meta[name="csrf-token"]').attr('content'),
                // "Authorization": 'Bearer '+ $('meta[name="csrf-token"]').attr('content'),
                // 'X-CSRFTOKEN': cookie.load("csrftoken"),
                "Access-Control-Allow-Origin":"*",
                // "Access-Control-Allow-Methods":"GET, PUT, POST, DELETE, OPTIONS",
                // "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token,  Accept, Authorization, X-Requested-With",
                // "Content-Type": 'application/json',
                // "Accept": 'application/json',
                // "AccessCode": merchantName,
                // "sourceSystem": merchantName
                // 'crossDomain': true,
            }
        }

		let response = await axios.get(`${config}`)

        return response
       
	}

    // POST
	async POST_(params, urlC){
        console.log("POST: "+urlC)
        console.log(params)
        console.log("Url: ")
        console.log(`${urlC}`)

        const config = {
            method: 'post',
            url: urlC,
            // data: formData,
            data: params,
            // timeout: 500000,
            // params: params,
            // params: { firstName: params.firstname, lastName: params.lastname, age: params.age, height: params.height, weight: params.weight, race: params.race, bloodType: params.bloodType, allergies: params.allergies, chronicIllnessStatus: params.chronicIllnessStatus, medicalCondition: params.medicalCondition, status: params.status, treatmentDate: params.treatmentDate }
            headers: {
                // 'X-CSRFTOKEN': $('meta[name="csrf-token"]').attr('content'),
                // "Authorization": 'Bearer '+ $('meta[name="csrf-token"]').attr('content'),
                // 'X-CSRFTOKEN': cookie.load("csrftoken"),
                "Access-Control-Allow-Origin":"*",
                // "Access-Control-Allow-Methods":"GET, PUT, POST, DELETE, OPTIONS",
                // "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token,  Accept, Authorization, X-Requested-With",
                // "Content-Type": 'application/json',
                // "Accept": 'application/json',
                // "AccessCode": merchantName,
                // "sourceSystem": merchantName
                // 'crossDomain': true,
            }
        }

        const res = await axios(config);

        console.log("Response is ")
        console.log(res)

        return await res
    }
}

export default Api