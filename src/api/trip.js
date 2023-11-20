
import BaseApi from "./baseApi";
const AddTrip = async (data) => {
    return await BaseApi({
        url: `/users/save-trip`,
        method: "post",
        data: data
    })
}
const GetAllTrips = async (userId) => {
    return await BaseApi({
        url: `/AllTrips`,
        method: "get",
        params:{id:userId}
    })
}

export {
    AddTrip,
    GetAllTrips
}

