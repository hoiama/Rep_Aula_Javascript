package br.com.hoiama.icm.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import br.com.hoiama.icm.model.entity.Paciente;
import br.com.hoiama.icm.regras.Controladora;

@Controller
public class ControllerImc {
	@Autowired
	private Controladora controladora;
		
	@RequestMapping(value="/imc", method= RequestMethod.GET)
	public String teste() {
		return "imc";
	}
	
	@RequestMapping(value="/salvar", method = RequestMethod.GET)
	public String salvarPaciente(
			@RequestParam("nome") String nome, 
			@RequestParam("email") String email,
			@RequestParam("peso") int peso,
			@RequestParam("altura") Double altura) {
	
		Paciente paciente = new Paciente();
		paciente.setNome(nome);
		paciente.setEmail(email);
		paciente.setPeso(peso);
		paciente.setAltura(altura); 
		System.out.println(peso);
		controladora.salvar(paciente);
		return "imc";
	}
}
