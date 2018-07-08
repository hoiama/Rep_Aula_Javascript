package br.com.hoiama.icm.testes;
import java.util.Scanner;

public class testeComparationClass {

	public static void main(String[] args) {

		// Integer integer = Integer.valueOf(29);
		// System.out.println(Integer.TYPE);
		// System.out.println(integer.intValue());
		//
		// Paciente paciente1 = new Paciente();
		// Paciente paciente2 = new Paciente();
		// Paciente paciente3 = new Paciente();
		// Paciente paciente4 = new Paciente();
		//
		// paciente1.setId(5l);
		// paciente2.setId(2l);
		// paciente3.setId(3l);
		// paciente4.setId(4l);
		//
		// ArrayList<Paciente> listapacientes = new ArrayList<>();
		// listapacientes.add(paciente1);
		// listapacientes.add(paciente2);
		// listapacientes.add(paciente3);
		// listapacientes.add(paciente4);

		// Comparacaopaciente comparation = new Comparacaopaciente();
		// listapacientes.sort( new Comparator<paciente>() {
		// @Override
		// public int compare(paciente c1, paciente c2) {
		// return Long.compare(c1.getId(), c2.getId());
		// }});
		// listapacientes.sort((c1, c2) -> Long.compare(c1.getId(), c2.getId()));
		//
		//// Collections.sort(listapacientes, comparation);
		// Collections.sort(listapacientes);

		// for (paciente pacienteLocal : listapacientes) {
		// System.out.println(pacienteLocal.getId());
		// }
		// listapacientes.forEach((paciente) -> System.out.println(paciente.getId()));
		//
		// Paciente paciente5 = new Paciente();
		// Salvar salvar = new Salvar();
		//
		// paciente5.setAltura(10);
		// paciente5.setPeso(3);
		// paciente5.setNome("hoiama");
		// paciente5.setEmail("email");
		//
		// salvar.executar(paciente5);
		//

		// Scanner scan = new Scanner(System.in);
		// int i = scan.nextInt();
		// double d = scan.nextDouble();
		// String[] s = scan.();
		// // Write your code here.
		//
		// System.out.println("String: " + s);
		// System.out.println("Double: " + d);
		// System.out.println("Int: " + i);
		//

		// int[] ar = {6,2,3,4,5,7};
		// int soma = 0;
		// for ( int i = 1 ; i < ar[0] ; i++){
		// soma = soma + ar[i];
		// }
		// System.out.println(soma);
		//

		//
		// Scanner scanner = new Scanner(System.in);
		// double payment = scanner.nextDouble();
		// scanner.close();
		// NumberFormat I = NumberFormat.getCurrencyInstance(new Locale("en", "IN"));
		// String us = NumberFormat.getCurrencyInstance(Locale.US).format(payment);
		// String india = I.format(payment);
		// String china =
		// NumberFormat.getCurrencyInstance(Locale.CHINA).format(payment);
		// String france =
		// NumberFormat.getCurrencyInstance(Locale.FRANCE).format(payment);
		// System.out.println("US: " + us);
		// System.out.println("India: " + india);
		// System.out.println("China: " + china);
		// System.out.println("France: " + france);
		//
		//

		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		scan.close();
		
		System.out.println(n);
		int[] a = new int[n];
		
		for (int i = 0; i < a.length; i++) {
			System.out.println(a[i]);
		}
	}

}
