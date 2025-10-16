fetch('https://g8928fa3f1dce68-malakathondb.adb.eu-madrid-1.oraclecloudapps.com/ords/admin/api/pacientes_diagnosticos/')
  .then(res => res.json())
  .then(dataJson => {
    const categoriaLabels = dataJson.items.map(item => item.codigo_diagnostico);
    const categoriaValues = dataJson.items.map(item => item.total_pacientes);

    const pieCtx = document.getElementById('pieChart').getContext('2d');
    new Chart(pieCtx, {
      type: 'pie',
      data: {
        labels: categoriaLabels,
        datasets: [{
          data: categoriaValues,
          backgroundColor: [...baseColors],
          borderColor: '#fff',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'right', labels: { color: '#fff' } },
          
          tooltip: {
            bodyColor: '#fff',
            callbacks: { label: c => `${c.label}: ${c.raw.toLocaleString()} casos` }
          }
        }
      }
    });
  });
