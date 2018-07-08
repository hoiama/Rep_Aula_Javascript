package br.com.hoiama.icm.model.repository;
import org.springframework.data.repository.CrudRepository;
import br.com.hoiama.icm.model.entity.Paciente;

public interface PacienteRepository extends CrudRepository<Paciente, Long>{

}
