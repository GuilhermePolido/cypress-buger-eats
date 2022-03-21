export default {
  deliver: function () {
    let data = {
      name: 'Guilherme Anderzen Polido',
      cpf: '12345632443',
      email: 'guilherme@gmail.com',
      whatsapp: '45999999999',
      addess: {
        portalCode: '85818430',
        street: 'Rua Roma',
        number: '958',
        details: 'Casa',
        district: 'Cascavel Velho',
        city_state: 'Cascavel/PR',
      },
      delivery_method: 'Moto',
      cnh: 'cnh-digital.jpeg',
    };

    return data;
  },
};
