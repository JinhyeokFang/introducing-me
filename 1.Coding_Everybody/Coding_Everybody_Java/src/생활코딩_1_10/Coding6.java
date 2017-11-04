package 생활코딩_1_10;

public class Coding6 {
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//https://opentutorials.org/course/1223/5365
		
		//&&
        if (true && true) {
            System.out.println(1);
        }
        if (true && false) {
            System.out.println(2);
        } 
        if (false && true) {
            System.out.println(3);
        } 
        if (false && false) {
            System.out.println(4);
        }
 
        //||
        if (true || true) {
            System.out.println(1);
        }
        if (true || false) {
            System.out.println(2);
        }
        if (false || true) {
            System.out.println(3);
        }
        if (false || false) {
            System.out.println(4);
        }
        
        //!
        if (!true) {
            System.out.println(1);
        }
        if (!false) {
            System.out.println(2);
        }
    }
	
}
