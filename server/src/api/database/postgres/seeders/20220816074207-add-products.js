module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const generateId = (name) => name.split(' ').join('_');

    await queryInterface.bulkInsert('Products', [
      {
        id: generateId('Goodies Bag from Africa'),
        name: 'Goodies Bag from Africa',
        shortDescription:
          'Ini adalah sebuah barang yang terdapat di africa dan memiliki ketahanan yang luar biasa',
        price: 50000,
        color: 'black',
        dimensions: '20L',
        details: 'Memiliki kulit seperti zebra dan ketahanan seperti macan',
        thumb: 'uploads/Goodies_Bag_from_Africa/thumb.jpeg',
        images: 'uploads/Goodies_Bag_from_Africa/images/',
        materials: 'Cartoon',
        category: 'Goods',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: generateId('Gloopy Ashtray by Seth in Blue & Chartreuse'),
        name: 'Gloopy Ashtray by Seth in Blue & Chartreuse',
        shortDescription:
          'A limited edition ashtray designed by Seth to be both gloopy and globby. ',
        price: 170000,
        color: 'white black',
        dimensions: 'Height:3.5in, Opening:2.75in, Rest:1in, Weight:11.2oz',
        details: `
        • Limited edition of 325 featuring a unique gloopy glaze invented by Seth
        • Hand-crafted in Westminster, CO by Hammerly Ceramics
        • Because of the way the gloops glob each piece is entirely unique
        • Very fun to look at
        • A handy notch for resting things
        • Deep ash-catching well
        • Gloopier and globbier than any other ashtray
        • Comes with a certificate of authenticity signed and numbered by Seth
        `,
        thumb: 'uploads/Gloopy_Ashtray_by_Seth_in_Blue_&_Chartreuse/thumb.jpeg',
        images: 'uploads/Gloopy_Ashtray_by_Seth_in_Blue_&_Chartreuse/images/',
        materials: 'Porcelain',
        category: 'Goods',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: generateId('Ashtray Set by Seth in Sand'),
        name: 'Ashtray Set by Seth in Sand',
        shortDescription:
          'Seth used his pottery skills to design the perfect ashtray that also comes with a saucer and a matching vase for flowers. ',
        price: 96000,
        color: 'white black',
        dimensions: 'Height:3.5in, Opening:2.75in, Rest:1in, Weight:11.2oz',
        details: `
        • Designed by Seth
        • Crafted to his incredibly specific guidelines for the perfect ashtray set
        • Deep well ceramic ashtray with a notch
        • Saucer for the ashtray that can be another ashtray if you want
        • Matching vase for flowers because flowers are lovely
        `,
        thumb: 'uploads/Ashtray_Set_by_Seth_in_Sand/thumb.jpeg',
        images: 'uploads/Ashtray_Set_by_Seth_in_Sand/images/',
        materials: 'Stoneware Clay and Glaze',
        category: 'Goods',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
  },
};
