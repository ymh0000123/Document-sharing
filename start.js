function title() {
    fetch("config.json")
        .then((response) => response.json())
        .then((data) => {
            if (data.title != "") {
                document.title = data.title;
                document.getElementById('title').innerHTML = `<h1>${data.title}</h1>`
            }
            else {
                document.title = "文字标题没有设置 ＞︿＜";
                console.log("文字标题没有设置 ＞︿＜");
            }
        });
}

title()

document.head.appendChild(Object.assign(document.createElement('script'),{src:"./style.js"}));
document.head.appendChild(Object.assign(document.createElement('script'),{src:"./generating.js"}));
