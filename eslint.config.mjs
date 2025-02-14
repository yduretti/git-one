import globals from 'globals';
import typeScriptEslint from 'typescript-eslint'; // Atenção: esse pacote não é o padrão da comunidade

export default {
  files: ['**/*.js'],
  languageOptions: {
    sourceType: 'script'
  }
};