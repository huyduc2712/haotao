const categoryModel = require('./category_model')

const get = async () => {
  // return categories
  return await categoryModel.find({})
}

module.exports = { get }

var categories = [
  {
    _id: 1,
    name: 'Hard Tile & Stone',
    description: 'Copeland',
  },
  {
    _id: 2,
    name: 'Termite Control',
    description: 'Biermatowicz',
  },
  {
    _id: 3,
    name: 'Structural & Misc Steel Erection',
    description: 'Artharg',
  },
  {
    _id: 4,
    name: 'Waterproofing & Caulking',
    description: 'Sterley',
  },
  {
    _id: 5,
    name: 'Electrical and Fire Alarm',
    description: 'Tonepohl',
  },
  {
    _id: 6,
    name: 'Overhead Doors',
    description: 'Mosen',
  },
  {
    _id: 7,
    name: 'Soft Flooring and Base',
    description: 'Grayer',
  },
  {
    _id: 8,
    name: 'Epoxy Flooring',
    description: 'Thurner',
  },
  {
    _id: 9,
    name: 'Rebar & Wire Mesh Install',
    description: 'Mazillius',
  },
  {
    _id: 10,
    name: 'Painting & Vinyl Wall Covering',
    description: 'Bonin',
  },
  {
    _id: 11,
    name: 'Plumbing & Medical Gas',
    description: 'MacAnellye',
  },
  {
    _id: 12,
    name: 'RF Shielding',
    description: 'Hobden',
  },
  {
    _id: 13,
    name: 'Masonry & Precast',
    description: 'Edwardes',
  },
  {
    _id: 14,
    name: 'Masonry & Precast',
    description: 'Lownds',
  },
  {
    _id: 15,
    name: 'Epoxy Flooring',
    description: 'McPeck',
  },
  {
    _id: 16,
    name: 'Marlite Panels (FED)',
    description: 'Coward',
  },
  {
    _id: 17,
    name: 'Painting & Vinyl Wall Covering',
    description: 'Mc Meekin',
  },
  {
    _id: 18,
    name: 'Painting & Vinyl Wall Covering',
    description: 'Chesnay',
  },
  {
    _id: 19,
    name: 'Termite Control',
    description: 'Serck',
  },
  {
    _id: 20,
    name: 'RF Shielding',
    description: 'Dickins',
  },
]
