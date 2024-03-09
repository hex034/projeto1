function botao() {
    
    const html = document.documentElement
    html.classList.toggle('white')
    html.classList.toggle('root')

    if (html.classList.contains("white")) {
        Swal.fire("Modo Claro!");
      } else { 
        Swal.fire("Modo Escuro!");
      }
}

