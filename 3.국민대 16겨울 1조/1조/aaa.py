import random#라이브러리 참조

max = 100
low = 1
num = 0

while True:#무한루프
     num=random.randint(low +1, max -1)#지정된 범위내 임의수를 생성
     result = input("당신이 생각하는 수가 " + str(num)+" 보다 큽니까 작습니까? 크면 H,작으면 L로 표시! 자신이 생각한 수가 맞을 경우 C입력")
     if result.upper() == 'H':#사람이 생각한 수가 컴퓨터에서 제시한 수보다 크다
         low = num
     elif result.upper() == 'L':#작다
         max = num
     else:#c 수가 맞음
         print(num)#출력
         break#중지