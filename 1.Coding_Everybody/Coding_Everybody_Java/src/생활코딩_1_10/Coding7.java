package 생활코딩_1_10;

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
		
		//while문 사용법
		int i = 0;
		// i의 값이 10보다 작다면 true, 크다면 false가 된다. 현재 i의 값은 0이기 때문에 이 반복문은 실행된다. 
		while(i<10){         
		    System.out.println("Coding Everybody"+i);
		    // i의 값에 1을 더한다. 반복문의 중괄호의 마지막 라인에 도달하면 반복문은 반복문을 재호출한다. 이때 i<10의 값을 검사하게 된다.
		    i++;
		}
		
		//for문
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
		
		//반복문의 중첩
		for (int m = 0; m < 10; m++) {
            for (int n = 0; n < 10; n++) {
                System.out.println(m + "" + n);
            }
        }
		
		
	}

}
