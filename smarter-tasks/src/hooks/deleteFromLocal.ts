export const usedeleteStoredValue = (key:string): any => {
    if(localStorage.getItem(key)){
      localStorage.removeItem(key);
      return true;
    }
    else{
      console.log("Item Does not exist !");
    }
    return false;

};