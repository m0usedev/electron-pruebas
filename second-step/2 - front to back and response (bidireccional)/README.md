fuente: https://www.electronjs.org/es/docs/latest/tutorial/ipc#pattern-2-renderer-to-main-two-way

En este caso estamos invocando algo desde el render (front) que se enviara al main process (back) y este devolvera una respuesta al render (front)

Para estos casos usamos:

- ipcRenderer.invoke: estamos indicando que es algo que se resuelve con una respuesta del main process (back) para el render (front)
- ipcMain.handle: cogemos lo que creamos con ipcRenderer y le damos la tarea que realizara cuando sea usado en el front (render.js)
