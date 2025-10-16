fetch('https://g8928fa3f1dce68-malakathondb.adb.eu-madrid-1.oraclecloudapps.com/ords/admin/api/pacientes_comunidadAutonoma/')
  .then(res => res.json())
  .then(dataJson => {
    const comunidadLabels = dataJson.items.map(item => item.comunidad_autonoma);
    const comunidadValues = dataJson.items.map(item => item.numero_de_casos);

    const barCtx = document.getElementById('barChart').getContext('2d');

    new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: comunidadLabels,
        datasets: [{
          label: 'Número de casos',
          data: comunidadValues,
          backgroundColor: [...baseColors]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'right', labels: { color: '#fff' } },
          tooltip: { callbacks: { label: c => `${c.label}: ${c.raw.toLocaleString()} casos` } }
        },
        scales: {
          y: { beginAtZero: true, title: { display: true, text: 'Casos', color: '#fff' }, ticks: { color: '#fff' } },
          x: { ticks: { color: '#fff' } }
        }
      }
    });
});
