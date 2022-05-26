module.exports = {
  async up(queryInterface) {
    const props = [
      {
        typeId: 13,
        rentalPrice: 100,
        description: 'Первая комната',
        photo: 'адрес фото 1',
        address: 'Дворцовая пл. 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        typeId: 13,
        rentalPrice: 200,
        description: 'Вторая комната',
        photo: 'адрес фото 2',
        address: 'Красная пл. 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        typeId: 14,
        rentalPrice: 300,
        description: 'Первая квартира',
        photo: 'адрес фото 3',
        address: 'Невский 13',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        typeId: 14,
        rentalPrice: 400,
        description: 'Вторая квартира',
        photo: 'адрес фото 4',
        address: '1-я Линия 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Properties', props);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Properties', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
