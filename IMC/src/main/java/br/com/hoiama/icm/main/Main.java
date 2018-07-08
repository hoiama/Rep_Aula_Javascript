package br.com.hoiama.icm.main;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import br.com.hoiama.icm.controller.ControllerImc;
import br.com.hoiama.icm.model.entity.Paciente;
import br.com.hoiama.icm.model.repository.PacienteRepository;
import br.com.hoiama.icm.regras.Controladora;

@ComponentScan(basePackageClasses= {ControllerImc.class, Controladora.class, Paciente.class })
@EnableJpaRepositories (basePackageClasses= {PacienteRepository.class})
@EntityScan(basePackageClasses= {Paciente.class})
@SpringBootApplication
public class Main {
	
	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);
	}
 
}
