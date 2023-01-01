class Library{
    constructor(sections, books, manager, openingTime, closingTime){
        this.sections = sections;
        this.books = books;
        this.manager = manager;
        this.openingTime = openingTime;
        this.closingTime = closingTime;
    }
    manageLibrary = ()=>{
        console.log(`${this.manager} The Library Manager.`)
    }
    issueBooks = ()=>{
        const issue = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(`ReactJs Book Issued..`);
            },1000);
        })
        issue.then((response)=>{
            console.log(response);
        });
    }

    addNewSection = ()=>{
        console.log(`New Sections of ${this.books} Books at ${this.sections} Block.`)
    }

    openLibrary = ()=>{
        const open = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(`Library Opens at 9:30 am..`);
            },2000);
        })
        open.then((response)=>{
            console.log(response);
        });
    }

    closeLibrary = ()=>{
        const close = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(`Library Closes at 4:00 pm..`);
            },1000);
        })
        close.then((response)=>{
            console.log(response);
        });
    }
}
async function testing(){
    var lib = new Library("A", "ReactJs", "Syed Alyan", "9:30 am", "4:00 pm")
    lib.manageLibrary()
    lib.addNewSection()
    lib.issueBooks()
    lib.openLibrary()
    lib.closeLibrary()
}
testing()