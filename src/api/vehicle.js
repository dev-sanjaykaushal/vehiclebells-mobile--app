
import BaseApi from "./baseApi";
const AddVehicle = async (data) => {
    console.log("vehicle===",data);
    return await BaseApi({
        url: `/users/add-vehicle`,
        method: "post",
        data: data
    })
}
const GetAllVehicles = async (userId) => {
    return await BaseApi({
        url: `/AllVehicle`,
        method: "get",
        params:{id:userId}
    })
}

export {
    AddVehicle,
    GetAllVehicles
}

