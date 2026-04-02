document.addEventListener('DOMContentLoaded', function () {

  function copyBibtex() {
    const text = document.getElementById('bibtex-code').textContent;
    navigator.clipboard.writeText(text).then(() => {
      const block = document.getElementById('bibtex-block');
      block.classList.add('copied');
      setTimeout(() => block.classList.remove('copied'), 2000);
    }).catch((err) => {
      console.error('Failed to copy BibTeX: ', err);
    });
  }

  const bibtexBlock = document.getElementById('bibtex-block');
  if (bibtexBlock) {
    bibtexBlock.addEventListener('click', copyBibtex);
  }

});