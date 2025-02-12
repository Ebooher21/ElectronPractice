//following a tutorial on youtube - Bro code & code evolution
console.log(`Chimichanga`);
//window.alert doesn't work because window isn't recognized - using node.js
//document.getSelection('H1').textContent = 'I want a chimichanga!';
const electron = require('electron')
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

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
    win.webContents.openDevTools();
    //garbage collection
    win.on('closed',() =>{
        let win = null;
    })
}

app.on('ready', createWindow)

//for mac
/*app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
app.on('activate', () =>{
   if (win === null){
       createWindow()
   }
})*/
