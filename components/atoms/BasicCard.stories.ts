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
  title: 'Atoms/Cards',
  tags: ['autodocs'],
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

Alessandro - CEO (backend)
Gerente - Juan (Cultural) (NUNCA!) ------> Exitos proyectos, certificados de inglés (Institución) A2, Experiencia, Certtificados Drupal, Sistemas

Jorge - junior (Semisenior - Senior) --- Drupal 
David - junior 
Begginer  estimaciones ( 1h ) , 2h levantar la mano (a través)

feat:

/* 
  React.js o Next.js
  1- Configurar librerías y proyecto base
  2- Instalar storybook
  3- Eliminar carpeta stories
  4- Van crear los archivos .stories.js/ts en el mismo  lugar del componente de cada componente
  5- Comenzar documentación base: Controles configurados, ojalé notas notas y variaciones del componente



  nota: crear .nvmrc
  Nota hiper importante: Lo que no está documentado no existe

  axios, validar, zod - valibot (typeguards?) ------> import { z } from 'z', import { number, string, boolean } from 'valibot'

*/