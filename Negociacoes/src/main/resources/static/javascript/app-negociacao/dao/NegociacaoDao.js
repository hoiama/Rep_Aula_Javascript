class NegociacaoDao{
	
	constructor(){
		this._store = 'negociacao';
	}
	
	
	adiciona(negociacao){
		
		return new Promise((resolve, reject) =>{
			
			let request = ConnectionFactory
				.getConnection()
				.then(connection => connection
					.transaction([this._store], 'readwrite')
					.objectStore(this._store)
					.add(negociacao)
				).catch(erro => console.log(erro));
			
			request.onsuccess = (event) => {
				console.log('adicionado com sucesso')
				resolve('adicionado com sucesso no DB');
			}
			
			request.onerror = (event) => {
				console.log(event.target.error);
				reject('erro ao adicionar no DB');
			}
		})
	}
	
	
	listarNegociacoes(){
		
		return 	new Promise((resolve ,reject) => {
			
			console.log('listar negociacao');
			
			let cursor = ConnectionFactory
				.getConnection()
				.then(connection => connection
					.transaction([this._store], 'readwrite')
					.objectStore(this._store)
					.openCursor()
				)
				.catch(erro => console.log(erro));
				
			let negociacoes = [];
			
			cursor.onsuccess = (event) => {
				console.log('listaou do banco');
				let atual = event.target.result;
				
				if(atual){
					console.log(`Negociacao recuperada do DB: ${atual.value}`);
					negociacoes.push(new Negociacao(
						atual.value._data,
						atual.value._quantidade,
						atual.value._valor
					));
					atual.continue();
				}else{
					console.log('recuperou a lista');
					resolve(negociacoes);
				}
			} 
			
			cursor.onerror = (event) => {
				console.log(event.target.error);
				reject(`erro ao buscar negociaçoes com ${this._store}`);
			}
		})
	}
	
	
	apagarNegociacoes(){
		
		return new Promise((resolve, rejejct) =>{
			
			let request = ConnectionFactory
				.getConnection()
				.then(connection => connection
					.transaction([this._store], 'readwrite')
					.objectStore(this._store)
					.clear()
				)
				.catch(erro => console.log(erro));
			
			request.onsuccess = (event) =>{
				console.log(event.target.result);
				resolve('DB limpo com sucesso');
			}
			
			request.onerror = (event) =>{
				reject('erro ao limpar store de dados');
				console.log(event.target.error);
			}
		});
	}
	
}