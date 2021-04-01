from random import*

a = ["pierre", "feuille", "ciseaux"]
aide = "regle"
score = 0
for i in range(4):
    print(" ")
    d = input("Pierre, feuille, ciseaux : ")
    print(" ")
    n = choice(a)
    if d == a[0] or d == a[1] or d == a[2]:
        if d == a[0] and n == a[0] or d == a[1] and n == a[1] or d == a[2] and n == a[2]:
            print ("L'ordi à choisis : ", n)
            print("Egalité !")
            print("Score : ", score)
        elif d == a[0] and n == a[2] or d == a[1] and n == a[0] or d == a[2] and n == a[1]:
            print ("L'ordi à choisis : ", n)
            print("Gagné !")
            score = score + 1
            print("Score : ", score)
        else:
            print("L'ordi à choisis : ", n)
            print("Perdu !")
            score = score - 1
            print("Score : ", score)
    elif d == aide:
        print("La pierre bat les ciseaux et perd contre la feuille.")
        print("La feuille bat la pierre et perd contre les ciseaux.")
        print("Les ciseaux battent la feuille et perd contre la pierre.")
    else:
        print("invalid input")