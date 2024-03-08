function botao() {
    
    const html = document.documentElement
    html.classList.toggle('white')
    html.classList.toggle('root')

    if (html.classList.contains("white")) {
        // se tiver light mode, adicionar a imagem light
        Swal.fire("Modo Claro!");
      } else {
        // se tiver sem light mode, manter a imagem normal
        Swal.fire("Modo Escuro!");
      }
}

