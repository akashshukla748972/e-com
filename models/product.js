const mongoos = require('mongoose');

// creating Schema for Products
const productSchema = mongoos.Schema({
    id: {
        type: Number, 
        required: true,
        unique:true
    },
    name: {
        type: String,
        required: true,
        minLength: 1,  // Minimum length for the product name
        maxlength: 255  // Maximum length for the product name
    },
    quantity: {
        type: Number,
        required: true,
        min:0   // Minimum value for the product quantity (none-negativ)
    }
}, { timeStamp: true })

const Product = mongoos.model('Product', productSchema);
module.exports = Product;