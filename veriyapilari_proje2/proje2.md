Merge Sort, bir dizi elemanları bölerek sıralama işlemini gerçekleştirir. Bu nedenle öncelikle diziyi iki eşit parçaya bölerek başlayacağız:

[16, 21, 11] [8, 12, 22]

Her bir parçayı ayrı ayrı Merge Sort algoritmasına göre sıralayacağız. Bunu yapmak için her bir parçayı tekrar ikiye bölerek, aşağıdaki gibi bir yapı elde ediyoruz:

[16] [21, 11] [8] [12, 22]

Bu aşamada sıralama işlemi tamamlanmadı. Bu yüzden her bir parça tekrar birleştirilerek, sıralama işlemi tamamlanacak:

[11, 16, 21] [8, 12, 22]

Son adımda, iki parça birleştirilerek tamamlandı:

[8, 11, 12, 16, 21, 22]

Bu aşamalar sonunda, verilen dizi Merge Sort algoritmasına göre sıralanmış oldu.

Big-O gösterimi O(nlogn)'dir.

