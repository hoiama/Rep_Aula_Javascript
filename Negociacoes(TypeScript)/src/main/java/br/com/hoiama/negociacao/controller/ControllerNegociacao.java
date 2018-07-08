package br.com.hoiama.negociacao.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import br.com.hoiama.negociacao.model.entity.Negociacao;
import br.com.hoiama.negociacao.testes.GeradorNegociacao;
 
@Controller
public class ControllerNegociacao {

	
	@Autowired
	GeradorNegociacao geradorNegociacao;
	
	
	@RequestMapping(value="/negociacao", method= RequestMethod.GET)
	public String teste() {
		return "negociacao";
	}
	
	@RequestMapping(value ="negociacao/negociacoes", method = RequestMethod.GET)
	@ResponseBody
	public List<Negociacao> getNegociacoes() {
		return geradorNegociacao.getNegociacao();
	}
	
	@RequestMapping(value="/negociacao/negociacao", method=RequestMethod.POST)
	public String postNegociacao(Negociacao negociacao) {
		System.out.println("negociacao recebida em POST: valor :: " + negociacao.getValor());
		return "negociacao";
	}
}
