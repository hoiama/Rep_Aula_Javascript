class NegociacaoController {

	constructor() {
		let $ = document.querySelector.bind(document);
		var self = this;
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		this._form = $('#formulario');
		this._mensagemView = new MensagemView($('#mensagem'));
		this._ordemListaNegociacao = null;
		this._serverNegociacao = new ServerNegociacao();
		this._listaNegociacaoProxy = new Bind(
			new ListaNegociacao(),
			new NegociacaoView($('#negociacaoView')),
			'addNegociacao','clean', 'ordenar', 'desordenar'
		);
		this.init();
	}
	
	
	init(){
		new NegociacaoDao()
			.listarNegociacoes()
			.then((negociacoes) => {
				negociacoes.forEach((negociacao) => {
					this._listaNegociacaoProxy.addNegociacao(negociacao);
				});
			})
			.catch(erro => console.log(erro));
	
		setInterval(() => this._importarNegociacao(), 3000);
	}

	
	adiciona(event) {
		event.preventDefault();
		console.log('click adiciona');
		let negociacao = this._geradorNegociacao();
		new NegociacaoDao()
			.adiciona(negociacao)
			.then(resposta => {
				this._listaNegociacaoProxy.addNegociacao(negociacao);
				this._mensagemView.update(`sucesso, ${resposta}`, 'alert-success');
				this._limpaFormulario();
			})
			.catch(erro => console.log(erro));
	}

	
	apagarLista(event) {
		event.preventDefault();
		new NegociacaoDao()
			.apagarNegociacoes()
			.then(resposta => {
				this._listaNegociacaoProxy.clean();
				this._mensagemView.update(`Tabela limpa, ${resposta}`, 'alert-success');
			}).catch(erro => console.log(erro));
	}
	

	ordenarListaNegociacao(coluna){
		if(this._ordemListaNegociacao == coluna){
			this._listaNegociacaoProxy.desordenar();
		}else{
			this._listaNegociacaoProxy.ordenar((a,b) => a[coluna] - b[coluna]);
		}
		this._ordemListaNegociacao = coluna;
		console.log(coluna);
	}
	
	
	post(event){
		event.preventDefault();
		this._serverNegociacao
			.postNegociacao(this._geradorNegociacao())
			.then(retorno => {
				console.log(retorno);
			})
			.catch(erro => console.log(erro));
	}
	
	
	_importarNegociacao(){
		
		this._serverNegociacao
			.getListaNegociacoes()
			.then(negociacoes =>{
				negociacoes
				.filter(negociacao => {
					return !this._listaNegociacaoProxy.getNegociacoes().some(negociacaoView =>{
						return JSON.stringify(negociacaoView) == JSON.stringify(negociacao);
					});
				})
				.forEach(negociacao => {
					this._listaNegociacaoProxy.addNegociacao(negociacao);
					this._mensagemView.update('Importação concluida', 'alert-success');
				})
			})
			.catch(erro => {
				console.log(erro);
				this._mensagemView.update('erro ao obter promisseAll', 'alert-danger');
			});
	}
	
	
	_geradorNegociacao() {
		try {
			return new Negociacao(
				DateHelper.getData(this._inputData.value),
				parseInt(this._inputQuantidade.value),
				parseFloat(this._inputValor.value)
			);
		} catch (e) {
			console.log(e);
			this._mensagemView.update("Erro no formulario", "alert-danger");
			throw new Error('erro formulario!!!');
		}
	}

	
	_limpaFormulario() {
		this._form.reset();
		this._inputData.focus();
	}
}