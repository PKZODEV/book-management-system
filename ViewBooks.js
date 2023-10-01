//ดูหนังสือ
export function Viewbooks() {
    let showbook = "";
    books.forEach(function (book, index) {
      showbook += `ลำดับ: ${index + 1} `;
      showbook += `ชื่อหนังสือ: ${book.title}\n`;
      showbook += `ผู้เขียน: ${book.author} `;
      showbook += `ปีที่ตีพิมพ์: ${book.year} `;
      showbook += `ราคา: ${book.price}\n`;
    });
  
    alert(showbook);
  }