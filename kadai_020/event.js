// ボタンとテキスト要素を取得
const textElement = document.getElementById("text");
const buttonElement = document.getElementById("btn");

// ボタンがクリックされたときのイベントを設定
buttonElement.addEventListener("click", () => {
    // テキストを変更
    textElement.textContent = "ボタンがクリックされました";
});

