import moduleSize from './Size';

export default interface moduleProduct {
  id: string;
  price: number;
  name: string;
  membersOnly?: boolean;
  sizes?: moduleSize[];
}
