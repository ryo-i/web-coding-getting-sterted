const hello = JSON.parse(
'{"message":{"text":"こんにちは、ふろんとえんど。","selector":".inner__text--hello"}}'
);

const message = { 
    text: hello.message.text, 
    selector: hello.message.selector 
};

const text = message.text;
const selector = message.selector;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(selector).innerHTML = text;
    console.log("text-> " + text);
});
