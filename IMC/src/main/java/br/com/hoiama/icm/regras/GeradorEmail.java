package br.com.hoiama.icm.regras;
import org.apache.commons.mail.DefaultAuthenticator;
import org.apache.commons.mail.Email;
import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.SimpleEmail;
import br.com.hoiama.icm.model.entity.Paciente;

public class GeradorEmail {
	public void geradorGmail(String mensagem, Paciente paciente) {
		try {
			Email gmail = new SimpleEmail();
			gmail.setHostName("smtp.gmail.com");
			gmail.setSmtpPort(465);
			gmail.setAuthenticator(new DefaultAuthenticator("hoiama9@gmail.com", "250112@hR"));
			gmail.setSSLOnConnect(true);
			
			gmail.setFrom("hoiama9@gmail.com");
			gmail.setSubject("Resultado do seu IMC");
			gmail.setMsg(mensagem);
			gmail.addTo(paciente.getEmail());
			gmail.send();
			
		}catch(EmailException e) {
			e.printStackTrace();
		}
	}
}
