export function menu() {
    const btnEl = document.querySelector('.top_arr');

    btnEl.addEventListener('click', () => {
      window.scrollTo({
        top:0,
        behavior:'smooth'
      });
    });
};