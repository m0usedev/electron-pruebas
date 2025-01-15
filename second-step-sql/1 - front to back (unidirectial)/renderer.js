const setButton = document.getElementById('btn')
const nombreInput = document.getElementById('nombre')
setButton.addEventListener('click', () => {
  const nombre = nombreInput.value
  if (nombre) window.electronAPI.setNombre(nombre)
})