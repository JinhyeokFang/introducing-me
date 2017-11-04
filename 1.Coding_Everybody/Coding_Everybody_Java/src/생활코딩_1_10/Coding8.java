package 생활코딩_1_10;

public class Coding8 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//https://opentutorials.org/course/1223/5373
		
		//배열 생성법
	    String[] classGroup = { "최진혁", "최유빈", "한이람", "이고잉" };
	    System.out.println(classGroup[0]);
        System.out.println(classGroup[1]);
        System.out.println(classGroup[2]);
        System.out.println(classGroup[3]);
        
	    //다음 예제는 배열을 정의하는 다른 방법과 배열에 담겨 있는 값의 수를 알아내는 방법을 보여준다.
        String[] classGroup1 = new String[4];
        classGroup1[0] = "최진혁";
        System.out.println(classGroup1.length);
        classGroup1[1] = "최유빈";
        System.out.println(classGroup1.length);
        classGroup1[2] = "한이람";
        System.out.println(classGroup1.length);
        classGroup1[3] = "이고잉";
        System.out.println(classGroup1.length);
        
        String[] members = { "최진혁", "최유빈", "한이람" };
        for (int i = 0; i < members.length; i++) {
            String member = members[i];
            System.out.println(member + "이 상담을 받았습니다");
        }
        
        //배열의 내용을 탐색할 때 for 문을 좀 더 간편하게 사용할 수 있는 방법이 있다. 아래 코드를 보자. 
        String[] members1 = { "최진혁", "최유빈", "한이람" };
        for (String e : members1) {
            System.out.println(e + "이 상담을 받았습니다");
        }
	}

}
