package ��Ȱ�ڵ�_1_10;

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
        // ��������� ���ڵ��� output�̶�� ������ ��� ���ؼ� ������ �� ���� �־���.
        String output = "";
        while (i < limit) {
            // ���ڸ� ȭ�鿡 ����ϴ� ��� ���� output�� ��Ҵ�.
            output += i;
            i++;
        }
        // �߿�!!! output�� ��� �ִ� ���ڿ��� �޼ҵ� �ܺη� ��ȯ�Ϸ��� �Ʒ��� ���� return Ű���� �ڿ� ��ȯ�Ϸ��� ����
        // ��ġ�ϸ� �ȴ�.
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
        return "������";
    }
 
    public static String getMember2() {
        return "������";
    }
 
    public static String getMember3() {
        return "���̶�";
    }
    
    public static String[] getMembers() {
        String[] members = { "������", "������", "���̶�" };
        return members;
    }
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// �Լ� == �޼ҵ�
		// https://opentutorials.org/course/1223/5369
		
		numbering(); //�׳� ���
		numbering2(5); //�Է�1
		numbering3(1, 5); //�Է�2
		
		// �޼ҵ� numbering�� ������ ���� ���� result�� ����.
        String result = numbering4(1, 5);
        // ���� result�� ���� ȭ�鿡 ����Ѵ�.
        System.out.println(result);
        
        System.out.println(num(1));
        
        System.out.println(getMember1());
        System.out.println(getMember2());
        System.out.println(getMember3());
        
        // String[] members = getMembers();
        
	}

}
