package br.com.hoiama.icm.testes;
import br.com.hoiama.icm.model.entity.Paciente;
import br.com.hoiama.icm.regras.GeradorEmail;

public class EmailTeste {

	public static void main (String [] args) {
		
		Paciente hoiama = new Paciente();
		hoiama.setEmail("hoiama17@hotmail.com");
		
		GeradorEmail enviarEmail = new GeradorEmail();
		enviarEmail.geradorGmail("testando sistema IMC", hoiama);
	}
}
