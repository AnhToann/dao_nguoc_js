var x = prompt('Moi ban nhap mang');
var arr = x.split((','));
    document.write('Mang ban nhap vao la: <br>');
    for (var i = 0; i <arr.length;i++)
        document.write((i===arr.length-1) ? (arr[i]+'<br>'): (arr[i]+','));
var first =0;
var last = arr.length -1;
while (first < last ){
    var b =arr [first];
    arr[first] = arr[last];
    arr[last] = b;
    first++;
    last--;
}
document.write('Mang sau khi dao nguoc la:');
for (var i = 0; i < arr.length; i++)
    document.write((i===arr.length-1) ? (arr[i]) : (arr[i]+','));
