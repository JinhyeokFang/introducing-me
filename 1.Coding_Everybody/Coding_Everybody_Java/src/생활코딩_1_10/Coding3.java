package ��Ȱ�ڵ�_1_10;

public class Coding3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// https://opentutorials.org/course/1223/5331
		
		// �پ��� �����ڵ�
		// result �� ���� 3
        int result = 1 + 2;
        System.out.println(result);
  
        // result �� ���� 2
        result = result - 1;
        System.out.println(result);
  
        // result �� ���� 4
        result = result * 2;
        System.out.println(result);
  
        // result �� ���� 2
        result = result / 2;
        System.out.println(result);
  
        // result �� ���� 10
        result = result + 8;
        // result �� ���� 3
        result = result % 7;
        System.out.println(result);
        
        
        // ������ ����غ���
        int a = 3;
        System.out.println(0%a);
        System.out.println(1%a);
        System.out.println(2%a);
        System.out.println(3%a);
        System.out.println(4%a);
        System.out.println(5%a);
        System.out.println(6%a);
        
        
        //+ �����ڴ� ���ڿ� ���ڸ� ���� �� ��������, ���ڿ��� ���ڿ��� ������ ���� ���ȴ�. �Ʒ��� ������ ����.
        String firstString = "This is";
        String secondString = " a concatenated string.";
        String thirdString = firstString+secondString;
        System.out.println(thirdString);
        
        //Ÿ�Ժ��� ������ �� ���
        int e = 10;
        int b = 3;
          
        float c = 10.0F;
        float d = 3.0F;
          
        System.out.println(e/b);
        System.out.println(c/d);
        System.out.println(e/d);
        
        //�Ʒ��� ���� �����ڵ��� ����� ������.
        int i = 3;
        i++;
        System.out.println(i); // 4 ���
        ++i;
        System.out.println(i); // 5 ���
        System.out.println(++i); // 6 ���
        System.out.println(i++); // 6 ���
        System.out.println(i); // 7 ���
        
        
	}

}
