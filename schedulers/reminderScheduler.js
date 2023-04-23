const schedule = require("node-schedule");

// Local imports
const Task = require("../models/todo");

// This function is used to send the reminder email to the user
const { sendReminderEmail } = require("../mailers/reminderMailer");

// This scheduler will run every 5 minutes and will send the reminder email to the user
// It will send the reminder email to the user if the task is created 2 hours ago
schedule.scheduleJob('*/5 * * * *', async function(){
    const twoHoursAge = new Date(Date.now() - 2*60*60*1000);
    const tasks = await Task.find({createdAt: {$lt: twoHoursAge}}).lean();
    for(let task of tasks){
        sendReminderEmail(task.user.email, task.title);
    }
});

module.exports = schedule;



