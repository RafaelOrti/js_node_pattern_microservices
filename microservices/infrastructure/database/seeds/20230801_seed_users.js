module.exports = {
  async up(db, client) {
    await db.collection('users').insertMany([
      { username: 'seedUser1', email: 'seedUser1@example.com' },
      { username: 'seedUser2', email: 'seedUser2@example.com' },
      // ... other seed user records
    ]);
  },

  async down(db, client) {
    await db.collection('users').deleteMany({});
  }
};
