class ServerNegociacao{
	
	constructor(){
		this._http =  new HttpService();
	}
	
	
	getListaNegociacoes(){
		return Promise.all([this.getNegociacoes()])
		.then(arrayListasNegociacoes => {
			return arrayListasNegociacoes.reduce((Acumulador, arrayAtual) => Acumulador.concat(arrayAtual), [])
		})
		.catch(erro => {
			return erro;
		});
	}
	
	
	getNegociacoes(){
		
		return 	this._http
			.get('negociacao/negociacoes')
			.then(Json => {
				return Json.map(objeto => new Negociacao(objeto.data, objeto.quantidade, objeto.valor));
			})
			.catch(erro => {
				console.log(erro);
			})
	}	
	
	
	postNegociacao(dado){
		
		return this._http.post('negociacao/negociacao', dado);
	}
}
