require('dotenv').config();
const mongoose = require('mongoose');
const config = require('../../src/config/config');

const mongooseOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const setupTestDB = () => {
  beforeAll(async () => {
    await mongoose.connect(config.MONGODB_URL, mongooseOptions);
  });

  beforeEach(async () => {
    await Promise.all(
      Object.values(mongoose.connection.collections).map(async (collection) =>
        collection.deleteMany()
      )
    );
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });
};

module.exports = setupTestDB;
