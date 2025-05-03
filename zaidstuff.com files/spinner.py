"""import random
def spin():
    ggg = random.randint(1,6)
    spun = input("spin? (y/n)")
    if (spun == 'y'):
        print(ggg)
    elif (6==6):
        print("hh")
def again():
    ggj = input("spin again? (y/n)")
    if (ggj == 'y'):
        spin()
print("welcome to random spinner!")
spin()
for i in range(100000):
    again()"""
file = open('zaid stuff files/kjihujhb.txt', 'r')
print(file)
for line in file:
    print( line )
file.close()
fil = open('zaid stuff files/kjihujhb.txt', 'a')
fil.write("poop")
fil.close()