#퀴즈 설정
quiz = 0 #선택한 종목 & 반복문에서 쓰는 변수
quizs = ['리그 오브 레전드','종목2','종목3'] #종목 목록
quizAddress = ['a','b','c'] #문제가 든 텍스트 파일의 이름 목록
num = 5 #출제하는 문제의 개수
count = 0 #반복문에서 쓰는 변수

#환영합니다!!
print("퀴즈쇼에 오신것을 환영합니다! \n")

#종목정하기
print("종목을 정해주십시오.\n")
for quiz in quizs:
    count = count + 1
    print(str(count) +'번: '+ quiz)
quiz = input('----------------------------------\n 입력:')
print(str(quiz) + '번 종목을 선택하셨습니다.')

#파일 내용 복사
quizText = open('question/'+ quizAddress[int(quiz) - 1] +'.txt', encoding='utf-8')
quizAnswer = open('question/'+ quizAddress[int(quiz) - 1] +'Answer.txt', encoding='utf-8')
quizLines = quizText.readlines()
answerLines = quizAnswer.readlines()

#문제
while(num):
    #문제 출제
    num = num - 1 
    print("문제:")
    print(quizLines[4 - num])
    answer = input("----------------------------------\n정답:")
    print("----------------------------------")

    #문제 정답 확인
    if(answerLines[4 - num] != answer + '\n'):
        num = 5
        print("틀렸습니다. 퀴즈쇼를 종료합니다.")
        break

#축하합니다
if(num == 0):
    print("축\n")
    print("하\n")
    print("합\n")
    print("니\n")
    print("다\n")
    print("!\n")
    print("\n")
    print("문제를 전부 맞췄습니다. 축하합니다!")