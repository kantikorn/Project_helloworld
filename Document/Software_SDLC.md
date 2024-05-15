># สวัสดีครับ วันนี้ผมได้โจทย์ ในการฝึกงาน ให้ทำ CI CD Software life Cicle 💻😊

## ก่อนอื่นเลยเรามาทำความรู้จัก กระบวนการ CI CD ก่อน ละกันว่าคืออะไร

<p align ="center">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs06WZ7cmn2LOH2z-liycjWe2Vfg51niXz-u9yqDPs7Q&s" alt="CICD">
</p>


> ###### CI/CD คือ กระบวนการหนึ่งที่จะมาช่วยในพัฒนา Software ให้มีประสิทธิภาพมากขึ้น ทั้งในแง่ของระยะเวลาการพัฒนาและคุณภาพของ Software 

##### CI 📁ย่อมาจาก Continuous Integration คือ กระบวนการที่จัดการ Source Code ของเราให้ผ่านกระบวนการการ Testing, Building เพื่อให้แน่ใจว่า Source Code สามารถใช้งานได้จริง

##### CD 📨📦 ย่อมาจาก Continuous Delivery หรือ Continuous Deployment กระบวนการที่ช่วยเหลือให้เราสามารถ Deploy Software ของเราได้อย่างมีประสิทธิภาพ ดยการนำ Source Code ที่ผ่านการ Build และ Testing มาแล้ว  Deploy ขึ้นไปที่ Server
---

>### เมื่อเราได้รู้จักไปเเล้วผมจะเริ่มเข้าเรื่องเลยเเล้วกันครับ 
>-  CI
>-  CD 
---

>## โจทย์ของผมคือ ??
>#### 💬✅สร้างเว็บง่ายๆ เเละ ทำ CI ในการเทส Function เเละ Test Function ที่ไม่ผ่าน ให้ Reject ออกมา ไปจนถึง การ CD คือ Deploy Software ที่พัฒนา อาจจะเป็น Mini Project เเต่ก็เป็นก้าวของการเริ่มต้นที่ดีเลยครับ

### >> 🚀ขั้นตอนเเรกมาเตรียมเครื่องมือกันก่อนดีกว่า Tool Dev
>* เครื่องมือในการทำ เว็บ [ในที่นี้ผมเลือกใช้เป็น Node.js]
  * ทรัพยากรที่ต้องติดตั้ง
    * node.js 
    * express
    ```sh
    npm install express
    ```
    * Github Desktop
>* ไลบรารี่ที่ทำ Automate Testting
  * jest เอะมันคืออะไรนะ ขอขยายความนิดนึงละกัน 
    * jest คือ JavaScript Testing Framework ที่สามารถทำงานได้กับหลาย ๆ โปรเจคไม่ว่าจะเป็น Babel, TypeScript, Node, React, Angular, Vue และอื่น ๆ
    ซึ่งจะสามารถทำ Automate Testing ให้กับฟังก์ชั่นการทำงาน ที่เราเขียน ต่างๆ เเละเจ้าตัว Jest ยังเตรียม Mocking มาให้เราด้วยซึ่งดีมากๆ

---
### 🌐 มาเริ่มต้นโปรเจ็คของเรากันเลย 💨
---
#### 1️⃣ ขั้นตอนเเรก เราจะทำการสร้าง Folder Project ของเรา📁
#### ในที่นี้ เราสร้างเป็น Project_Helloworld (ใคนจะสร้างชื่อะไรเเล้วเเต่ตามสดวกครับ)

  ```sh
    mkdir Project_Helloworld
    cd Project_Helloworld
 ```

#### 2️⃣ เริ่มต้นโปรเจ็กต์ Node.js ด้วยการสร้างไฟล์ `package.json`

   ```sh
    npm init -y
   ```

#### 3️⃣ ติดตั้ง Express:

```sh
    npm install express
```
#### 4️⃣ สร้างไฟล์ index.js เเล้วใส่คำสั่งตามนี้ครับ
```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

```

#### 5️⃣ สร้างไฟล์เป็น index.html เพื่อเทสเว็บของเรา

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello World</h1>

</body>
</html>
```
#### 6️⃣ มาเทส หน้าเว็บของเรากัน
```sh
    node index.js
```

### 😉 มาละจ้า
<p align ="center">
  <img src="../Document/image/Test_web.PNG" alt="testweb">
</p>

### ขั้นตอนสำหรับเว็บเราเสร็จเเล้ว
----

>#### 💻📑 ต่อไปเรามาจัดการ Respositories บน github กัน

### 1️⃣ สร้าง Respositories









