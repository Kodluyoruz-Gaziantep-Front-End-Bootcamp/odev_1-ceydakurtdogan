let arr1 = ['2', 'a', '3', 3, 4, 3, 5, 5]
let arr2 = ['c', 'c', 'h', 1, 1, 1, 4]
let arr3 = [
    { name: 'ali', id: 221 },
    { name: 'veli', id: 343 },
    { name: 'konya', id: 333 },
    { name: 'ali', id: 664 },
    { name: 'selim', id: 112 }
]
let arr4 = [1, 1, 1, 4, 5, 5, 3, 2]


//1.ALIŞTIRMA 

arr1.unshift('a');
console.log(arr1);

//2.ALIŞTIRMA

arr1.push(6);
console.log(arr1);

//3.ALIŞTIRMA

arr1.pop();
console.log(arr1);

//4.ALIŞTIRMA

arr1.shift();
console.log(arr1);

//5.ALIŞTIRMA

  //ilk yöntem iki arrayi CONCAT ile birleştirmek;
let yeni=arr1.concat(arr2);
console.log(yeni);

  //ikinci yöntem iki arrayi SPREAD OPERATOR ile birleştirmek;

  let yeni2=[...arr1,...arr2];
  console.log(yeni2);

//6.ALIŞTIRMA

function bul(arr,el) {
   for(let i=0;i<arr.length;i++){
       if(el===arr[i]){
           return true;
       }else{
           return false;
       }
   }
}
console.log(bul(arr2,"h"));
  
//7.ALIŞTIRMA

console.log(arr2.indexOf("h"));

//8.ALIŞTIRMA

    /*ilk yöntemde SET fonksiyonuyla arraydeki aynı olan elemanların 
    sayısını bire düşürdük */
const s=new Set(arr2);  //dizide 4 eleman kaldı.
s.delete('h'); //toplam eleman sayımız 4 olduğu için 'h' elamanını sildik.
let yeniDizi=[...s];  // object haline dönüşen arrayi tekrar arraya dönüştürdük.
console.log(yeniDizi);

   //**ikinci yöntemde splice metoduyla 0.indeksten itibaren 4 eleman silerek eleman sayımızı 3'e düşürdük.
arr2.splice(0,4);
console.log(arr2);

//9.ALIŞTIRMA

function topla(arr){
    for(let i=0;i<arr.length;i++){
         
        if(typeof arr[i] === 'number'){
           let sum=0;
           return sum+=arr[i];
          
        }

    }
}
console.log("xxx  "+topla(arr1));




//10.ALIŞTIRMA

const str=arr1.map(function (params) {
    return params.toString();

})
console.log(str);

//11.ALIŞTIRMA

console.log(arr3.find(user => user.id===221));

//12.ALIŞTIRMA

console.log(arr3.filter(user => user.name==='ali'));

//13.ALIŞTIRMA

const toplam=arr3.reduce(function(pre,curr){
 
    return pre=pre+curr.id;
    
 

},0);
 
console.log(toplam);

/* 
1-arr1 başına 'a' elemanını ekleyiniz.
2- arr1 sonuna 6 elemanını ekleyiniz
3- arr1 sonundaki elemanı siliniz
4- arr1 başındaki elemanı siliniz
5- arr1 ile arr2 arraylerini iki farklı yöntemle birleştiriniz
6- kendisine gönderilen arrayde verilen elemanın olup olmadığını bulan array ve 
    aranan eleman olmak üzere iki parametre alan ve geriye boolean değer döndüren bir fonksiyon yazınız
    ve bu fonkisiyona arr2 ve 'h' parametresini verip çağırınız
7- arr2 içindeki 'h' elemanın indexsini bulunuz
8- arr2 nin eleman sayısını 3 adete 2 faklı yöntemle düşrünüz
9- kendisine verilecek array elemanlarını döngü ile dönüp, array içindeki number
    değerlerinin toplamını geriye dönen bir fonkiyon yazınız ve arr1 değeri ile çağırınız   
10- arr1 elemanlarını string değere çeviren bir map fonksiyonu yazınız    
11- arr3 içindeki id değeri 221 olan elemanı bulunuz
12- arr3 içindeki user değerleri ali olan elemanları bulunuz
13- arr3 içindeki elemanlarının id değerlerinin toplamlarını bulan bir reduce fonsiyonu yazınız

her sorunun cevabını console.log ile yazıdırın
*/