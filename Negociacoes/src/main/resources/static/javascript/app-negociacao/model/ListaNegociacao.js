class ListaNegociacao{
	
	constructor(){
		this._listaNegociacoes = [];
	}
	
	addNegociacao(negociacao){
		this._listaNegociacoes.push(negociacao);
	}
	
	clean(){
		this._listaNegociacoes.length = 0;
	}
	
	getNegociacoes(){
		return [].concat(this._listaNegociacoes);
	}
	
	ordenar(criterio){
		this._listaNegociacoes.sort(criterio);
	}
	
	desordenar(criterio){
		this._listaNegociacoes.reverse();
	}
}