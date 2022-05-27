module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const propTypes = [
      {
        name: 'Комната',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Квартира',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Дом',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('PropertyTypes', propTypes);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('PropertyTypes', null, {});
  },
};
