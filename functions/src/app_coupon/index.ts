import * as functions from 'firebase-functions';


export const CLOUD_FUNCTION_REGION = "asia-east2"
export const FUNCTION_TIME_ZONE = "Asia/Kolkata";

export const FUNCTIONS_REGION = functions.region(CLOUD_FUNCTION_REGION)
export const FUNCTIONS_CRON = FUNCTIONS_REGION.pubsub


const helloWorldTest = FUNCTIONS_REGION.https.onCall(async (data, _context) => {
    return { "error": 0, "message": "Hello from the Firebase Functions" }
})



const couponCronForExpiredCoupons = FUNCTIONS_CRON.schedule("* * * * *").timeZone(FUNCTION_TIME_ZONE).onRun(async (_context) => {
    try {
        console.log("----------couponCronForExpiredCoupons")
        return { "error": 0, "message": "Coupons processed 0/0" }
    } catch (err) {
        return { "error": 1, "message": "Internal Server Error" }
    }
})




export {
    helloWorldTest,
    couponCronForExpiredCoupons
}