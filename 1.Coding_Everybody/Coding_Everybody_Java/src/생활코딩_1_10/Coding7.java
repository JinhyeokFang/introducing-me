package ��Ȱ�ڵ�_1_10;

public class Coding7 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// https://opentutorials.org/course/1223/5366
		
		/*
		while (true) {
            System.out.println("Coding Everybody");
        }
        while(false){
    		System.out.println("Coding Everybody");
		}
        */
		
		//while�� ����
		int i = 0;
		// i�� ���� 10���� �۴ٸ� true, ũ�ٸ� false�� �ȴ�. ���� i�� ���� 0�̱� ������ �� �ݺ����� ����ȴ�. 
		while(i<10){         
		    System.out.println("Coding Everybody"+i);
		    // i�� ���� 1�� ���Ѵ�. �ݺ����� �߰�ȣ�� ������ ���ο� �����ϸ� �ݺ����� �ݺ����� ��ȣ���Ѵ�. �̶� i<10�� ���� �˻��ϰ� �ȴ�.
		    i++;
		}
		
		//for��
		for (int j = 0; j < 10; j++) {
            System.out.println("Coding Everybody " + j);
        }
		
		//break
		for (int k = 0; k < 10; k++) {
            if (k == 5)
                break;
            System.out.println("Coding Everybody " + k);
        }
		
		//continue
		for (int l = 0; l < 10; l++) {
            if (l == 5)
                continue;
            System.out.println("Coding Everybody " + l);
        }
		
		//�ݺ����� ��ø
		for (int m = 0; m < 10; m++) {
            for (int n = 0; n < 10; n++) {
                System.out.println(m + "" + n);
            }
        }
		
		
	}

}
