import { Database } from 'models/Database';

export type Widget = {
  name: string;
  pathname: string;
};

export const dbToWidgetList = (database: Database): Widget[] => {
  return database.data.reduce<Widget[]>((acc, data) => {
    const name = data.Name?.title?.name;
    const pathname = data.Pathname?.url;

    if (name && pathname) {
      return [
        ...acc,
        {
          name,
          pathname,
        },
      ];
    }
    return acc;
  }, []);
};
