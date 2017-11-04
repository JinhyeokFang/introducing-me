import random

win = 0
draw = 0
lose = 0

for count in range(0,10):

    user = input("가위,바위,보 중에서 하나를 골라주세요")
    com = random.randrange(1,3)

    if user == "R":
        if com == 1:
            print("비겻다능!")
            draw = draw + 1

        if com == 2:
            print("이겼다능!")
            win = win + 1

        if com ==  3:
            print("ㅉ 졋다능")
            lose = lose + 1

    if user ==  "S":
        if com == 2:
            print("비겻다능!")
            draw = draw + 1

        if com ==  3:
            print("이겼다능!")
            win = win + 1

        if com ==  1:
            print("ㅉ 졋다능")
            lose = lose + 1

    if user ==  "P":
        if com == 3:
            print("비겼다능!")
            draw = draw + 1

        if com == 2:
            print("ㅉ 졌다능!")
            lose = lose + 1

        if com ==  1:
            print("이겼다능!")
            win = win + 1

print(str(win) + "번 이겼습니다\n")
print(str(lose) + "번 졌습니다\n")
print(str(draw) + "번 비겼습니다\n")