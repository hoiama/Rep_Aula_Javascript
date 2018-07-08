class DateHelper{
	
	constructor(){
		throw Error("olá, esta classe é estatica e nao pode ser instanciada");
	}
	
	static getData(date){
		
		if(!/^\d{4}-\d{2}-\d{2}$/.test(date)){
			throw new Error('Preencha uma data válida!!');
		}
		
		let data = new Date(...date
	        .split('-')
	        .map((item, indice) => item - indice % 2)
	    );
		
		return `${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`
	}
}