fuente: https://www.electronjs.org/es/docs/latest/tutorial/ipc#pattern-1-renderer-to-main-one-way

En este caso lo que hacemos es enviar algo del front al back.

Para estos casos usamos:

- ipcRenderer.send: indicamos un que el render (front) podra enviar algo al mainproces (back)
- ipcMain.on: cogemos lo que creamos con ipcRenderer y le damos la tarea que realizara cuando sea usado en el front (render.js)
