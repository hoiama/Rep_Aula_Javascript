class PacienteController {

	constructor() {
		var $ = document.querySelector.bind(document);
		this._$ = $;
		this._nome = $("nome");
		this._email = $("email");
		this._peso = $("peso");
		this._altura = $("altura");
		this._gordura = $("gordura");
		this._formulario = $("#formulario");
		this._tableBody = $(".table-body");
		this._tabela = $(".table");
		console.log("ConstrutorPaciente Controller");
	}

	salvar(event) {
		event.preventDefault();
		console.log("PacienteController :: salvar");
		let paciente = this.coletorFormulario(this._formulario);

		if (this.validadorPesoAltura(paciente).length == 0) {
			let trPaciente = this.geradorLinhaTabela(paciente);
			this.inserirPaiFilho(this._tableBody, trPaciente);
			this._$("#label-peso").classList.remove("paciente-invalido");
			this._$("#label-altura").classList.remove("paciente-invalido");
			this._$("#label-nome").classList.remove("paciente-invalido");
			this._formulario.reset();
		}
	}
	
	coletorFormulario(formulario) {
		let paciente = {
			nome: formulario.nome.value,
			email: formulario.email.value,
			peso: formulario.peso.value,
			altura: formulario.altura.value,
			gordura: formulario.gordura.value,
			imc: this.gerarIMC(formulario.peso.value, formulario.altura.value),
		}
		console.log("PacienteController::coletorFormulario");
		return paciente;
	}

	geradorLinhaTabela(paciente) {
		let trPaciente = this.geradorElementos("tr", "paciente");
		trPaciente.appendChild(this.geradorElementos("td", "info-nome", paciente.nome));
		trPaciente.appendChild(this.geradorElementos("td", "info-peso", paciente.peso));
		trPaciente.appendChild(this.geradorElementos("td", "info-altura", paciente.altura));
		trPaciente.appendChild(this.geradorElementos("td", "info-gordura", paciente.gordura));
		trPaciente.appendChild(this.geradorElementos("td", "info-email", paciente.email));
		trPaciente.appendChild(this.geradorElementos("td", "info-imc", paciente.imc));
		var tdBotao = this.geradorElementos("td", "info-delete", "");
		tdBotao.appendChild(this.geradorElementos("button", "delete", "x"));
		trPaciente.appendChild(tdBotao);
		return trPaciente;
	}
	
	geradorElementos(elemento, classe, conteudo) {
		let Elemento = document.createElement(elemento);
		Elemento.classList.add(classe);
		Elemento.textContent = conteudo;
		return Elemento;
	}
	
	inserirPaiFilho(pai, filho) {
		pai.appendChild(filho);
	}
	
	validadorPesoAltura(paciente) {
		var arrayErros = [];
		this._$("#label-peso").classList.remove("paciente-invalido");
		this._$("#label-altura").classList.remove("paciente-invalido");
		this._$("#label-nome").classList.remove("paciente-invalido");

		if (paciente.peso >= 300 || paciente.peso <= 0) {
			this._$("#label-peso").classList.add("paciente-invalido");
			arrayErros.push("Erro de Peso");
		}

		if (paciente.altura >= 3 || paciente.altura <= 0) {
			this._$("#label-altura").classList.add("paciente-invalido");
			arrayErros.push("Erro de altura");
		}

		if (paciente.nome == "") {
			this._$("#label-nome").classList.add("paciente-invalido");
			arrayErros.push("Erro de nome");
		}

		this.inserirLiErro(arrayErros);
		return arrayErros;
	}
	
	inserirLiErro(arrayErros) {
		var ulErros = this._$("#mensagem-erro");
		ulErros.innerHTML = "";
		arrayErros.forEach(erro => {
			let li = this.geradorElementos("li", "erros", erro);
			this.inserirPaiFilho(ulErros, li);
		})
	}
	
	gerarIMC(peso, altura){
		return peso /(altura*altura).toFixed(2);
	}
	
	getPacientes() {
		let xhr = new XMLHttpRequest();
		xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
		
		xhr.addEventListener("load", function() {

			if (xhr.status == 200) {
				let resposta = JSON.parse(xhr.responseText);
				resposta.forEach(function (paciente) {
					let linhaPaciente = this.geradorLinhaTabela(paciente2);
					this.inserirPaiFilho(this._tableBody, linhaPaciente);
				})
			} else this.inserirLiErro([ xhr.status ]);
		})

		xhr.send();
	}
	
	
	filtroNomes (){
		var listaTrPacientes = 	this._$(".table").querySelectorAll(".paciente");
		
		for(var i = 0; i < listaTrPacientes.length ; i++){
			var pacienteNome = listaTrPacientes[i].querySelector(".info-nome").textContent;
			var expressao = new RegExp(this.value, "i")
			if(expressao.test(pacienteNome)){
				listaTrPacientes[i].classList.remove("invisivel");
			}else{
				listaTrPacientes[i].classList.add("invisivel");
			}
			if(this.value == null){
				trPaciente.classList.remove("invisivel");
			}
		}
	}

	
	botaoDeletar(event){
		event.preventDefault();
		console.log(event.target.className);
		if(event.target.className == "delete"){
			event.target.parentNode.parentNode.classList.add("apagarDevagar");
			setTimeout(function(){
				event.target.parentNode.parentNode.remove();
			},800)
		}
	}
}