/* eslint-disable import/no-anonymous-default-export */
import { NodePlopAPI, Plop } from 'plop';

export default function (plop: NodePlopAPI) {
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
        path: 'src/components/{{pascalcase name}}.tsx',
        template: 'templates/components.template.hbs',
      },
    ], // array of actions
  });
  plop.setHelper('pascalcase', str => {
    return (' ' + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
      return chr.toUpperCase();
    });
  });
}
