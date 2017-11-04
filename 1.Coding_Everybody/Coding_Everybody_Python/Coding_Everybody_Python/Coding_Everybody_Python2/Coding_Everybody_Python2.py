#�α��� ���
in_str = input("Please enter your ID.\n")
real_egoing = "11"
real_k8805 = "ab"
if real_egoing == in_str:
  print("Hello!, egoing")
elif real_k8805 == in_str:
  print("Hello!, k8805")
else:
  print("Who are you?")

#or
in_str = input("Please enter your ID.\n")
real_egoing = "egoing"
real_k8805 = "k8805"
if real_egoing == in_str or real_k8805 == in_str:
  print("Hello!")
else:
  print("Who are you?")

#and
#if �� ��ø�ؼ� ����� ����
input_id = input("Please enter your ID.\n")
input_pwd = input("Please enter your Password.\n")
real_id = "egoing"
real_pwd = "11"
if real_id == input_id:
    if real_pwd == input_pwd:
        print("Hello!")
    else:
        print("You have entered the wrong password .")
        
else:
    print("You have entered the wrong id .")

#and�� ����� �Ƹ��ٿ� ����
input_id = input("Please enter your ID.\n")
input_pwd = input("Please enter your Password.\n")
real_id = "egoing"
real_pwd = "11"
if real_id == input_id and real_pwd == input_pwd:
    print("Hello!")
else:
    print("Login failed .")

#�����̳�(�迭)
print(type('egoing')) #<class 'str'>
name = 'egoing'
print(name) #egoing
print(type(['egoing', 'leezche', 'graphittie'])) #<class 'list'>
names = ['egoing', 'leezche', 'graphittie']
print(names) 
print(names[2]) #graphittie
egoing = ['programmer', 'seoul', 25, False]
egoing[1] = 'busan'
print(egoing) #['programmer', 'busan', 25, False]

#while
while False:
    print('Hello world')
print('After while')

#�ݺ�����
i = 0
while i < 3:
    print('Hello world')
    i = i + 1

#Ȱ��
i = 0
while i < 10:
    print('print("Hello world '+str(i*9)+'")')
    i = i + 1

#���ǹ��� �ݺ����� ��ü
i = 0
while i < 10:
    if i == 4:
        print(i)
    i = i + 1

i = 0
while i < 10:
    if i == 4:
        break
    print(i)
    i = i + 1
print('after while')

#�����̳�(�迭)�� while���� ����
members = ['egoing', 'leezche', 'graphittie']
i = 0
while i < len(members):
    print(members[i])
    i = i + 1

#for���� ����
members = ['egoing', 'leezche', 'graphittie']
for member in members:
    print(member)

#for�� Ȱ��
for item in range(5, 11):
    print(item)

#�α��� �ý��۰��� ����
input_id = input("Please enter your ID.\n")
members = ['egoing', 'k8805', 'leezche']
for member in members:
    if member == input_id:
        print('Hello!, '+member)
        import sys
        sys.exit()
print('Who are you?')

#�Լ������
def a3():
    print('aaa')
a3()

#return ��
def a4():
    return 'aaaa'
print(a4())

#�Է°�
def a(num):
    return 'a'*num
print(a(3))

#�������� �Է°�
def make_string(str, num):
    return str*num
print(make_string('b', 3))

#�α��� ���ø����̼�
input_id = input("Please enter your ID.\n")
def login(_id):
    members = ['egoing', 'k8805', 'leezche']
    for member in members:
        if member == _id:
            return True
    return False
if login(input_id):
    print('Hello, '+input_id)
else:
    print('Who are you?')

#������
import math
print(math.ceil(2.9))
print(math.floor(2.9))
print(math.sqrt(16))

#����� ���ٸ�....!
def egoing_a():
    return 'a'
#��û ���� �ڵ�
def k8805_a():
    return 'B'
#��û ���� �ڵ�
print(egoing_a())



