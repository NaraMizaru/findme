const text = document.getElementById('textType')
const textLoad = () => {
  setTimeout(() => {
    text.textContent = 'Muhammad Hilal';
  }, 0)
  setTimeout(() => {
    text.textContent = 'NaraMizaru';
  }, 4000)
  setTimeout(() => {
    text.textContent = 'DeeLuvsYaa';
  }, 8000)
  setTimeout(() => {
    text.textContent = '@md.hilallsluvyaa';
  }, 12000)
}
textLoad()
setInterval(textLoad, 16000)

function copyToClipboard() {
  let copyText = document.getElementById('copyText')

  copyText.select()
  copyText.setSelectionRange(0, 9999)

  navigator.clipboard.writeText(copyText.value)

  alert('Link has been copied');
  alert('Thanks for providing my findme link');
}