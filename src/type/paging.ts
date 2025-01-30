export type TPaging<T> = {
  paging: {
    page: number;
    take: number;
    count: number;
  };
  data: T[];
};
