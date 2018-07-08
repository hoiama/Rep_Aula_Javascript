class ViewTemplate{
	
	constructor(elementoTabela){
		this._elementoTabela = elementoTabela;
	}
	
	_template(){
		throw ('o método Template precisa ser implementado');
	}
	
	update(elemento, clazz=''){
		this._elementoTabela.innerHTML = this._template(elemento, clazz);
	}
}