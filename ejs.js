const ejs = require('ejs');

ejs.renderFile('./template/ejs/1.html',{
    str:'快吃饭了',
    HL:'<b>反正积极党发链接</b>',
    arr:[1,2,3,4,5],
    fter:'./compontents/footer.html'
}).then((data)=>{
    console.log(data);
},(err)=>{
    console.log(err);
})