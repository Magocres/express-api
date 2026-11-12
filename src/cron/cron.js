import cron from "node-cron"

export const cronado = cron.schedule("* * * * *", () => {
  console.log("Buenos días!")
})
