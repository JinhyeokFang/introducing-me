import auth
input_id = input("input your id.\n")
if auth.login(input_id):
    print('Hello, '+input_id)
else:
    print('Who are you?')