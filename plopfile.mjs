/* eslint-disable import/no-anonymous-default-export */

export default function (/** @type {import('plop').NodePlopAPI} */ plop) {
  // create your generators here
  plop.setGenerator('basics', {
    description: 'this is a skeleton plopfile',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name: ',
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalcase name}}/{{pascalcase name}}.tsx',
        templateFile: 'templates/componentTSX.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalcase name}}/{{pascalcase name}}.d.ts',
        templateFile: 'templates/componentProps.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalcase name}}/index.ts',
        templateFile: 'templates/componentIndex.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalcase name}}/{{pascalcase name}}.css',
        templateFile: 'templates/componentCSS.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalcase name}}/{{pascalcase name}}.test.tsx',
        templateFile: 'templates/componentTest.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalcase name}}/{{pascalcase name}}.stories.tsx',
        templateFile: 'templates/componentStory.hbs',
      },
    ], // array of actions
  });
  plop.setHelper('pascalcase', function (str) {
    return (' ' + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
      return chr.toUpperCase();
    });
  });
}
