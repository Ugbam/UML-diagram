class Book {
    static totalBooks = 0; 
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
        Book.totalBooks++; 
    }

    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.title} has been borrowed.`);
        } else {
            console.log(`${this.title} is currently unavailable.`);
        }
    }

    returnBook() {
        this.isAvailable = true;
        console.log(`${this.title} has been returned.`);
    }

    static getTotalBooks() {
        console.log(`Total books in the system: ${Book.totalBooks}`);
    }
}

class Member {
    static totalMembers = 0;
    constructor(name, membershipID) {
        this.name = name;
        this.membershipID = membershipID;
        this.borrowedBooks = [];
        Member.totalMembers++; 
    }

    borrowBook(book) {
        if (book.isAvailable) {
            book.borrowBook();
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed "${book.title}".`);
        } else {
            console.log(`${this.name} cannot borrow "${book.title}" as it is unavailable.`);
        }
    }

    returnBook(book) {
        if (this.borrowedBooks.includes(book)) {
            book.returnBook();
            this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
            console.log(`${this.name} returned "${book.title}".`);
        } else {
            console.log(`${this.name} does not have "${book.title}" to return.`);
        }
    }

    static getTotalMembers() {
        console.log(`Total registered members: ${Member.totalMembers}`);
    }
}


const book1 = new Book("Love in Colour", "Bolu Babalola");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");

const member1 = new Member("Chibike", "M001");
const member2 = new Member("Jennifer", "M002");


member1.borrowBook(book1); 
member1.returnBook(book1); 
member2.borrowBook(book1); 

Book.getTotalBooks();
Member.getTotalMembers();
