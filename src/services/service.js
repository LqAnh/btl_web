import client from "./client"

export const service = {
    register(entity) {
        const uri = "/login/signup"
        return client.post(uri, entity)
    },
 
    loging(entity) {
        const uri = "/login/token-json"
        return client.post(uri, entity)
    },

    getAllTour() {
        const uri = "/tours/get-tours"
        return client.get(uri)
    },

    getType() {
        const uri = "/type/get-all"
        return client.get(uri)
    },
    
    getTypeDetail(id) {
        const uri = "/type/get?id="+id
        return client.get(uri)
    },

    getPlace() {
        const uri = "/place/get-all"
        return client.get(uri)
    },

    getPlaceDetail(id) {
        const uri = "/place/get?id="+id
        return client.get(uri)
    },

    updateInfoUser(entity) {
        const uri = ""
        return client.post(uri, entity)
    },

    bookTour(entity) {
        const uri = ""
        return client.post(uri, entity)
    },

    getListTour() {
        const uri = ""
        return client.get(uri)
    },

    getDetailTour(id) {
        const uri = "/tours/tour/get/"+id
        return client.get(uri)
    },

    SearchTour(search) {
        const uri = ""
        const params = {
            search // thay đổi theo api
        }
        return client.get(uri, { params })
    },

    cancelTour(id) {
        const uri = ""
        const params = {
            id // thay đổi theo api
        }
        return client.put(uri, { params })
    },

    getProfile() {
        const uri = "/login/profile"
        return client.get(uri)
    }
}
