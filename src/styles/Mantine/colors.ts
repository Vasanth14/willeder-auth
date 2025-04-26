import { DeepPartial } from '../../types/Global'
import { DefaultMantineColor } from '@mantine/core'

const MantineColors: DeepPartial<
  Record<
    DefaultMantineColor,
    [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ]
  >
> = {
  blue: [
    '#e4e4ff',
    '#b2b3ff',
    '#00A0D2',
    '#585EF2',
    '#1a1aff',
    '#0000FF',
    '#0000b4',
    '#000082',
    '#000050',
    '#000021',
  ],
  gray: [
    '#FFFFFF',
    '#FAFAFA',
    '#F0F0F0',
    '#C8C8C8',
    '#969696',
    '#646464',
    '#595959',
    '#413f40',
    '#292526',
    '#1d1d1d',
  ],
  orange: [
    '#fff2da',
    '#ffdbae',
    '#ffc47d',
    '#ffad4c',
    '#ff951a',
    '#ea7e00',
    '#b36000',
    '#814500',
    '#4f2800',
    '#1f0c00',
  ],
  purple: [
    '#ffe6ff',
    '#efbdf7',
    '#e191ee',
    '#d466e5',
    '#ca48df',
    '#ad22c3',
    '#861a99',
    '#61116e',
    '#3c0743',
    '#17011b',
  ],
  green: [
    '#deffe3',
    '#b0ffb7',
    '#7fff8b',
    '#4dff5e',
    '#20ff32',
    '#0be619',
    '#00A510',
    '#00800a',
    '#004d03',
    '#001b00',
  ],
  red: [
    '#ffe2e2',
    '#ffb1b2',
    '#ff7f7f',
    '#ff4949',
    '#fe1d1b',
    '#e50501',
    '#b30000',
    '#810000',
    '#4f0000',
    '#200000',
  ],
}

export default MantineColors
