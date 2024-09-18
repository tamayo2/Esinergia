import { BasicCard as Card } from './BasicCard.jsx'

const defaultCard = {
  title: 'Juan'
}

/**
 *
 * (Mardown)
 * Aquí se colocan las notas **esto es una negrilla**
 * 
 * ### Este es un subtítulo
 * 
 * 
 * 
 *  */ 

export default {
  title: 'Molecules/Cards',
  componente: Card,
  argTypes: {
    title: {
      name: 'title',
      type: 'select',
      options: ['Juan', 'Johan', 'Luis'],
      description: 'Este es el título de la card',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Juan'},
      },
    },  
  },

  args: {
    title: defaultCard.title,
  }
};
  
export const primary = ({
title,
}) => Card({
title
})

export const secondary = ({
  title,
  }) => Card({
  title
  })


/* 
  React.js o Next.js
  1- Configurar librerías y proyecto base
  2- Instalar storybook
  3- Eliminar carpeta stories
  4- Van crear los archivos .stories.js/ts en el mismo  lugar del componente de cada componente
  5- Comenzar documentación base: Controles configurados, ojalé notas notas y variaciones del componente

  nota: crear .nvmrc

*/