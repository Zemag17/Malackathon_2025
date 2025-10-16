const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
    type: 'line',
    data: {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      datasets: [{
        label: 'Casos mensuales',
        data: [2000, 2400, 2600, 2300, 2900, 3100, 2800, 3000, 2700, 3200, 3500, 4000],
        borderColor: 'rgba(255, 127, 80, 1)',
        backgroundColor: 'rgba(255, 127, 80, 0.2)',
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      plugins: {
        legend: {
            position: 'bottom',
            labels: {
                color: '#fff'
            }
        }
      }
    }
});