  document.querySelectorAll('.dropdown-header').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.querySelector('.dropdown-content');

// Collapse all others (optional)
    //   document.querySelectorAll('.dropdown-content').forEach(el => {
    //     if (el !== content) {
    //       el.style.maxHeight = null;
    //     }
    //   });

      // Toggle current
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } 
      else {
        content.style.maxHeight = content.querySelector('p, ul').scrollHeight + "px";
      }
    });
  });