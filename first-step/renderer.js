const information = document.getElementById('info')
information.innerText = `Esta aplicación está usando Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const func = async () => {
  const response = await window.versions.ping()
  console.log(response) // prints out 'pong'
}

document.getElementById('boton').addEventListener('click', async () => {
  console.log(window.versions.ping())
})