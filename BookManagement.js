let books = [
  { title: "วันพีช เล่ม 1", author: "เออิจิโระ โอดะ", year: 2020, price: 125 },
  { title: "วันพีช เล่ม 5", author: "เออิจิโระ โอดะ", year: 2020, price: 125 },
  { title: "วันพีช เล่ม 9", author: "เออิจิโระ โอดะ", year: 2021, price: 125 },
  { title: "วันพีช เล่ม 11", author: "เออิจิโระ โอดะ", year: 2021, price: 125 },
  { title: "วันพีช เล่ม 12", author: "เออิจิโระ โอดะ", year: 2021, price: 70 },
  { title: "วันพีช เล่ม 13", author: "เออิจิโระ โอดะ", year: 2021, price: 125 },
  { title: "วันพีช เล่ม 14", author: "เออิจิโระ โอดะ", year: 2021, price: 125 },
  { title: "วันพีช เล่ม 15", author: "เออิจิโระ โอดะ", year: 2021, price: 70 },
  { title: "วันพีช เล่ม 24", author: "เออิจิโระ โอดะ", year: 2022, price: 70 },
  {
    title: "วันพีช เล่ม 105",
    author: "เออิจิโระ โอดะ",
    year: 2023,
    price: 125,
  },
];

let UserInput = "";

// เมนู
function BookManagement() {
  while (true) {
    UserInput = prompt("เมนูหลัก\n\nเลือกเมนูที่คุณต้องการ : ");
    if (UserInput == 1) {
      Viewbooks();
    } else if (UserInput == 2) {
      AddBook();
    } else if (UserInput == 3) {
      Editbook();
    } else if (UserInput == 4) {
      DeleteBooks();
    } else if (UserInput == 5) {
      alert("ไว้กลับมาใหม่น้าา !!!");
      break;
    } else {
      alert("ไม่มีเมนูนี้!!!");
    }
    continue;
  }
}

//ดูหนังสือ
function Viewbooks() {
  let ViewMenuInput = parseInt(
    prompt(
      "เมนูแสดง/ค้นหา หนังสือ\n\n1.ดูหนังสือทั้งหมด\n2.ค้นหาหนังสือจากรายชื่อ\nกรุณากรอกเมนูที่ต้องการ : "
    )
  );
  if (ViewMenuInput == 1) {
    let showbook = "";
    books.forEach(function (book, index) {
      "เมนูแสดง/ค้นหา หนังสือ\n\n";
      showbook += `ลำดับ : ${index + 1} `;
      showbook += `ชื่อหนังสือ : ${book.title}\n`;
      showbook += `ผู้เขียน : ${book.author} `;
      showbook += `ปีที่ตีพิมพ์ : ${book.year} `;
      showbook += `ราคา : ${book.price}\n`;
    });

    alert("เมนูแสดง/ค้นหา หนังสือ\n\n" + showbook);
  } else if (ViewMenuInput == 2) {
    let searchbook = prompt(
      "เมนูแสดง/ค้นหา หนังสือ\n\nกรอกชื่อหนังสือที่คุณต้องการจะค้นหา : "
    );
    let foundbook = books.find(function (book) {
      return book.title == searchbook;
    });

    console.log(foundbook);
    if (foundbook) {
      alert(`
    เมนูแสดง/ค้นหา หนังสือ\n
    ชื่อหนังสือ : ${foundbook.title} 
    ผู้เขียน : ${foundbook.author} ปีที่ตีพิมพ์ : ${foundbook.year} ราคา : ${foundbook.price}\n`);
    } else {
      alert("เมนูแสดง/ค้นหา หนังสือ\n\nไม่มีหนังสือเล่มนี้!!!");
      alert("ต้องการจะลองอีกครั้งไหม Y/N ?");
      let retrychoice = prompt("Y = ลองอีกครั้ง \n N = กลับไปเมนู");
      if (retrychoice == "y" || retrychoice == "Y") {
        Viewbooks();
      } else if (retrychoice == "n" || retrychoice == "N") {
        alert("กลับสู่หน้าหลัก");
      }
    }
  }
}

