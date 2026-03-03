// <reference types="cypress" />

describe('Pruebas de API Demoblaze', () => {
  const baseUrl = 'https://api.demoblaze.com';
  const testUser = {
    username: `usuario_${Date.now()}`, // usuario único por ejecución
    password: 'claveSegura123',
  };

  it('Signup - usuario nuevo', () => {
    cy.request('POST', `${baseUrl}/signup`, testUser).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include('Sign up successful');
    });
  });

  it('Signup - usuario existente', () => {
    cy.request('POST', `${baseUrl}/signup`, testUser).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include('This user already exist');
    });
  });

  it('Login - correcto', () => {
    cy.request('POST', `${baseUrl}/login`, testUser).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('Auth_token');
    });
  });

  it('Login - incorrecto', () => {
    cy.request('POST', `${baseUrl}/login`, {
      username: testUser.username,
      password: 'claveErronea',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include('Wrong password');
    });
  });
});
