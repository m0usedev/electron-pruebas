const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')

const {onlySetNombre, closeConection} = require('../mysql')

function createWindow () {
  const mainWindow = new BrowserWindow({
    width:1920,
    height:1080,
    center: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      zoomFactor: 3.0
    }
  })

  ipcMain.on('set-nombre', (event, nombre) => {
    onlySetNombre(nombre)
  })

  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  app.on('before-quit', () => {
    closeConection()
  });
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})