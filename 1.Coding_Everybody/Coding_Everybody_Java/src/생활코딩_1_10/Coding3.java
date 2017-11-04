package 생활코딩_1_10;

public class Coding3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// https://opentutorials.org/course/1223/5331
		
		// 다양한 연산자들
		// result 의 값은 3
        int result = 1 + 2;
        System.out.println(result);
  
        // result 의 값은 2
        result = result - 1;
        System.out.println(result);
  
        // result 의 값은 4
        result = result * 2;
        System.out.println(result);
  
        // result 의 값은 2
        result = result / 2;
        System.out.println(result);
  
        // result 의 값은 10
        result = result + 8;
        // result 의 값은 3
        result = result % 7;
        System.out.println(result);
        
        
        // 연산자 사용해보기
        int a = 3;
        System.out.println(0%a);
        System.out.println(1%a);
        System.out.println(2%a);
        System.out.println(3%a);
        System.out.println(4%a);
        System.out.println(5%a);
        System.out.println(6%a);
        
        
        //+ 연산자는 숫자와 숫자를 더할 때 사용되지만, 문자열과 문자열을 결합할 때도 사용된다. 아래의 예제를 보자.
        String firstString = "This is";
        String secondString = " a concatenated string.";
        String thirdString = firstString+secondString;
        System.out.println(thirdString);
        
        //타입별로 나누기 한 결과
        int e = 10;
        int b = 3;
          
        float c = 10.0F;
        float d = 3.0F;
          
        System.out.println(e/b);
        System.out.println(c/d);
        System.out.println(e/d);
        
        //아래는 단항 연산자들을 사용한 예제다.
        int i = 3;
        i++;
        System.out.println(i); // 4 출력
        ++i;
        System.out.println(i); // 5 출력
        System.out.println(++i); // 6 출력
        System.out.println(i++); // 6 출력
        System.out.println(i); // 7 출력
        
        
	}

}
