class MensagemView extends ViewTemplate{
	
	_template(mensagem, tipo=''){
		return 	`
			<span id="mensagem-info" class="alert ${tipo} ">
				${mensagem}
			</span>
		`;
	}
}