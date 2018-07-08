package br.com.hoiama.negociacao.main;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import br.com.hoiama.negociacao.controller.ControllerNegociacao;
import br.com.hoiama.negociacao.model.entity.Negociacao;
import br.com.hoiama.negociacao.testes.GeradorNegociacao;

@ComponentScan(basePackageClasses= {ControllerNegociacao.class, GeradorNegociacao.class})
@EnableJpaRepositories (basePackageClasses= {})
@EntityScan(basePackageClasses= {Negociacao.class})
@SpringBootApplication
public class Main {
	
	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);
	}
 
	
}
