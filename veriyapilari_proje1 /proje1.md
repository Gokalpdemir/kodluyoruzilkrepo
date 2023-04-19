[22, 27, 16, 2, 18, 6]

eleman olan 27, kendisinden önceki eleman olan 22 ile karşılaştırılarak doğru konumuna yerleştirilir:
[22, 27, 16, 2, 18, 6]

eleman olan 16, kendisinden önceki elemanlar olan 27 ve 22 ile karşılaştırılarak doğru konumuna yerleştirilir:
[16, 22, 27, 2, 18, 6]

eleman olan 2, kendisinden önceki elemanlar olan 27, 22 ve 16 ile karşılaştırılarak doğru konumuna yerleştirilir:
[2, 16, 22, 27, 18, 6]

eleman olan 18, kendisinden önceki elemanlar olan 27, 22, 16 ve 2 ile karşılaştırılarak doğru konumuna yerleştirilir:

[2, 16, 18, 22, 27, 6]

eleman olan 6, kendisinden önceki elemanlar olan 27, 22, 18, 16 ve 2 ile karşılaştırılarak doğru konumuna yerleştirilir:
[2, 6, 16, 18, 22, 27]

Dizi bu aşamada sıralanmıştır.

Insertion Sort'un Big-O gösterimi O(n^2)'dir.

Time Complexity: Dizi sıralandıktan sonra, 18 sayısı ortada olduğu için average case kapsamına girer.



[7, 3, 5, 8, 2, 9, 4, 15, 6] 
->[2, 3, 5, 8, 7, 9, 4, 15, 6]
->[2, 3, 4, 8, 7, 9, 5, 15, 6] 
->[2, 3, 4, 5, 7, 9, 8, 15, 6]
->[2, 3, 4, 5, 7, 9, 8, 15, 6]