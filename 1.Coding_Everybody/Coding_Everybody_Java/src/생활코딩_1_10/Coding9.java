package 생활코딩_1_10;

public class Coding9 {
	
	public static void numbering() {
        int i = 0;
        while (i < 10) {
            System.out.println(i);
            i++;
        }
    }
	
	public static void numbering2(int limit) {
        int i = 0;
        while (i < limit) {
            System.out.println(i);
            i++;
        }
    }
	
	public static void numbering3(int init, int limit) {
        int i = init;
        while (i < limit) {
            System.out.println(i);
            i++;
        }
    }
	
	public static String numbering4(int init, int limit) {
        int i = init;
        // 만들어지는 숫자들을 output이라는 변수에 담기 위해서 변수에 빈 값을 주었다.
        String output = "";
        while (i < limit) {
            // 숫자를 화면에 출력하는 대신 변수 output에 담았다.
            output += i;
            i++;
        }
        // 중요!!! output에 담겨 있는 문자열을 메소드 외부로 반환하려면 아래와 같이 return 키워드 뒤에 반환하려는 값을
        // 배치하면 된다.
        return output;
    }
	
	public static String num(int i) {
        if(i==0){
            return "zero";
        } else if(i==1){
            return "one";
        } else if(i==2){
            return "two";
        }
        return "none";
    }
	
	public static String getMember1() {
        return "최진혁";
    }
 
    public static String getMember2() {
        return "최유빈";
    }
 
    public static String getMember3() {
        return "한이람";
    }
    
    public static String[] getMembers() {
        String[] members = { "최진혁", "최유빈", "한이람" };
        return members;
    }
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// 함수 == 메소드
		// https://opentutorials.org/course/1223/5369
		
		numbering(); //그냥 출력
		numbering2(5); //입력1
		numbering3(1, 5); //입력2
		
		// 메소드 numbering이 리턴한 값이 변수 result에 담긴다.
        String result = numbering4(1, 5);
        // 변수 result의 값을 화면에 출력한다.
        System.out.println(result);
        
        System.out.println(num(1));
        
        System.out.println(getMember1());
        System.out.println(getMember2());
        System.out.println(getMember3());
        
        // String[] members = getMembers();
        
	}

}
