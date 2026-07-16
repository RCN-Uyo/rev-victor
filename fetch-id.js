fetch('https://www.youtube.com/@RevVictorAnaele').then(r=>r.text()).then(t=>{console.log(t.match(/"channelId":"(UC[^"]+)"/)[1])})
