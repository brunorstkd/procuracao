function getDataFromGoogleSpreadsheet() {
    const spreadsheetID = '1CPk6UmZfTCGxPukUO7Pehj5CXuPrqFkQepL3uhRGTLA';
    const url = `https://docs.google.com/spreadsheets/d/${spreadsheetID}/gviz/tq?tqx=out:json`;
  
    fetch(url)
      .then(response => response.text())
      .then(jsonData => {
        const data = JSON.parse(jsonData.substring(47).slice(0, -2)); // Remover a parte inicial indesejada
  
        const Ilsa_var = [];
        const Fra_var = [];
        const Jeferson_var = [];
        const Isamim_var = [];
  
        // Loop pelas linhas a partir da segunda linha (índice 1) e extrair os valores das colunas desejadas
        for (let i = 1; i < data.table.rows.length; i++) {
          const row = data.table.rows[i].c;
          if (row) {
            if (row[0] && row[0].v) {
              Ilsa_var.push(row[0].v);
            }
            if (row[1] && row[1].v) {
              Fra_var.push(row[1].v);
            }
            if (row[2] && row[2].v) {
              Jeferson_var.push(row[2].v);
            }
            if (row[3] && row[3].v) {
              Isamim_var.push(row[3].v);
            }
          }
        }
  
        // Agora, as variáveis Ilsa_var, Fra_var, Jeferson_var e Isamim_var contêm os dados das colunas desejadas a partir da segunda linha.
  
        // Faça o que você deseja com esses arrays aqui.
  
        // Por exemplo, você pode registrá-los no console para ver os dados:
        console.log('Ilsa_var:', Ilsa_var);
        console.log('Fra_var:', Fra_var);
        console.log('Jeferson_var:', Jeferson_var);
        console.log('Isamim_var:', Isamim_var);
      });
     
  
  
  getDataFromGoogleSpreadsheet();  