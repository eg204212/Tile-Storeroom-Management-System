import react, {useState} from "react";
export const AddNewPurchase = (props) => {
    const [Supplier, setSupplier]= useState('');
    const [Quality, setQuality]= useState('');
    const [Stock_Size, setStock_Size]= useState('');
    const [Unit_Price, setUnit_Price]= useState('');
    const [Payment_Mode, setPayment_Mode]= useState('');
    const [Total_Amount, setTotal_Amount]= useState('');
    const [Product_Details, setProduct_Details]= useState('');

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(UserName);
    }
    return (
        <div className="auth-form-container">
           
           <form><label>Add New Purchase Order.</label></form> 

            <form >
            <label>Supplier</label>
            <input value={Supplier} onChange={(e) => setSupplier(e.target.value)} type="Supplier"placeholder="Supplier" id="Supplier" name="Supplier"/>
            </form>
           
           <form >
           <label>Quality</label>
            <input value={Quality} onChange={(e) => setQuality(e.target.value)} type="Quality"placeholder="Quality" id="Quality" name="Quality"/>
           </form>

           <form >
           <label>Stock_Size</label>
            <input value={Stock_Size} onChange={(e) => setStock_Size(e.target.value)} type="Stock_Size"placeholder="Stock_Size" id="Stock_Size" name="Stock_Size"/>
           </form>

           <form >
           <label>Unit Price</label>
            <input value={Unit_Price} onChange={(e) => setUnit_Price(e.target.value)} type="Unit_Price"placeholder="Unit_Price" id="Unit_Price" name="Unit_Price"/>
           </form>

           <form >
           <label>Payment_Mode</label>
            <input value={Payment_Mode} onChange={(e) => setPayment_Mode(e.target.value)} type="Payment_Mode"placeholder="Payment_Mode" id="Payment_Mode" name="Payment_Mode"/>
           </form>

             <form >
           <label>Total_Amount</label>
            <input value={Total_Amount} onChange={(e) => setTotal_Amount(e.target.value)} type="Total_Amount"placeholder="Total_Amount" id="Total_Amount" name="Total_Amount"/>
           </form>

           <form >
           <label>Product Details</label>
            <input value={Product_Details} onChange={(e) => setProduct_Details(e.target.value)} type="SProduct_Details"placeholder="Product Details" id="Product Details" name="Product Details"/>
           </form>
          
           <form onSubmit={handleSubmit}>
           <button>Save</button>
           </form>
           
      
        </div>
        
    )
}