class licenseCheck{
    constructor(name, card_id, seal,){
        this.name = name;
        this.card_id = card_id;
        this.seal = seal;
    }
    
    get(main_seal){
       return this.seal;
    }
    
    set(main_seal){
        this.seal = main_seal;
    }

    Checklicense(){
        if(this.seal === "valid"){
            return `The license of ${this.name} with card ID: ${this.card_id} is valid.`
        } else {
            return `The license of ${this.name} with card ID: ${this.card_id} is not valid.`
        }
    }

    Grantpermission(){
                if(this.seal === "valid"){
            return `${this.name} is granted permission to operate.`
        } else {
            return `${this.name} is not granted permission to operate.`
        } 
    }      
       
};

export {licenseCheck};