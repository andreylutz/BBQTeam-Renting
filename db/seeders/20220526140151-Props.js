module.exports = {
  async up(queryInterface) {
    const props = [
      {
        typeId: 13,
        rentalPrice: 127300,
        description: 'Апартаменты от дизайнера. Простота и роскошь....отделка дизайнерской плиткой по индивидуальному проекту Джакомо Марчетти (известный итал.дизайнер) В квартире также проживает ещё несколько человек',
        photo: 'https://ltdfoto.ru/images/2022/05/26/548C64BE-E4F7-4F77-956B-264E82B48419.jpg',
        address: 'Дворцовая пл. 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        typeId: 13,
        rentalPrice: 27000,
        description: 'Сдаётся комната "Тигрица - незабудка", расположение бомба, сдам некурящей паре БЕЗ ЖИВОТНЫХ СТРОГО!!!!',
        photo: 'https://ltdfoto.ru/images/2022/05/26/321109E3-395E-4D31-A928-E034B64FED9A.jpg',
        address: 'Красная пл. 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        typeId: 14,
        rentalPrice: 45111,
        description: 'Комната ХУДОЖНИКА в старом фонде, для тех, кто ценит классику и настоящий стиль, а не безликую икею.. Комфортабельная тахта, ковры для вашего удобства.... Единовременный залог не возвращается квартира',
        photo: 'https://ltdfoto.ru/images/2022/05/26/4A6D8E34-6894-4F2E-A77B-5DB70CBBE45A.jpg',
        address: 'Невский 13',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        typeId: 14,
        rentalPrice: 45500,
        description: 'Сдам комнату в КВАРТИРЕ ХУДОЖНИКА!! Всё необходимое для души настоящего петербуржца, для ценителей шика.... и творческих личностей..!',
        photo: 'https://ltdfoto.ru/images/2022/05/26/66512A55-906E-4D84-8EF1-05CCF9EA021C.jpg',
        address: '1-я Линия 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        typeId: 13,
        rentalPrice: 164000,
        description: 'Апартаменты LUX ELITE GOLD ROSE c  дизайнерским ремонтом высшего класса, АГЕНТАМ МИМО!! только на долгий срок, но пишите и на короткий, рассмотрю всех',
        photo: 'https://ltdfoto.ru/images/2022/05/26/4F2AD966-31A0-4490-B70D-C9DF510F85CA.jpg',
        address: 'Дворцовая пл. 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        typeId: 13,
        rentalPrice: 58000,
        description: 'Эколофт с позитивной энергетикой, мебель ставили по индивидуальному дизайн фэншуй проекту. Место, где отдыхает душа! Пишите на воцап, тут редко захожу',
        photo: 'https://ltdfoto.ru/images/2022/05/26/86F62B34-DF98-4DE2-97BD-DF2DDE02BD14.jpg',
        address: 'Красная пл. 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        typeId: 14,
        rentalPrice: 35000,
        description: 'Первая Смарт-апарт квартира, в которой КАЖДЫЙ метр используется с умом! НЕТ бесполезному захламлению, ДА - нестандартным решениям!!! Возможна также перепланировка, по вашему запросу. В счёт аренды готов купить дверные ручки(комплект)',
        photo: 'https://ltdfoto.ru/images/2022/05/26/D6F66FBA-1521-4564-945B-819F1C99EA07.jpg',
        address: 'Невский 13',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        typeId: 14,
        rentalPrice: 48900,
        description: 'Уютная нежная светлая чистая квартира для встречи восходов и закатов со своей второй половинкой....Сдам на лето семье из 1-2 человек или с животными без детей, цена по запросу меняется уточняйте в ЛС',
        photo: 'https://ltdfoto.ru/images/2022/05/26/A70E315B-665C-4687-A5A9-F3D16AA8BE16.jpg',
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
