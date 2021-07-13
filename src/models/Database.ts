import { Dayjs } from 'dayjs';

export type PropertyType = 'text' | 'date' | 'number' | 'title' | 'checkbox' | 'url'

export type Data = { [key in string]: {
  type: PropertyType;
  text?: string;
  date?: Dayjs | {
    start: Dayjs;
    end: Dayjs;
  };
  number?: number;
  title?: {
    name: string,
  };
  checkbox?: boolean;
  url?: string;
}};

export type NetDatabase = {
  results: Array<{ properties: never }>;
}

export type Database = {
  properties: string[];
  data: Data[];
}

export const convertToDatabase = (netDatabase: NetDatabase): Database => {
  const properties = Object.keys(netDatabase.results?.[0].properties || {});
  const data = netDatabase.results.map<Data>((netData) => {
    const keys = Object.keys(netData.properties);
    const result = keys.reduce<Data>((acc, key) => {
      const dataObj = netData.properties[key] as any;
      switch (dataObj.type) {
        case 'title':
          dataObj.title.name = dataObj.title[0]?.plain_text;
          break;
        default:
      }
      return {
        ...acc,
        [key]: dataObj,
      };
    }, {});
    return result;
  });

  return {
    properties,
    data,
  };
};
