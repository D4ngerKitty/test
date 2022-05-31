

    {
        // string tests
        const ws = new WebSocket("https://arcade.makecode.com/")
        ws.onerror = () => console.log("error")
        ws.onmessage = (msg) => {
            const data = msg.data;
            console.log(`--> ${data}`)
        }
        ws.onopen = () => {
            forever(() => {
                const m = `makecode ${control.millis()}`;
                console.log(`<-- ${m}`)
                ws.send(m);
                pause(1000)
            })
        }
    }