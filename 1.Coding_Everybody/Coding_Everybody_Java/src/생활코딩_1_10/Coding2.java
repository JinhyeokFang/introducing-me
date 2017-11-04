package 생활코딩_1_10;

public class Coding2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// https://opentutorials.org/course/1223/5293
		
		//다음 예제는 변수에 값을 대입하는 방법을 보여주는 예제다.
		int a;
		a = 1;
		System.out.println(a+1); //2
		 
		a = 2;
		System.out.println(a+1); //3
		
		//아래 예제는 실수를 담는 방법이다.
		double b = 1.1; 
		System.out.println(b+1.1); // 2.2
		 
		b = 2.1; 
		System.out.println(b+1.1); // 3.2
		
		//아래의 예제는 에러가 발생한다.
		/*
		int c = 1.1; 
		System.out.println(c+1.1); 
		*/
		
		//다음 예제는 변수의 값이 꼭  숫자가 와야 하는 것은 아니라는 것을 보여주기 위해서 만든 예제다.
		String first = "coding"; 
		System.out.println(first+" "+"everybody");
		
		//아래와 같이 여러개의 변수(a,b)를 동시에 선언 할 수도 있다.
		String d, e;
		d = "coding";
		e = " everybody";
		System.out.println(d+e);
		
		// 데이터 타입 https://opentutorials.org/course/1223/5375
		// 상수의 데이터 타입 https://opentutorials.org/course/1223/5330
	}

}
