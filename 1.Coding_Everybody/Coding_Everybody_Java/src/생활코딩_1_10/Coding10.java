package ��Ȱ�ڵ�_1_10;

import java.util.Scanner;
import java.io.*;

public class Coding10 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//https://opentutorials.org/course/1223/5575
		// ��ü���� ���α׷��� https://opentutorials.org/course/1223/5399
		
		for(String e : args){
            System.out.println(e);
        }
		
		System.out.println("���ڸ� �Է��Ͻÿ�.");
		Scanner sc = new Scanner(System.in);
        int i = sc.nextInt();
        System.out.println(i*1000);
        sc.close();
        
        System.out.println("���ڸ� �Է��Ͻÿ�.");
        Scanner sc1 = new Scanner(System.in);
        while(sc1.hasNextInt()) {
            System.out.println(sc1.nextInt()*1000); 
        }
        sc1.close();
        
        try {
            File file = new File("out.txt");
            Scanner sc2 = new Scanner(file);
            while(sc2.hasNextInt()) {
                System.out.println(sc2.nextInt()*1000); 
            }
            sc2.close();
        } catch(FileNotFoundException e){
            e.printStackTrace();
        }
	}

}
