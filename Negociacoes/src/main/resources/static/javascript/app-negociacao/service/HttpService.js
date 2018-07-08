class HttpService{
	
	get(url){
		
		return fetch(url)
			.then(resposta => {
				if(!resposta.ok){
					throw new Erro('erro de status no HttpRequest');
				}else{
					return resposta.json();
				}
			})
	}	
	
	
	post(url, dado){
		
		return fetch(url, {
			headers: { 'Content-type': 'application/json' },
			method: 'post',
			body: JSON.stringify(dado) 
		})
		.then(resposta => {
			if(!resposta.ok){
				throw new Error('erro de status no HttpRequest');
			}else{
				return resposta;
			}
		})
	}
}

//		return new Promise((resolve, reject) => {
//			
//			let xhr = new XMLHttpRequest();
//			xhr.open('POST', url, true);
//			xhr.setRequestHeader("Content-type", "application/json");
//			xhr.onreadystatechange = () =>{
//				
//				if(xhr.readyState == 4){
//					if(xhr.status == 200){
//						resolve(JSON.parse(xhr.responseText));
//						console.log('Post enviado com sucesso')
//					}else{
//						reject(xhr.responseText);
//						console.log('Post mal sucesido')
//					}
//				}
//			};
//			xhr.send(JSON.stringify(dado));
//			console.log(JSON.stringify(dado));
//		})

//		return new Promise((resolve, reject) => {
//			
//			let xhr = new XMLHttpRequest();
//			xhr.open('GET', url);
//			
//			xhr.onreadystatechange = () =>{
//				
//				if( xhr.readyState == 4){
//					if(xhr.status == 200){
//						resolve(JSON.parse(xhr.responseText));
//					}else{
//						reject(xhr.responseText);
//					}
//				}
//			}
//			xhr.send();
//		})