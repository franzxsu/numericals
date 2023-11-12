import * as api from"./apiHelper.js"

document.addEventListener('DOMContentLoaded', function() {

    console.log(api.bisect());
    

    const categories = {
      prelims: [
        { keywords: 'bisection approximation midpoint fuck you test', text: 'Bisection Method', href: '../frontend/html/bisection.html'},
        { keywords: 'linear interpolation', text: 'Linear Interpolation Method', href: '../frontend/html/bisection.html'},
        { keywords: 'Fixed Point Iteration', text: 'Fixed Point Iteration', href: '../frontend/html/bisection.html' },
        { keywords: 'Newton-Raphson Method', text: 'Newton-Raphson Method', href: '../frontend/html/bisection.html' },
        { keywords: 'Secant Method', text: 'Secant Method', href: '../frontend/html/bisection.html' },

      ],
      midterms: [
        { keywords: 'Matrices matrix', text: 'Matrices' },
        { keywords: 'jacobi', text: 'Jacobi Iteration' },
        { keywords: 'Gauss-Seidel gauss seidel', text: 'Gauss-Seidel Method' },
        { keywords: 'Relaxation', text: 'Relaxation Method' },
        { keywords: 'Newton raphson newton-raphson', text: 'Newton-Raphson' },
      ],

      finals: [
        { keywords: 'Matrices matrix', text: 'Matrices' },
        { keywords: 'jacobi', text: 'Jacobi Iteration' },
        { keywords: 'Gauss-Seidel gauss seidel', text: 'Gauss-Seidel Method' },
        { keywords: 'Relaxation', text: 'Relaxation Method' },
        { keywords: 'Newton raphson newton-raphson', text: 'Newton-Raphson' },
      ]

    };

    for (const [category, items] of Object.entries(categories)) {
      addGridItems(category, items);
    }
  });
  
  function addGridItems(categoryId, items) {
    const gridContainer = document.querySelector(`#${categoryId} .grid`);
    items.forEach(item => {
      const link = document.createElement('a');
      link.href = item.href;
      link.className = 'grid-item';

      const contentDiv = document.createElement('div');
      contentDiv.textContent = item.text;
      contentDiv.setAttribute('data-keywords', item.keywords.toLowerCase());

      link.appendChild(contentDiv);

      gridContainer.appendChild(link);
    });
}

  
  function filterGridItems() {
    let input = document.getElementById('search-input').value.toLowerCase();
    let gridItems = document.querySelectorAll('.grid-item');
  
    gridItems.forEach(item => {
      let keywords = item.getAttribute('data-keywords');
      if (keywords.includes(input)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  