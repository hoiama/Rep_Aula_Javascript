var ConnectionFactory = (function(){
	
	const nameStores = ['negociacao'];
	const versionDataBase= 9;
	const dataBaseName = 'negociacaoDb';
	var connection = null;
	var connectionClose = null;
	
	return class ConnectionFactoryClass{
		
		constructor(){
			throw exception("class estática, nao pode ser instanciada");
		}
		
		static getConnection(){
			
			return new Promise((resolve, reject) => {
				
				let openRequest = window.indexedDB.open(dataBaseName, versionDataBase);
				
				openRequest.onupgradeneeded = event => {
					console.log('Banco criado com sucesso')
					ConnectionFactory._createStores(event.target.result);
				}
				
				openRequest.onsuccess = event => {
					if(!connection){
						console.log('Connection criada com Banco');
						connection = event.target.result;
						connectionClose = connection.close.bind(connection);
						connection.close = function (){throw new Error('use "closeConnection"')}
						}
					resolve(connection);
				}
				
				openRequest.onerror = event => {
					console.log('Erro conexao Banco')
					reject(event.target.error.name);
				}
			});
		}
		
		static closeConnection(){
			if(connection){
				connectionClose();
				connection = null;
				console.log('Connection fechada com exito');
			}
		}
		
		static _createStores(connection){
			nameStores.forEach(store => {
				
				if(connection.objectStoreNames.contains(store)){
					connection.deleteObjectStore(store);
				}
				
				connection.createObjectStore(store, {autoIncrement:true});
				console.log(`store: ${store} criado com sucesso`);
			});
		}	
	}
})();