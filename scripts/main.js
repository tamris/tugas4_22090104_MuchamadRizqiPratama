// clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")){
        form.reset();
    }
}

document.querySelectorAll('a.anchor-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
       
        const offsetTop = targetElement.offsetTop;
        
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
      }
    });
  });