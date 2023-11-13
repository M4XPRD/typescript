export {};

type PcBrand = {
  name: string,
  country: string,
  createdAt: Date,
};

type WellKnownBrands = 'apple' | 'lenovo' | 'hp' | 'dell' | 'microsoft' | 'huawei';

// "?:" is used here to prevent TS of using every single brand as needed
type MyPcRecord = {
  [BrandKey in WellKnownBrands]?: PcBrand
};

const brandRecond: MyPcRecord = {
  apple: {
    country: 'USA',
    createdAt: new Date(),
    name: 'Apple',
  },
};

const printPcCatalog = (pcCatalog: MyPcRecord) => {
  console.log(pcCatalog.dell?.country);
};

type PartOfWindow = {
  [Key in 'document' | 'screen' | 'navigator']?: Window[Key]
};

const p: PartOfWindow = {
  screen: window.screen,
};
