class ProxyFactory{
	
	static create(objeto, props, acao){
		
        return new Proxy(new ListaNegociacao(), {
        	
        	get(target, prop, referenciaProxy){
        		
        		if(props.includes(prop) && typeof(target[prop]) == 'function'){
        			
        			return function() {
        				Reflect.apply(target[prop], target, arguments);
        				return acao(target);
        			}
        		}
        		return target[prop];
        	}
        });
	}
}