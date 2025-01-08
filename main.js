const { app, BrowserWindow } = require('electron')

/**
 * - app: controla el ciclo de vida del evento de la aplicación.
 * - BrowserWindow: crea y administra ventanas de la aplicacion.
 */

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  }) //creamos una nueva ventana

  win.loadFile('index.html') //esta ventana carga este archivo html
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
    /**
     * esto sirve para crear unan nueva ventana de la app, en macos,
     * cuadno sigue funcionando de fondo pero no hay ninguna ventana
     * abierta.
     * 
     * escuchamos el evento 'activate', que se lanza cuando iniciamos la
     * aplicacion por primera vez o al intentar abrir la aplicacion cuando
     * ya esta corriendo en segundo plano.
     * 
     * Debido a que las ventanas no se pueden crear antes del evento ready,
     *  solo debería escuchar el evento activate después de inicializar tu
     *  aplicación. Haz esto solo escuchando para activar eventos dentro 
     * de tu devolución de llamada whenReady() existente. 
     * 
     */
  })

  console.log("interrumpido")
  console.log("des-interrumpido")
}) //cuando la aplicacion este lista iniciara la funcion que creana nuestra ventana

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
  /**
   * en windows y linux al cerrar todas las ventanas 
   * de una aplicacion la cierra por completo, pero
   * en Macos lo que hace es mantenerla habierta en segundo plano.
   * 
   * Para arregar esto podemos escuchar el evento 'window-all-closed',
   * que lo que hace es que si estamos en Macos y cerramos todas las ventanas
   * cerremos la app.
   */

})