export default interface ITranslation {
  id?: any;
  key: string;
  values: {
    value: string;
    language_id: number;
  }[];
  collection_id: number;
}