//เพิ่มหนังสือ
function AddBook() {
  let insertbook = "";
  let pushbook = "";
  // เพิ่มข้อมูลหนังสือ
  books.push({
    title:
      ((insertbook = prompt("เมนูเพิ่มหนังสือ\n\nชื่อหนังสือ : ")),
      console.log(insertbook),
      (pushbook = insertbook)),
    author: (insertbook = prompt("เมนูเพิ่มหนังสือ\n\nผู้เขียน : ")),
    year: (insertbook = parseInt(
      prompt("เมนูเพิ่มหนังสือ\n\nปีที่ตีพิมพ์ : ")
    )),
    price: (insertbook = parseInt(prompt("เมนูเพิ่มหนังสือ\n\nราคา : "))),
  });
  alert(`เพิ่มหนังสือ ${pushbook} สำเร็จแล้ว`);
  console.log(insertbook);
}

// แก้ไขหนังสือ
function Editbook() {
  let searchbook = prompt(
    "เมนูแก้ไขหนังสือ\n\nกรอกชื่อหนังสือที่คุณต้องการจะแก้ไข : "
  );
  let foundbook = books.find(function (book) {
    return book.title == searchbook;
  });

  console.log(foundbook);
  if (foundbook) {
    let book = foundbook;
    let getbook = "";
    book.title = prompt(
      "เมนูแก้ไขหนังสือ\n\nชื่อหนังสือใหม่: ",
      (getbook = book.title)
    );
    console.log(book.title);
    book.author = prompt("เมนูแก้ไขหนังสือ\n\nชื่อผู้เขียนใหม่: ");
    book.year = parseInt(
      prompt("เมนูแก้ไขหนังสือ\n\nปีที่ตีพิมพ์หนังสือใหม่: ")
    );
    book.price = parseInt(prompt("เมนูแก้ไขหนังสือ\n\nราคาหนังสือใหม่: "));

    alert(`แก้ไขข้อมูลหนังสือจาก ${getbook} เป็น ${book.title} สำเร็จแล้ว!!!`);
  } else {
    alert("เมนูแสดง/ค้นหา หนังสือ\n\nไม่มีหนังสือเล่มนี้!!!");
    alert("ต้องการจะลองอีกครั้งไหม Y/N ?");
    let retrychoice = prompt("Y = ลองอีกครั้ง \n N = กลับไปเมนู");
    if (retrychoice == "y" || retrychoice == "Y") {
      Editbook();
    } else if (retrychoice == "n" || retrychoice == "N") {
      alert("กลับสู่หน้าหลัก");
    }
  }
}

// ลบหนังสือ
function DeleteBooks() {
  let searchbook = prompt(
    "เมนูลบหนังสือ\n\nกรอกชื่อหนังสือที่คุณต้องการจะลบ : "
  );
  let foundbook = books.find(function (book) {
    return book.title == searchbook;
  });
  console.log(foundbook);
  if (foundbook) {
    let getbook = books.indexOf(foundbook);
    if (getbook !== -1) {
      books.splice(getbook, 1);
      alert(`ลบหนังสือ ${foundbook.title} สำเร็จแล้ว!!!`);
    }
  } else {
    alert("เมนูลบหนังสือ\n\nไม่มีหนังสือเล่มนี้!!!");
    alert("ต้องการจะลองอีกครั้งไหม Y/N ?");
    let retrychoice = prompt("Y = ลองอีกครั้ง \n N = กลับไปเมนู");
    if (retrychoice == "y" || retrychoice == "Y") {
      DeleteBooks();
    } else if (retrychoice == "n" || retrychoice == "N") {
      alert("กลับสู่หน้าหลัก");
    }
  }
}
