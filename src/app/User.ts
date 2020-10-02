export interface User { //!! Data GET here
    UserId: number;
    UserName: string;
    UserMail: string;
    Password: string;
    IsAdmin: boolean;
}

export interface product {
    ProductID: number;
    Name: string;
    Description: string;
    Pris: Int16Array;
    Amount: Int16Array;
}
/* 
public long ProductID {get; set;}
        public string Name {get; set;}
        public string Description {get; set;}
        public int Pris {get; set;}
        public int Amount {get; set;}
*/