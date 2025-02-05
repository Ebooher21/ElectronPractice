const { app, BrowserWindow } = require('electron')
const create = require("got/dist/source/create");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: true,
        //no title
        frame: false,
        transparent: false

    })
    win.loadFile('index.html')
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () =>{
   if (win === null){
       createWindow()
   }
})
