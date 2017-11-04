package 생활코딩_1_10;

public class Coding4 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// https://opentutorials.org/course/1223/5332
		
		// ==
		System.out.println(1==2);           //false
        System.out.println(1==1);           //true
        System.out.println("one"=="two");   //false
        System.out.println("one"=="one");   //true
        
        //!=
        System.out.println(1!=2);           //true
        System.out.println(1!=1);           //false
        System.out.println("one"!="two");   //true  
        System.out.println("one"!="one");   //false
        
        //>
        System.out.println(10>20);       //false
        System.out.println(10>2);            //true
        System.out.println(10>10);           //false
        
        //>=
        System.out.println(10 >= 20); // false
        System.out.println(10 >= 2); // true
        System.out.println(10 >= 10); // true
        
        //.equals
        String a = "Hello world";
        String b = new String("Hello world");
        System.out.println(a == b);
        System.out.println(a.equals(b));
        
        
	}

}
