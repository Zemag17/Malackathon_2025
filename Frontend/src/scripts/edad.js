fetch('https://g8928fa3f1dce68-malakathondb.adb.eu-madrid-1.oraclecloudapps.com/ords/admin/api/pacientes_anios/')
  .then(res => res.json())
  .then(dataJson => {
    const edadLabels = dataJson.items.map(item => item.grupo_de_edad);
    const edadValues = dataJson.items.map(item => item.numero_de_casos);

    const edadCtx = document.getElementById('edadChart').getContext('2d');

    new Chart(edadCtx, {
      type: 'bar',
      data: {
        labels: edadLabels,
        color: '#fff',
        datasets: [{
          label: 'Pacientes',
          data: edadValues,
          backgroundColor: '#C9CBA3',
          borderColor: '#fff',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: { y: { beginAtZero: true } },
        plugins: { legend: { display: false } }
      }
    });
  });
