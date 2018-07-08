class NegociacaoView extends ViewTemplate{
	
	_template(listaNegociacao){
		return 	`
			<table class="table table-hover table-bordered">
			        <thead>
			            <tr>
			                <th onclick="negociacaoController.ordenarListaNegociacao('data')">DATA</th>
			                <th onclick="negociacaoController.ordenarListaNegociacao('quantidade')">QUANTIDADE</th>
			                <th onclick="negociacaoController.ordenarListaNegociacao('valor')">VALOR</th>
			                <th onclick="negociacaoController.ordenarListaNegociacao('volume')">VOLUME</th>
			            </tr>
			        </thead>
			        
			        <tbody>
					    ${listaNegociacao.getNegociacoes().map(n =>
					    	`<tr>
					            <td>${n.data}</td>
					            <td>${n.quantidade}</td>
					            <td>${n.valor}</td>
					            <td>${n.volume}</td>
					        </tr>`
					    ).join('')}
					</tbody>
					
			     	<tfoot>
	       				<td colspan="3">
	       				 	TOTAL =>
	       				</td>
	       				<td>
		       				${listaNegociacao.getNegociacoes().reduce((total,n) =>total += n.volume,0.0)}
	       				</td>
			      	</tfoot>
			</table>
			`;
	}
}