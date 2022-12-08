export const getUsersService = async () => {
    try {
        return {data:[], error:false, statusCode:200, message:"Success"}
    } catch {
        return {data:[], error:true, statusCode:500, message:"Error"}
    }
}