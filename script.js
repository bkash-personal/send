function copyNumber() {

```
const number = document.getElementById("number").innerText;

navigator.clipboard.writeText(number);

alert("Number copied successfully!");
```

}
