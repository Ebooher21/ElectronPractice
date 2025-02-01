const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})
function ranFunction(){
    pass;
}
const chimichanga = document.createElement('img')
chimichanga.src = 'OneDrive/Elijah - Personal/Documents/GitHub/ElectronPractice/chimichanga.png'
document.body.appendChild(chimichanga)
