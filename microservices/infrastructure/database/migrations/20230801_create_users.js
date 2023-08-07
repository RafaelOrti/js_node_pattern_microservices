module.exports = {
  async up(db, client) {
    await db.collection('users').insertMany([
      { username: 'user1', email: 'user1@example.com' },
      { username: 'user2', email: 'user2@example.com' },
      // ... other user records
    ]);
  },

  async down(db, client) {
    await db.collection('users').deleteMany({});
  }
};
