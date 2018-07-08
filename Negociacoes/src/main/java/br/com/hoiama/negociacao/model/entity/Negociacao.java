package br.com.hoiama.negociacao.model.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Negociacao {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long idNegociacao;
	
	@Column(name = "data")
	private String data;
	
	@Column(name= "valor")
	private double valor;
	
	@Column(name = "quantidade")
	private int quantidade;
	
	

	public long getIdNegocaicao() {
		return idNegociacao;
	}

	public void setIdNegocaicao(long idNegociacao) {
		this.idNegociacao = idNegociacao;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public double getValor() {
		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}
}
