package br.com.hoiama.negociacao.testes;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Component;

import br.com.hoiama.negociacao.model.entity.Negociacao;

@Component
public class GeradorNegociacao {
	
	public List<Negociacao> getNegociacao() {
		
		Negociacao negociacao1 = new Negociacao();
		negociacao1.setIdNegocaicao(1);
		negociacao1.setData("1/6/2018");
		negociacao1.setValor(500);
		negociacao1.setQuantidade(2);
		
		Negociacao negociacao2 = new Negociacao();
		negociacao2.setIdNegocaicao(1);
		negociacao2.setData("1/6/2018");
		negociacao2.setValor(8800);
		negociacao2.setQuantidade(2);
		
		List<Negociacao> negociacoes = new ArrayList<Negociacao>();
		negociacoes.add(negociacao1);
		negociacoes.add(negociacao2);
		
		return negociacoes;
	}
}
