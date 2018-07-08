let pacienteController = new PacienteController();
var campoFiltro = document.querySelector(".campoFiltro");
campoFiltro.addEventListener("input", pacienteController.filtroNomes)
var eventoTabelaInteira = document.querySelector(".table");
eventoTabelaInteira.addEventListener("click", pacienteController.botaoDeletar);	

