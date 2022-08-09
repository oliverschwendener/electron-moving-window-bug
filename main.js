const { app, BrowserWindow } = require("electron");

const windowSize = { height: 600, width: 800 };

app.on("ready", () => {
    const browserWindow = new BrowserWindow({
        height: windowSize.height,
        width: windowSize.width,
    });

    setInterval(() => browserWindow.setSize(windowSize.width, windowSize.height), 100);
});
