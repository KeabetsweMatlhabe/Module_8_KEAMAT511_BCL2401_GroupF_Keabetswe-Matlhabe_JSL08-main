// This one will be a little tricky. So check out this overview first: https://www.youtube.com/watch?v=sJ-c3BA-Ypo

// 1. Create a variable to store the singleton instance of the bank branch. "bankBranchInstance"
let bankBranchInstance = null ;

// 2. Define a class called `BankBranch` for managing branch information.
class BankBranch {
    constructor (BankInfo){
        //  3. it check if the instance already exists if yes, then return it then it will create a new instance
        if (!bankBranchInstance){
            this.bankBranch = bankBranch
            bankBranchInstance = this;
        }
        return bankBranchInstance;
    }
    //4.
    getBranchInfo() {
        return this.getBranchInfo;
    }

    
}


const branchA = new BankBranch("Main Street Branch");
console.log(branchA.getBranchInfo()); // Outputs: Main Street Branch

const branchB = new BankBranch("Second Street Branch");
console.log(branchB.getBranchInfo()); // Still outputs: Main Street Branch, because it's a singleton

console.log(branchA === branchB); // true, both variables point to the same instance

// - We define a `BankBranch` class that represents bank branch information.
// - We use the Singleton pattern to ensure that there is only one instance of the `BankBranch` class.
// - The `bankBranchInstance` variable is used to hold the single instance of the class.
// - When a new `BankBranch` instance is created, it checks if `bankBranchInstance` already exists.
//   If it does, it returns the existing instance; otherwise, it creates a new one.
// - The `getBranchInfo` method allows us to retrieve the branch information from the singleton instance.
// - We demonstrate the Singleton pattern by creating two instances (`branchA` and `branchB`) and show that they both point to the same instance,
//   ensuring that there is only one set of branch information throughout the application.
