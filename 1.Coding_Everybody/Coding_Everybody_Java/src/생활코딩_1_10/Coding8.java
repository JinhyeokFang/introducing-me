package ��Ȱ�ڵ�_1_10;

public class Coding8 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//https://opentutorials.org/course/1223/5373
		
		//�迭 ������
	    String[] classGroup = { "������", "������", "���̶�", "�̰���" };
	    System.out.println(classGroup[0]);
        System.out.println(classGroup[1]);
        System.out.println(classGroup[2]);
        System.out.println(classGroup[3]);
        
	    //���� ������ �迭�� �����ϴ� �ٸ� ����� �迭�� ��� �ִ� ���� ���� �˾Ƴ��� ����� �����ش�.
        String[] classGroup1 = new String[4];
        classGroup1[0] = "������";
        System.out.println(classGroup1.length);
        classGroup1[1] = "������";
        System.out.println(classGroup1.length);
        classGroup1[2] = "���̶�";
        System.out.println(classGroup1.length);
        classGroup1[3] = "�̰���";
        System.out.println(classGroup1.length);
        
        String[] members = { "������", "������", "���̶�" };
        for (int i = 0; i < members.length; i++) {
            String member = members[i];
            System.out.println(member + "�� ����� �޾ҽ��ϴ�");
        }
        
        //�迭�� ������ Ž���� �� for ���� �� �� �����ϰ� ����� �� �ִ� ����� �ִ�. �Ʒ� �ڵ带 ����. 
        String[] members1 = { "������", "������", "���̶�" };
        for (String e : members1) {
            System.out.println(e + "�� ����� �޾ҽ��ϴ�");
        }
	}

}
