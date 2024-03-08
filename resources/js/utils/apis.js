import axios from 'axios'
// import cookie from "react-cookies";
import { VALUES } from "./values"

var hosturl = VALUES.baseApiEndpoint;
// var hosturl = 'http://localhost:8081';

class Api{
    async GET_ (url) {
        console.log("Get url: "+hosturl+url)
		let response = await axios.get(`${hosturl}${url}`)

        return response
       
	}

    // POST
	async POST_(params, url){
        console.log("POST: "+url)
        console.log(params)
        console.log("Url: ")
        console.log(`${hosturl}${url}`)

        const config = {
            method: 'post',
            url: `${hosturl}${url}`,
            // data: formData,
            data: params,
            // timeout: 500000,
            // params: params,
            // params: { firstName: params.firstname, lastName: params.lastname, age: params.age, height: params.height, weight: params.weight, race: params.race, bloodType: params.bloodType, allergies: params.allergies, chronicIllnessStatus: params.chronicIllnessStatus, medicalCondition: params.medicalCondition, status: params.status, treatmentDate: params.treatmentDate }
            headers: {
                // 'X-CSRFTOKEN': $('meta[name="csrf-token"]').attr('content'),
                // "Authorization": 'Bearer '+ $('meta[name="csrf-token"]').attr('content'),
                // 'X-CSRFTOKEN': cookie.load("csrftoken"),
                // "Access-Control-Allow-Origin":"*",
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

    async getSortCodes () {
        console.log("Get Sort codes: "+hosturl2+"/api/transactions/sortcodes")

        const config = {
            method: 'get',
            url: `${hosturl2}/api/transactions/sortcodes`,
            headers: {
                "Access-Control-Allow-Origin":"*",
                'Ocp-Apim-Subscription-key': "c04b23f4fa6b4c59b1fff012d4cd20a7",
            }
        }

        const response = await axios(config);

        return response
       
	}

    async getAllMerchantAccounts () {
        console.log("Get Merchant Accounts: "+hosturl+"/api/ManagedAccount/GetMerchantAccounts")
		let response = await axios.get(`${hosturl}/api/ManagedAccount/GetMerchantAccounts`)

        return response.data
       
	}

    // create merchant account
	async createMerchantAccount(params, merchantName){
        console.log("Create merchant account")
        console.log(params)
        console.log("Url: ")
        console.log(`${hosturl}/api/ManagedAccount/CreateMerchantAccount`)

        const config = {
            method: 'post',
            url: `${hosturl}/api/ManagedAccount/CreateMerchantAccount`,
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
                "AccessCode": merchantName,
                "sourceSystem": merchantName
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