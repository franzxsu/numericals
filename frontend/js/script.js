import * as api from"./apiHelper.js"

document.addEventListener('DOMContentLoaded', function() {

    console.log(api.bisect());

    const categories = {
      prelims: [
        { keywords: 'bisection approximation midpoint fuck you test', text: 'Bisection Method' },
        { keywords: 'linear interpolation', text: 'Linear Interpolation Method' },
        { keywords: 'Fixed Point Iteration', text: 'Fixed Point Iteration' },
        { keywords: 'Newton-Raphson Method', text: 'Newton-Raphson Method' },
        { keywords: 'Secant Method', text: 'Secant Method' },

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
      const div = document.createElement('div');
      div.className = 'grid-item';
      div.textContent = item.text;
      div.setAttribute('data-keywords', item.keywords.toLowerCase());
      gridContainer.appendChild(div);
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
  