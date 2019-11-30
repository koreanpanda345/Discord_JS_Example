//this handles all the events
const {readdirSync} = require('fs');
module.exports = (bot) => {
    const load = dirs =>{
        const events = readdirSync(`./events/${dirs}`).filter(d => d.endsWith('.js'));
        for(let file of events){
            const evt = require(`../events/${dirs}/${file}`);
            let eName = file.split(".")[0];
            bot.on(eName, evt.bind(null, client));
        }
    }
    //make sure to include these files. or the events in 
    //these folders will not run.
    ["Client", "Guild"].forEach(x => load(x));
}