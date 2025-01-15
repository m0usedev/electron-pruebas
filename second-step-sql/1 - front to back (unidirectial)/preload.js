const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
  setNombre: (nombre) => ipcRenderer.send('set-nombre', nombre)
})