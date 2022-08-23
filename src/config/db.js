const mongoose = require('mongoose');

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(
      `mongodb+srv://ecommerce:${process.env.MONGODB_PASSWORD}@ecommerce.tyhv9ow.mongodb.net/?retryWrites=true&w=majority`,
      connectionParams
    );
    console.log('✅ DB CONNECTED!');
  } catch (err) {
    console.log('❌ DB CONNECTION ERROR :', err);
  }
};
