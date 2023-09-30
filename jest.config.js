module.exports = {
  collectCoverage: true, // coletar cobertura de testes
  collectCoverageFrom: ['src/**/*.{ts,tsx}'], // arquivos que serão coletados
  coverageDirectory: 'coverage', // pasta onde será salvo os relatórios
  testEnvironment: 'jsdom', // ambiente de teste, jsdom simula o browser
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // arquivo de setup, onde carregaremos a configuração para todos os testes
};
