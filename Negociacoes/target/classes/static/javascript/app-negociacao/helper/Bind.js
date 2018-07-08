class Bind {
	
	constructor(model, view, ...metodos){
		
		let proxy = ProxyFactory.create(model, metodos, (model)=>{
			view.update(model);
		});
		
		view.update(model);
		return proxy;
	}
}