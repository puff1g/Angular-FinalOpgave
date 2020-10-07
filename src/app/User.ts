export interface User { //!! Data GET here
    UserId: number;
    UserName: string;
    UserMail: string;
    Password: string;
    IsAdmin: boolean;
}

export interface product{
    ProductID: number;
    Description: string;
    Pris: number;
    Amount: number;
}

/* 
public long ProductID {get; set;}
        public string Name {get; set;}
        public string Description {get; set;}
        public int Pris {get; set;}
        public int Amount {get; set;}
         */